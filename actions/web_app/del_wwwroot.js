let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getCommand(){
	return 'del';
}

function getParams(){
	return [
		'/f',
		'/s',
		'/q',
		`"${env.working_dir}\\Src\\Api\\wwwroot\\*.*"`
	];
}

function getDescription(){
	return 'Clear Api\\wwwroot folder';
}

function getWorkingDir(){
	return null;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;