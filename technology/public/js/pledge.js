/**
 * 质押融资
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
			swiperUtil.render(3);
		}
	};
	
	Page.run();
});