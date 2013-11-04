/*
jQuery.NiceFileInput.js
--------------------------------------
Nice File Input - jQuery plugin which makes file inputs CSS styling an easy task.
By Jorge Moreno - @alterebro 

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
Based on previous work of:
	- Shaun Inman (concept) http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
	- Mika Tuupola (jQuery plugin implementation) http://www.appelsiini.net/projects/filestyle
*/
(function($) {
	$.fn.nicefileinput = function(options) {
		var settings = { 
			label : 'Browse...', // Default button text
                        fullPath: false
		};
		if(options) { $.extend(settings, options); };
		
		return this.each(function() {
			var self = this;
			
			if ($(self).attr('data-styled') === undefined) {
			
				var r = Math.round(Math.random()*10000);
				var d = new Date();
				var guid = d.getTime()+r.toString();
				
				var filename = $('<input type="text" readonly="readonly">')
					.css({
						'display': 'block',
						'float': 'left',
						'margin': 0,
						'padding': '0 5px'
					})
					.addClass('NFI-filename NFI'+guid);
				var wrapper = $("<div>")
					.css({
						'overflow': 'hidden',
						'position': 'relative',
						'display': 'block',
						'float': 'left',
						'white-space': 'nowrap',
						'text-align': 'center'
					})
					.addClass('NFI-button NFI'+guid)
					.html(settings.label);
				
				
				$(self).after(filename);
				$(self).wrap(wrapper);
				
				$('.NFI'+guid).wrapAll('<div class="NFI-wrapper" id="NFI-wrapper-'+guid+'" />');
				$('.NFI-wrapper').css({
					'overflow': 'auto',
					'display': 'inline-block'
				});
				$("#NFI-wrapper-"+guid).addClass($(self).attr("class"));
				
				$(self)
					.css({
						'opacity': 0,
						'position': 'absolute',
						'border': 'none',
						'margin': 0,
						'padding': 0,
						'top': 0,
						'right': 0,
						'cursor': 'pointer',
						'height': '60px'
					})
					.addClass('NFI-current');
				$(self).on("change", function() {
                                	var fullPath = $(self).val();
                                	if (settings.fullPath) {
                                		filename.val(fullPath); 
                                	} else {
                                		var pathArray = fullPath.split(/[/\\]/);
                                		filename.val(pathArray[pathArray.length - 1]);
                                	}
                                });
				$(self).attr('data-styled', true);
			}
		});
    
	};
})(jQuery);
