/**
 * 政策宣传
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
			swiperUtil.render(4);
			this._initPolicyList();
			this._initEvent();
		},
		_initEvent: function(){
			var me = this;
			$('.search-icon').on('click', function(){
				me._doSearch();
			});
		},
		_initPolicyList: function() {
			var me = this;

			$.ajax({
				url: '/getRecommandPolicyList',
				type: 'GET',
				data: {},
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					var data = res.data,
						html = '';

					for(var i = 0, len = data.length; i < len; i++) {
						html += '<li>' +
									'<a href="/policyDetail?policyId=' + data[i].policyId + '">《'+ data[i].policyName +'》</a>' +
									'<span class="time">' + data[i].publishTime + '</span>' +
									'<span class="region">' + data[i].region + '</span>' +
								'</li>';
					}
					$('.policies ul').html(html);
				} else {
					util.alert('初始化政策列表失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		},
		/**
		 * 搜索
		 * @return {[type]} [description]
		 */
		_doSearch: function() {
			var $searchInput = $('#search-input'),
				keyword = $searchInput.val();

			if(!keyword) {
				util.alert('请输入您要查询的关键字');
				return;
			}

			window.location.href = '/policyList?keyword=' + keyword;
		}
	};
	
	Page.run();
});