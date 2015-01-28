$.fn.edTabs = function(options){
	// If no tabs are present return

	var settings = $.extend({
		callback: function(){}
	}, options);

	return this.each(function(){
		var $container = $(this);
		// Create the tabs container
		var $tabs = $('<div/>', { 'class': 'simpleTabs' })
		.insertBefore($('[data-tab-name]', $container)
					  .first())
		.append('<ul/>');

		// Create a reference to ul object
		var $ul = $('ul', $tabs);

		$('[data-tab-name]', $container).each(function(){
			var $tab = $(this);
			// Create tab for this item
			$('<li/>', { 'text': $tab.data('tab-name'), 'class': $tab.data('class-name') }).appendTo($ul).click(function(){
				$('li', $ul).removeClass('active');
				$('[data-tab-name]', $container).hide();
				$(this).addClass('active');
				$tab.show();

				if(options.callback){
					// call the callback and apply the scope:
					options.callback.call(this);
				}

			});

			// Hide tab
			$(this).hide();
		});

		// Enable first tab
		$('[data-tab-name]', $container).first().show();
		$('li', $ul).first().addClass('active');
	});
}
