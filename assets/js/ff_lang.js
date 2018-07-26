// ff_lang.js javascript version 1.0
// Crate by trirong phasukyued (Front-end Dev)

(function($){
	$.fn.ff_lang = function(obj){
		// selector = $(this);
		root = $(this);

		// value default
		var vdf = {
			s_tag : "<s>",
			e_tag : "</s>",
			g_text : "^|^"
		}
		if(obj) $.extend(vdf, obj);

		// function
		vdf.fn_unique = function (value, index, self) {
	  	return self.indexOf(value) === index;
		};
		vdf.fn_select_en = function (value, index, self) {
	  	return /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?a-zA-Z0-9\s]+$/.test(value);
		};
		vdf.fn_escape_regx = function(str) {
			return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
		}

		vdf.fn_map_string = function(_ele){
			var html = $(_ele).html();
				// replace char
				html = html.replace(/&amp;/g, '&'); // &

			var text = $.trim($(_ele).text());
			var text_array = text.split(' ').filter(vdf.fn_select_en).filter(vdf.fn_unique);

			console.log(text_array);

			$.each(text_array, function(key, str){
					var sl_1 = str.slice(0,1);
  				var sl_2 = str.slice(1);
					var replace_reg = new RegExp(vdf.fn_escape_regx(str), 'g');

					html = html.replace(replace_reg, vdf.s_tag+str+vdf.e_tag);
			});

			$(_ele).html(html);
		};

		// init
		root.each(function(key, ele){
			vdf.fn_map_string(ele);
		});
	}
})(jQuery);
