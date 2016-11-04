/**
 * 注册服务业务处理
 * @author tracyqiu
 * @date 2016-11-02
 */

var http = require('http');
var querystring = require('querystring');
var config = require('../config/serverConfig');

/**
 * 获取机构行业列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getOrganization(request, response) {
	var option = config.getConnnectOption({path: '/index.php?app=wx&act=getOrganization', method: 'GET'});

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
 * 发送验证码
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function sendCode(request, response) {
	var tel = request.body.mobile,
		queryData = querystring.stringify({
			'mobile': tel
		}),
		option = config.getConnnectOption({
			path: '/index.php?app=wx&act=sendCode', 
			method: 'POST',
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded',
		        'Content-Length': queryData.length
			}
		});

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

    req.write(queryData);
    req.end();  
    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

/**
 * 注册
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function doRegister(request, response) {
	var param = request.body,
		queryData = querystring.stringify({
			organizationId: param.organization,
			organizationName: param.organizationName,
			industryId: param.industry,
			contact: param.contact,
			userName: param.userName,
			mobile: param.mobile,
			code: param.code,
			password: param.password,
			requirementType: param.requirementType
		}),
		option = config.getConnnectOption({
			path: '/index.php?app=wx&act=doRegister', 
			method: 'POST',
			headers: {
		        'Content-Type': 'application/x-www-form-urlencoded',
		        'Content-Length': queryData.length
			}
		});

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

    req.write(queryData);
    req.end();  
    req.on('error', function(e) {  
        console.error(e); 
        response.status(500); 
    });
}

/**
 * 对外API
 * @type {Object}
 */
module.exports = {
	getOrganization: getOrganization,
	sendCode: sendCode,
	doRegister: doRegister
};