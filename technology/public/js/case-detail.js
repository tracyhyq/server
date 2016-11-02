/**
 * 案例详情
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
			this._initCaseList();
		},
		_initCaseList: function() {
			var me = this,
				caseId = util.getFromUrlParam('caseId');

			$.ajax({
				url: '/getCaseDetailById',
				type: 'GET',
				data: {
					caseId: caseId
				},
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					var data = res.data,
						html = '';

					html = '<div class="case-title">' + data.title + '</div>' +
							'<div class="case-time">' + data.time + '</div>' +
							'<div class="case-content">' + data.content +'</div>';
							
					$('.case-detail-wrap').html(html);
				} else {
					util.alert('获取案例详情失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		}
	};
	
	Page.run();
});