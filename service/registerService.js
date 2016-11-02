/**
 * 注册服务
 * @author tracyqiu
 * @date 2016-11-02
 */

var registerController = require('../controller/registerController');

module.exports = {
	getOrganization: registerController.getOrganization,
	sendCode: registerController.sendCode,
	doRegister: registerController.doRegister
};

