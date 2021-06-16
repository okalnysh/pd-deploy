let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Run migration';
}

function getCommand(){
	return "DbMigrator.exe";
}

function getParams(){
	return [];
}

function getWorkingDir(){
	return `${env.working_dir}\\migrations\\DbMigrator\\bin\\Release\\netcoreapp2.0\\win10-x64\\publish`;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;