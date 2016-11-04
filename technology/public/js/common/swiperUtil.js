/**
 * swiper封装
 * 
 * @date 2016-10-31
 */

define(function(require, exports, module) {

	require('swiper');
	var util = require('./util');
	/**
	 * 切换
	 * @param  {[type]} tar [description]
	 * @return {[type]}     [description]
	 */
	function _tab(tar) {
		var type = tar.data('type');

		$('.header-menu li').removeClass('active');
		tar.addClass('active');
		_getJSON(type);
	}

	/**
	 * 获取数据
	 * @param  {[type]} type [description]
	 * @return {[type]}      [description]
	 */
	function _getJSON(type) {

		$.ajax({
			url: '/getCasesByType',
			type: 'GET',
			data: {
				caseType: type
			},
			dataType: 'json'
		}).done(function(res) {
			if(res.success) {
				_renderHTML(res.data);
			} else {
				util.alert('查询案例列表失败');
			}
		}).fail(function(res) {
			util.alert(res);
		});
	}

	/**
	 * 渲染html
	 * 
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	function _renderHTML(data) {
		var html = '';

		for(var i = 0, len = data.length; i < len; i++) {
			html += '<div class="swiper-slide">' +
			        	'<a href="/caseDetail?caseId=' + data[i].caseId + '" class="case-item">' +
			        		'<img src="' + data[i].picSrc + '">' +
			        		'<div class="case-title">' + data[i].caseTitle + '</div>' +
			        	'</a>' +
			        '</div>';
		}

		$('.swiper-wrapper').html(html);
		_initSwiper();
	}

	/**
	 * 初始化swiper
	 * @return {[type]} [description]
	 */
	function _initSwiper () {
		var mySwiper = new Swiper('.swiper-container',{
		    autoplay : 5000,//可选选项，自动滑动
		    slidesPerView : 3,
		    spaceBetween : 10
		});
	}

	module.exports = {
		/**
		 * 绑定tab事件
		 * @return {[type]} [description]
		 */
		bindTab: function() {

			$('.header-menu').on('click', 'li', function(){
				_tab($(this));
			});
		},
		render: _getJSON
	};
	
});