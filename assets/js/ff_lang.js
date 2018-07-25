// ff_lang.js javascript version 1.0
// Crate by trirong phasukyued (Front-end Dev)

(function($){
	$.fn.ff_lang = function(obj){
		// selector = $(this);
		root = $(this);

		// value default
		var vdf = {
			s_tag : "<s>", 
			e_tag : "</s>"	
		}
		if(obj) $.extend(vdf, obj);
		
		// function
		vdf.fn_map_string = function(_ele){
			var html = $(_ele).html();
				// replace char
				html = html.replace(/&amp;/g, '&'); // &
				
			var text = $.trim($(_ele).text());
			var text_array = text.split(' ');
			
			$.each(text_array, function(key, str){
				if(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?a-zA-Z0-9\s]+$/.test(str)){
					html = html.replace(str, vdf.s_tag+str+vdf.e_tag);
				}
			});
			
			$(_ele).html(html);
		};
		
		// init
		root.each(function(key, ele){
			vdf.fn_map_string(ele);
		});
	}
})(jQuery);


