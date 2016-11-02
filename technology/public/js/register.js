/**
 * 注册页面
 * @date 2016-10-31
 */

define(function(require, exports, module) {
	var jquery = require('jquery');
	var util = require('./common/util');

	require('./common/common');
	var Page = {
		run: function() {
			this._init();
		},
		_init: function() {
			this._initParam();
			this._initEvent();
			this._initOrgAndIn();
		},
		_initParam: function() {
			this.$registerForm = $('#register-form');
			this.$organization = $('#organization');
			this.$industry = $('#industry');
			this.$mobile = $('input[name="mobile"]');
			this.$sendCode = $('#send-code');
			this.$submit = $('#submit');

			this.canStartCode = true;
			this.canSubmit = true;
		},
		_initEvent: function() {
			var me = this;

			this.$sendCode.on('click', function(){
				me._sendCode($(this));
			});
			
			this.$submit.on('click', function(){
				me._submit($(this));
			});
		},
		/**
		 * 初始化机构类型和行业
		 * @return {[type]} [description]
		 */
		_initOrgAndIn: function() {
			var me = this;

			$.ajax({
				url: '/getOrganization',
				data: {},
				type: 'GET',
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					me._initSelect(res.data.organization, me.$organization);
					me._initSelect(res.data.industry, me.$industry);
				} else {
					util.alert('初始化机构类型和行业出错');
				}
			}).fail(function(res){
				util.alert(res);
			});
		},
		/**
		 * 填充select数据
		 * 
		 * @param  {[type]} data [description]
		 * @param  {[type]} el   [description]
		 * @return {[type]}      [description]
		 */
		_initSelect: function(data, el) {
			if(!data.length || !el) return;

			for(var i = 0, len = data.length; i < len; i++) {
				el.append('<option value="' + data[i].id + '">' + data[i].name + '</option>');
			}
		},
		/**
		 * 发送验证码
		 * @param  {[type]} tar [description]
		 * @return {[type]}     [description]
		 */
		_sendCode: function(tar) {
			var me = this,
				mobile = this.$mobile.val();

			if(!this.canStartCode) return;
			if(!util.checkMobile(mobile)) {
				util.alert('手机号码不正确!');
				return;
			}			

			$.ajax({
				url: '/sendCode',
				data: {
					mobile: mobile
				},
				type: 'POST',
				dataType: 'json'
			}).done(function(res){
				if(res.success) {
					me.canStartCode = false;
					me._timeDown(tar);
				} else {
					util.alert('获取验证码失败');
				}
			}).fail(function(res){
				util.alert(res);
			});
		},
		/**
		 * 倒计时
		 * @param  {[type]} tar [description]
		 * @return {[type]}     [description]
		 */
		_timeDown: function(tar) {
			var me = this,
				countdown = 60; 

			settime(tar);
			
			function settime(tar) { 
				if (countdown == 0) { 
					tar.html('验证码').removeClass("disable");    
					countdown = 60; 
					me.canStartCode = true;
				} else { 
					tar.html(countdown + 's').addClass('disable');
					countdown --; 
					setTimeout(function() { 
						settime(tar) 
					},1000);
				} 
			}
		},
		
		/**
		 * 表单提交验证
		 * @return {[type]} [description]
		 */
		_validateForm: function(){
			var $requireEl = $('.require');

			for(var i = 0, len = $requireEl.length; i < len; i++) {
				var item = $($requireEl[i])
					val = item.val();
				if(!val) {
					util.alert(item.attr('msg'));
					return false;
				}
				switch(item.attr('name')) {
					case 'mobile':
						if(!util.checkMobile(val)){
							util.alert('手机号码不正确!');
							return false;
						}
						break;
					case 'userName':
						if(val.length < 3 || val.length > 25) {
							util.alert('用户名长度为6～20位!');
							return false;
						}
						break;
					case 'password':
						if(val.length < 6 || val.length > 32) {
							util.alert('密码长度为6～20位!');
							return false;
						}
						break;
					case 're-password': 
						if($('input[name="password"]').val() !== val) {
							util.alert('密码不一致!');
							return false;
						}
						break;
				}
			}

			if(!$(":radio:checked").length) {
				util.alert('请选择需求类型!');
				return false;
			}

			return true;
		},
		/**
		 * 提交
		 * @return {[type]} [description]
		 */
		_submit: function(tar) {
			var me = this,
				data = this.$registerForm.serialize();

			if(this._validateForm() && this.canSubmit) {
				tar.html('注册中...').addClass('disable');
				this.canSubmit = false;
				$.ajax({
					url: '/doRegister',
					data: util.paramToJson(data),
					type: 'POST',
					dataType: 'json'
				}).done(function(res) {
					if(res.success) {
						util.alert('注册成功', function() {
							window.history.go(-1);
						});
					} else {
						util.alert(res.data.msg);
					}
					tar.html('注册').removeClass('disable');
					this.canSubmit = true;
				}).fail(function(res){
					util.alert(res);
					this.canSubmit = true;
					tar.html('注册').removeClass('disable');
				});
			}
		}
	};

	Page.run();
});