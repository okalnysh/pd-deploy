let global = {};
let env = {};

function setConfigs(globalParams, envParams){
	global = globalParams;
	env = envParams;
}

function getDescription(){
	return 'Deploy new content of the web app';
}

function getCommand(){
	return `"${global.cmd.webdeploy}"`;
}

function getParams(){
	return [
		'-verb:sync',
		'-postSync:runCommand=\'%windir%\\system32\\inetsrv\\appcmd start sites "pipedrive"\',waitInterval=30000',
		`-source:iisApp='${env.working_dir}\\Src\\Api\\bin\\Release\\netcoreapp2.1\\win10-x64\\publish'`,
		`-dest:iisapp='pipedrive',computerName='https://${env.pipedrive_site}:8172/msdeploy.axd?site=pipedrive',authType='basic',username='${env.web_user_name}',password='${env.web_user_password}'`,
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