const exec = require('../exec');

const actions = [
	require('../actions/web_app/site_maintenance_on'),
	require('../actions/web_app/del_wwwroot'),
	require('../actions/web_app/del_views_assets'),
	require('../actions/web_app/del_views_home'),
	require('../actions/web_app/rmdir_views_home_assets'),
	require('../actions/web_app/rmdir_wwwroot_assets'),
	require('../actions/web_app/copy_appsettings'),
	require('../actions/web_app/copy_client_config'),
	require('../actions/web_app/client_prepare'),
	require('../actions/web_app/client_build'),
	require('../actions/web_app/copy_wwwroot'),
	require('../actions/web_app/copy_views_home'),
	require('../actions/web_app/copy_index'),
	require('../actions/web_app/api_build'),
	require('../actions/web_app/site_remove_content'),
	require('../actions/web_app/site_deploy_content'),
	require('../actions/web_app/site_maintenance_off')
];

function run(){
	exec.run(actions);
}


module.exports.run = run;
module.exports.actions = actions;