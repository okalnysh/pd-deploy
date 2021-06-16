let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Remove existing content of the web app';
}

function getCommand(){
	return `"${global.cmd.webdeploy}"`;
}

function getParams(){
	return [
		'-verb:sync',
		'-preSync:runCommand=\'%windir%\\system32\\inetsrv\\appcmd stop sites "pipedrive"\',waitInterval=30000',
		`-source:contentPath='${global.path.empty_dir}'`,
		`-dest:contentPath="pipedrive",computerName='https://${env.pipedrive_site}:8172/msdeploy.axd?site=pipedrive',authType='basic',username='${env.web_user_name}',password='${env.web_user_password}'`,
		'-enableRule:AppOffline',
		'-allowUntrusted'
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