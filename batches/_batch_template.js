const exec = require('../exec');

const actions = [
	//require('../actions/<action-file>')
];

function run(){
	exec.run(actions);
}


module.exports.run = run;
module.exports.actions = actions;