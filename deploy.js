// get configuration parameters from json files
const global = require('./configs/global.json');
const env = require('./configs/' + process.argv[2] + '.json');
const batch = require('./batches/' + process.argv[3]);


// get secret values from environment variables
env.web_user_name = process.env.lgfg_web_user_name;
env.web_user_password = process.env.lgfg_web_user_password;


// set global and env parameters for all actions
for(i = 0; i < batch.actions.length; i++)
	batch.actions[i].setConfigs(global, env);

	
// run specified batch
batch.run();