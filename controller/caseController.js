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
	var caseType = request.query.caseType,
		option = config.getConnnectOption({path: '/index.php?app=wx&act=getCasesByType&caseType=' + caseType, method: 'GET'});

    var req = http.request(option, function(res) { 
    	var retData = '';

        res.on('data', function(data) {  
        	retData += data;
        });  
        res.on('end', function() {
        	var ret = JSON.parse(retData);
            response.status(200).json(ret); 
        });  
    });  

    req.end();  

    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

/**
 * 获取对接案例列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getSpecialCases(request, response) {
	var option = config.getConnnectOption({path: '/index.php?app=wx&act=getSpecialCases', method: 'GET'});

    var req = http.request(option, function(res) { 
    	var retData = '';

        res.on('data', function(data) {  
        	retData += data;
        });  
        res.on('end', function() {
        	var ret = JSON.parse(retData);
            response.status(200).json(ret); 
        }); 
    });  

    req.end();  

    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

/**
 * 获取案例列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getCases(request, response) {
	var option = config.getConnnectOption({path: '/index.php?app=wx&act=getCases&_=' + new Date().getTime(), method: 'POST'});

	var postData = '';
    var req = http.request(option, function(res) { 
        res.on('data', function(data) { 
        	postData += data;
        }); 
        res.on('end', function(){
        	var ret = JSON.parse(postData);
        	response.status(200).json(ret); 
        }) 
    });  

    req.end();  

    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

/**
 * 获取案例详情
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getCaseDetailById(request, response) {
	var caseId = request.query.caseId,
		option = config.getConnnectOption({path: '/index.php?app=wx&act=getCaseDetailById&caseId=' + caseId, method: 'GET'});

    var req = http.request(option, function(res) { 
    	var retData = '';

        res.on('data', function(data) {  
        	retData += data;
        });  
        res.on('end', function() {
        	var ret = JSON.parse(retData);
            response.status(200).json(ret); 
        });  
    });  

    req.end();  

    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

module.exports = {
	getCasesByType: getCasesByType,
	getSpecialCases: getSpecialCases,
	getCases: getCases,
	getCaseDetailById: getCaseDetailById
};