let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Build migration app';
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
	return `${env.working_dir}\\migrations\\DbMigrator`;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;