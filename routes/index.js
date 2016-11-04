var express = require('express');
var router = express.Router();
var registerService = require('../service/registerService');
var caseService = require('../service/caseService');
var policyService = require('../service/policyService');

/**
 * 注册页面的接口
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.render('register/index.html');} [description]
 * @return {[type]}      [description]
 */
router.get('/register', function(req, res) {
	res.render('register/index.html');
});
router.get('/getOrganization', function(req, res) {
	registerService.getOrganization(req, res);
});
router.post('/sendCode', function(req, res) {
	registerService.sendCode(req, res);
});
router.post('/doRegister', function(req, res) {
	registerService.doRegister(req, res);
});


/**
 * 案例相关路由
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.render('case/case-suc.html');} [description]
 * @return {[type]}      [description]
 */
router.get('/caseSuc', function(req, res) {
	res.render('case/case-suc.html');
});

/**
 * 根据type获取案例列表
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.get('/getCasesByType', function(req, res) {
	caseService.getCasesByType(req, res);
});

/* 成功案例. */
router.get('/financing', function(req, res) {
	res.render('financing/financing.html');
});

/**
 * 获取对接案例列表
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.get('/getSpecialCases', function(req, res) {
	caseService.getSpecialCases(req, res);
});

/* 案例列表 */
router.get('/caseList', function(req, res) {
	res.render('case/case-list.html');
});

/**
 * 获取案例列表
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.post('/getCases', function(req, res) {
	caseService.getCases(req, res);
});

/* 案例详情 */
router.get('/caseDetail', function(req, res) {
	res.render('case/case-detail.html');
});

/**
 * 获取案例详情
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
router.get('/getCaseDetailById', function(req, res) {
	caseService.getCaseDetailById(req, res);
});

/* 政策宣传 */
router.get('/policy', function(req, res) {
	res.render('policy/policy.html');
});

/**
 * 获取推荐政策列表
 * @param  {[type]} req  [description]
 * @param  {Object} res) {	var        result [description]
 * @return {[type]}      [description]
 */
router.get('/getRecommandPolicyList', function(req, res) {
	policyService.getRecommandPolicyList(req, res);
});

/* 政策列表 */
router.get('/policyList', function(req, res) {
	res.render('policy/policy-list.html');
});

/**
 * 政策列表
 * @param  {[type]} req                    [description]
 * @param  {Object} res)                   {	var                                         result        [description]
 * @param  {[type]} options."policyId":    2                                              [description]
 * @param  {[type]} options."policyName":  "失业保险条例"                                       [description]
 * @param  {[type]} options."publishTime": "2016-01-29                                    15:43:46"     [description]
 * @param  {[type]} options."region":      "北京"			}		]	};	res.status(200).json(result); [description]
 * @return {[type]}                        [description]
 */
router.get('/getPolicies', function(req, res) {
	policyService.getPolicies(req, res);
});

/* 政策详情 */
router.get('/policyDetail', function(req, res) {
	res.render('policy/policy-detail.html');
});

/**
 * 获取政策详情
 * @param  {[type]} req  [description]
 * @param  {Object} res) {	var        result [description]
 * @return {[type]}      [description]
 */
router.get('/getPolicyById', function(req, res) {
	policyService.getPolicyById(req, res);
});

/* 质押融资 */
router.get('/pledge', function(req, res) {
	res.render('pledge/pledge.html');
});

module.exports = router;