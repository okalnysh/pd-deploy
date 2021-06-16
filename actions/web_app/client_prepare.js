let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Load client libraries';
}

function getCommand(){
	return 'yarn';
}

function getParams(){
	return ['install'];
}

function getWorkingDir(){
	return `${env.working_dir}\\Src\\Client`;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;