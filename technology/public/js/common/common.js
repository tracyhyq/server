/**
 * 公用js
 * @date 2016-10-31
 */

define(function(require, exports, module) {

	var $arm = $('#arm');

	$arm.on('click', function(){
		_openArm();
	});

	/**
	 * 打开协议
	 * @return {[type]} [description]
	 */
	function _openArm() {
		layer.open({
		  content: '不允许点击遮罩关闭',
		  btn: '好',
		  shadeClose: false
		});
	}
});