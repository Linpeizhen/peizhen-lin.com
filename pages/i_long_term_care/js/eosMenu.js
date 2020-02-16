/*
 * Jquery eosMenu 1.0
 * tangpanqing
 * https://github.com/tangpanqing/eosMenu
 * released under MIT license
 * last update 2016-09-17 23:00:00
 */

(function($) {
	$.fn.extend({
		"eosMenu": function(options) {
			var defaluts = {
				fontSize: '14px', //字体大小
				color: '#eee', //字体颜色
				hoverColor: '#eee', //鼠标悬停,字体颜色
				background: '#ee7c44', //背景颜色
				subBackground: '#ee7c44', //子级背景颜色
				hoverBackground: '#ee7c44', //鼠标悬停,背景颜色
				height: '35px', //每行总高度
				lineHeight: '24px', //每行行高
				borderColor: '#ee7c44', //边线颜色
				hoverborderColor: '#ee7c44', //鼠标悬停,边线颜色
				zIndex: 10, //菜单主体层级
				isAutoUrl: 1, //是否自动展开默认URL
				defaultUrl: '#html', //默认链接
				onItemClick: null, //点击菜单项时执行函数
				onMenuTitleClick: null, //点击目录标题时执行函数
				onGroupTitleClick: null, //点击菜单组标题时执行函数
			};
			var opts = $.extend({}, defaluts, options);

			var extend_style = '<style>' +
				'.eos-menu{' +
				'font-size:' + opts.fontSize + ';' +
				'color:' + opts.color + ';' +
				'}' +
				'.eos-menu .eos-item a{' +
				'color:' + opts.color + ';' +
				'}' +
				'.eos-menu .eos-menu-content{' +
				'z-index:' + opts.zIndex + ';' +
				'}' +
				'.eos-menu .eos-group-content .eos-item{' +
				'background:' + opts.subBackground + ';' +
				'}' +
				'.eos-menu .eos-menu-title, .eos-menu .eos-group-title, .eos-menu .eos-item{' +
				'height:' + opts.height + ';' +
				'line-height:' + opts.lineHeight + ';' +
				'background:' + opts.background + ';' +
				'border-color:' + opts.borderColor + ';' +
				'}' +
				'.eos-menu .eos-menu-title .fa, .eos-menu .eos-group-title .fa, .eos-menu .eos-item .fa{' +
				'line-height:' + opts.lineHeight + ';' +
				'}' +
				'.eos-menu .eos-menu-title:hover, .eos-menu .eos-group-title:hover, .eos-menu .eos-item:hover{' +
				'color:' + opts.hoverColor + ';' +
				'background:' + opts.hoverBackground + ';' +
				'border-color:' + opts.hoverborderColor + ';' +
				'}' +
				'</style>';

			$('head').append(extend_style);

			this.each(function() {
				var $this = $(this);

				//打开或关闭菜单面板
				$this.find('.eos-menu-title').click(function() {
					var next = $(this).next();
					if(next.hasClass('eos-menu-content')) {
						var toHeight = next.outerHeight() ? 0 : getChildrenTotalHeight(next);
						next.outerHeight(toHeight);
					}

					if(typeof opts.onMenuTitleClick == 'function') opts.onMenuTitleClick($(this));
				})

				//打开或关闭菜单组
				$this.find('.eos-group-title').click(function() {
					var next = $(this).next();
					if(next.hasClass('eos-group-content')) {
						var toHeight = next.outerHeight() ? 0 : getChildrenTotalHeight(next);
						var changeHeight = toHeight - next.outerHeight();
						var menuHeight = $this.find('.eos-menu-content').outerHeight();

						next.outerHeight(toHeight);
						$this.find('.eos-menu-content').outerHeight(menuHeight + changeHeight);
					}

					if(typeof opts.onGroupTitleClick == 'function') opts.onGroupTitleClick($(this));
				})

				//点击某一具体菜单
				$this.find('.eos-item').click(function() {
					if(typeof opts.onItemClick == 'function') opts.onItemClick($(this));
				})
				
				//如果自动展开默认链接
 				if(opts.isAutoUrl){
 					$this.find('[href="'+opts.defaultUrl+'"]').parents('.eos-group-content').addClass('auto-height');
 				}
				
			});

			//获取当前对象总高度
			function getChildrenTotalHeight(obj) {
				var outerHeight = 0
				obj.children().each(function() {
					outerHeight += $(this).outerHeight();
				})
				return outerHeight;
			}
		}
	});
})(window.jQuery);
