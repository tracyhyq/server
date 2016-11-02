/**
 * 政策详情
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
				policyId = util.getFromUrlParam('policyId');

			$.ajax({
				url: '/getPolicyById',
				type: 'GET',
				data: {
					policyId: policyId
				},
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					var data = res.data,
						html = '';

					html = '<div class="policy-title">' + data.policyName + '</div>' +
							'<div class="policy-time">' + data.publishTime + '</div>' +
							'<div class="policy-content">' + data.content +'</div>';
							
					$('.policy-detail-wrap').html(html);
				} else {
					util.alert('获取政策详情失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		}
	};
	
	Page.run();
});