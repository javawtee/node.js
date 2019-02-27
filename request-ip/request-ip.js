var requestIp = require('request-ip');

const ipMiddleware = function(req, res, next){
	console.log('getting ip');
	console.log(requestIp.getClientIp(req));
};