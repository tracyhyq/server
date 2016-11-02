/**
 * 工具
 * @date 2016-10-31
 */

define(function(require, exports, module) {
	module.exports = {
		/**
		 * 提示框
		 * @param  {[type]} msg [description]
		 * @return {[type]}     [description]
		 */
		alert:function(msg, end){
		    if(layer){
		        layer.open({
		            shade:false,
		            content: msg,
		            style: 'background-color:rgba(0,0,0,.5); color:#fff; border:none;',
		            time: 2,
		            end: end || null
		        });
		    }else{
		        alert(msg);
		    }
		},
		/**
		 * 验证手机号码正确性
		 * @param  {[type]} mobile [description]
		 * @return {[type]}        [description]
		 */
		checkMobile: function(mobile) {
			return /^1(3|4|5|7|8)\d{9}$/.test(mobile);
		},
		/**
		 * form数据转换成json
		 * @param  {[type]} params [description]
		 * @return {[type]}        [description]
		 */
		paramToJson: function(params) {
			var paramArr = params.split('&'),
				len = paramArr.length,
				result = {};

			for(var i = 0; i < len; i ++) {
				var item = paramArr[i].split('=');
				result[item[0]] = item[1];
			}

			return result;
		},
		/**
		 * 从url里面获取参数值
		 * 
		 * @param  {[type]} name [description]
		 * @return {[type]}      [description]
		 */
		getFromUrlParam: function(name) {
			var queryStr = window.location.search,
				query = queryStr ? queryStr.substring(1) : '',
				paramArr;

			if(!query) return "";
			paramArr = query.split('&');

			for(var i = 0, len = paramArr.length; i < len; i++) {
				var item = paramArr[i].split('=');

				if(name === item[0]) return item[1];
			}

			return '';
		}
	};
});