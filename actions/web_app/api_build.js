let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Build back-end app';
}

function getCommand(){
	return 'dotnet';
}

function getParams(){
	return [
		'publish',
		'-c',
		'Release',
		'-r',
		'win10-x64',
		'--self-contained',
		'true'
	];
}

function getWorkingDir(){
	return `${env.working_dir}\\Src\\Api`;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;