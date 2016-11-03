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
	var option = config.getConnnectOption({path: '/index.php?app=wx&act=getRecommandPolicyList', method: 'GET'});

    var req = http.request(option, function(res) { 
        res.on('data', function(data) {  
        	var ret = eval('(' + data + ')');
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
 * 获取所有政策列表
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getPolicies(request, response) {
	var keyword = request.body.keyword,
		option = config.getConnnectOption({path: '/index.php?app=wx&act=getPolicies&keyword=' + keyword, method: 'GET'});

    var req = http.request(option, function(res) { 
        res.on('data', function(data) {  
        	var ret = eval('(' + data + ')');
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
 * 获取政策详情
 * @param  {[type]} request  [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function getPolicyById(request, response) {
	var policyId = request.body.policyId,
		option = config.getConnnectOption({path: '/index.php?app=wx&act=getPolicyById&policyId=' + policyId, method: 'GET'});

    var req = http.request(option, function(res) { 
        res.on('data', function(data) {  
        	var ret = eval('(' + data + ')');
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
	getRecommandPolicyList: getRecommandPolicyList,
	getPolicies: getPolicies,
	getPolicyById: getPolicyById
};