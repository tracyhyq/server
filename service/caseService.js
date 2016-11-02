/**
 * 案例服务
 * @author tracyqiu
 * @date 2016-11-02
 */

var caseController = require('../controller/caseController');

module.exports = {
	getCasesByType: caseController.getCasesByType,
	getSpecialCases: caseController.getSpecialCases,
	getCases: caseController.getCases,
	getCaseDetailById: caseController.getCaseDetailById
};

