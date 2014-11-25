/**
 * Creates a very basic tab interface 
 */
(function(){
	'use strict';
	
	$.extend({
		simpleTabs: function(options){
			// If no tabs are present return
			if(!$('[data-tab-name]')){ return; }
			
			var settings = $.extend({
				callback: function(){}
			}, options);
			
			// Create the tabs container
			var $tabs = $('<div/>', { 'class': 'simpleTabs' })
				.insertBefore($('[data-tab-name]')
				.first())
				.append('<ul/>');
			
			// Create a reference to ul object
			var $ul = $('ul', $tabs);
			
			$('[data-tab-name]').each(function(){
				var $tab = $(this);
				// Create tab for this item
				$('<li/>', { 'text': $tab.data('tab-name') }).appendTo($ul).click(function(){
					$('li', $ul).removeClass('active');
					$('[data-tab-name]').hide();
					$(this).addClass('active');
					$tab.show();
					// call the callback and apply the scope:
					options.callback.call(this);
				});;

				// Hide tab
				$(this).hide();
			});
			
			// Enable first tab
			$('[data-tab-name]').first().show();
			$('li', $ul).first().addClass('active');
		}
	});
})(jQuery);
