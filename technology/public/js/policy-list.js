/**
 * 政策列表
 * @date 2016-10-31
 */

define(function(require, exports, module) {
	var jquery = require('jquery');
	var util = require('./common/util');
	
	var Page = {
		run: function() {
			this._init();
		},
		_init: function() {
			this._initPolicyList();
		},
		_initPolicyList: function() {
			var me = this,
				query = util.getFromUrlParam('keyword');

			$.ajax({
				url: '/getPolicies',
				type: 'GET',
				data: {
					keyword: query
				},
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					var data = res.data,
						html = '';

					if(data.length) {
						for(var i = 0, len = data.length; i < len; i++) {
							html += '<li>' +
										'<a href="/policyDetail?policyId=' + data[i].policyId + '">《'+ data[i].policyName +'》</a>' +
										'<span class="time">' + data[i].publishTime + '</span>' +
										'<span class="region">' + data[i].region + '</span>' +
									'</li>';
						}
					} else {
						html += '<li>没有搜索到结果</li>';
					}
					
					$('.policies ul').html(html);
				} else {
					util.alert('初始化政策列表失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		}
	};
	
	Page.run();
});