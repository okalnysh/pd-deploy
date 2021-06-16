let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Substitute index.cshtml file';
}

function getCommand(){
	return 'copy';
}

function getParams(){
	return [
		'/Y',
		`"${env.working_dir}\\Src\\Api\\Views\\Home\\index.html"`,
		`"${env.working_dir}\\Src\\Api\\Views\\Home\\index.cshtml"`
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