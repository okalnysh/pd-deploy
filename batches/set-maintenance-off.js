const exec = require('../exec');

const actions = [
	require('../actions/web_app/site_maintenance_off')
];

function run(){
	exec.run(actions);
}


module.exports.run = run;
module.exports.actions = actions;