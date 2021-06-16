const { spawn } = require('child_process');
let _isRobocopy = false;

_actions = [];
_currentActionIndex = 0;

function onSuccessfulActionCompletion(){
     _currentActionIndex += 1;
    doNextAction();
}

function onChildExit(code) {
    if((_isRobocopy && (code <= 7)) || (!_isRobocopy && (code === 0)))
        onSuccessfulActionCompletion();
    else
        process.exit(code);
}

function onChildProgress(data) {
    console.log(`[${new Date().toLocaleTimeString()}] ${data.toString()}`);
}

function onChildStart(description){
    console.log('***');
    console.log(`*** ${description}`);
    console.log('***');
}

function onChildError(error) {
    console.log(`[${new Date().toLocaleTimeString()}] ${error.message}`);
}

function setChildOutputs(child){
    child.stdout.on('data', onChildProgress);
    child.stderr.on('data', onChildProgress);

    child.stdout.on('error', onChildError);
    child.stderr.on('error', onChildError);
    child.on('error', onChildError);

    child.on('exit', onChildExit);
}

function execute(action){
    onChildStart(action.getDescription());

    if(action.getCommand().toLowerCase().trim() === 'robocopy') _isRobocopy = true;

    const child = spawn(action.getCommand(), action.getParams(), {shell: true, cwd: action.getWorkingDir()});
    setChildOutputs(child);
}

function doNextAction(){
    if(_currentActionIndex !== _actions.length)
        execute(_actions[_currentActionIndex]);
}

function run(actions) {
	_actions = actions;
    _currentActionIndex = 0;
    doNextAction();
}

module.exports.run = run;