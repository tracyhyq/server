/**
 * 股权融资
 * @date 2016-10-31
 */

define(function(require, exports, module) {
	var jquery = require('jquery');
	var util = require('./common/util');
	
	require('./common/common');
	var swiperUtil = require('./common/swiperUtil');

	var Page = {
		run: function() {
			this._init();
		},
		_init: function() {
			this._initEvent();
			swiperUtil.render(1);
			this._initSpecialCase();
		},
		_initEvent: function(){
			swiperUtil.bindTab();
		},
		_initSpecialCase: function() {
			var me = this;

			$.ajax({
				url: '/getSpecialCases',
				type: 'GET',
				data: {},
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					var data = res.data,
						html = '';

					for(var i = 0, len = data.length; i < len; i++) {
						html += '<div class="flex-case-item">' +
									'<img src="' + data[i].picSrc + '">' +
									'<a href="/caseDetail?caseId=' + data[i].caseId + '" class="case-title">' + data[i].caseTitle + '</a>' +
									'<p class="case-desc">' + data[i].caseDesc + '</p>' +
								'</div>';
					}
					$('.cases-list').html(html);
				} else {
					util.alert('初始化对接列表失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		}
	};
	
	Page.run();
});