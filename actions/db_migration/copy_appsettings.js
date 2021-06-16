let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Substitute appSettings.json file';
}

function getCommand(){
	return 'copy';
}

function getParams(){
	return [
		'/Y',
		`"${env.configs_dir}\\appsettings-migrations.json"`,
		`"${env.working_dir}\\migrations\\DbMigrator\\appSettings.json"`
	];
}

function getWorkingDir(){
	return null;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;