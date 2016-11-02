/**
 * 案例页面业务处理，包括案例列表、案例详情、成功案例
 * @author tracyqiu
 * @date 2016-11-02
 */

var http = require('http');
var querystring = require('querystring');
var config = require('../config/serverConfig');

/**
 * 根据type获取案例列表
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
function getCasesByType(request, response) {
	var result = {
		"success": true,
		"data": [
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "案例名称"
			},
			{
				"caseId": 2,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "案例名称1"
			},
			{
				"caseId": 3,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "案例名称2"
			},
			{
				"caseId": 4,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "案例名称3"
			},
			{
				"caseId": 5,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "案例名称4"
			}
		]
	};

	response.status(200).json(result);
}

/**
 * 获取对接案例列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getSpecialCases(request, response) {
	var result = {
		"success": true,
		"data": [
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			},
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			},
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			}
		]
	};

	response.status(200).json(result);
}

/**
 * 获取案例列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getCases(request, response) {
	var result = {
		"success": true,
		"data": [
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			},
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			},
			{
				"caseId": 1,
				"picSrc": "http://www.baidu.com/img/bd_logo1.png",
				"caseTitle": "中国四联仪器表集团有限公司中国四联仪器表集团有限公司",
				"caseDesc": "中国四联仪器表集团有限公司于1987年以四川仪表厂为核心..."
			}
		]
	};

	response.status(200).json(result);
}

/**
 * 获取案例详情
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getCaseDetailById(request, response) {
	var result = {
		"success": true,
		"data": {
			"title": "案例title",
			"time": "2016-01-29 12:23:43",
			"content": "<p>这里是案例详情内容</p><p>这里是案例详情内容</p><p>这里是案例详情内容</p><p>这里是案例详情内容</p><p>这里是案例详情内容</p>"
		}
	};

	response.status(200).json(result);
}

module.exports = {
	getCasesByType: getCasesByType,
	getSpecialCases: getSpecialCases,
	getCases: getCases,
	getCaseDetailById: getCaseDetailById
};