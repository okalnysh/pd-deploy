let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Copy client app into Views\\Home folder';
}

function getCommand(){
	return 'robocopy';
}

function getParams(){
	return [
		`"${env.working_dir}\\Src\\Client\\dist"`,
		`"${env.working_dir}\\Src\\Api\\Views\\Home"`,
		'/MIR',
		'/IS'
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