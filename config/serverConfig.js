/**
 * 服务器配置
 * @author tracyqiu
 */

var REMOTE_HOST = '222.180.163.242';
var REMOTE_PORT = '8002';

/**
 * 获取服务器连接参数
 * @param  {[type]} opt [description]
 * @return {[type]}     [description]
 */
function getConnnectOption(opt) {
	return {
		host : REMOTE_HOST,  
        port : REMOTE_PORT,  
        path : opt.path,  
        method : opt.method,
        headers: opt.headers ? opt.headers : {}
	};
}

module.exports = {
	getConnnectOption: getConnnectOption
};