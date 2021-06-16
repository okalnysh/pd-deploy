let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getCommand(){
	return `"${global.cmd.webdeploy}"`;
}

function getParams(){
	return [
		'-verb:delete',
		`-dest:contentPath="pipedrive\\App_offline.htm",computerName='https://${env.pipedrive_site}:8172/msdeploy.axd?site=pipedrive',authType='basic',username='${env.web_user_name}',password='${env.web_user_password}'`,
		'-enableRule:AppOffline',
		'-allowUntrusted'
	];
}

function getDescription(){
	return 'Return Pipedrive Site in Normal Mode';
}

function getWorkingDir(){
	return null;
}

module.exports.setConfigs = setConfigs;
module.exports.getCommand = getCommand;
module.exports.getParams = getParams;
module.exports.getDescription = getDescription;
module.exports.getWorkingDir = getWorkingDir;