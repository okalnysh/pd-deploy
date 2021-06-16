const exec = require('../exec');

const actions = [
	require('../actions/db_migration/copy_appsettings'),
	require('../actions/db_migration/app_build'),
	require('../actions/db_migration/run_migration')
];

function run(){
	exec.run(actions);
}


module.exports.run = run;
module.exports.actions = actions;