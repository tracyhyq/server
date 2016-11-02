/**
 * 政策相关业务
 * @author tracyqiu
 * @date 2016-11-02
 */

var http = require('http');
var querystring = require('querystring');
var config = require('../config/serverConfig');

/**
 * 获取推荐政策列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getRecommandPolicyList(request, response) {
	var result = {
		"success": true,
		"data": [
			{
				"policyId": 1,
				"policyName": "中华人民共和国劳动争议仲裁法",
				"publishTime": "2016-01-29 15:43:46",
				"region": "重庆"
			},
			{
				"policyId": 2,
				"policyName": "失业保险条例",
				"publishTime": "2016-01-29 15:43:46",
				"region": "北京"
			}
		]
	};

	response.status(200).json(result);
}

/**
 * 获取所有政策列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getPolicies(request, response) {
	var result = {
		"success": true,
		"data": [
			{
				"policyId": 1,
				"policyName": "中华人民共和国劳动争议仲裁法",
				"publishTime": "2016-01-29 15:43:46",
				"region": "重庆"
			},
			{
				"policyId": 2,
				"policyName": "失业保险条例",
				"publishTime": "2016-01-29 15:43:46",
				"region": "北京"
			}
		]
	};

	response.status(200).json(result);
}

/**
 * 获取政策详情
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getPolicyById(request, response) {
	var result = {
		"success": true,
		"data": {
			"policyName": "政策title",
			"publishTime": "2016-01-29 12:23:43",
			"content": "<p>这里是政策详情内容</p>"
		}
	};

	response.status(200).json(result);
}

module.exports = {
	getRecommandPolicyList: getRecommandPolicyList,
	getPolicies: getPolicies,
	getPolicyById: getPolicyById
};