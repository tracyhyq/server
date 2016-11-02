/**
 * 政策服务
 * @author tracyqiu
 * @date 2016-11-02
 */

var policyController = require('../controller/policyController');

module.exports = {
	getRecommandPolicyList: policyController.getRecommandPolicyList,
	getPolicies: policyController.getPolicies,
	getPolicyById: policyController.getPolicyById
};

