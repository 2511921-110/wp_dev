/**
 * Sticky Buy Button
 */
;
(function(Themify, $){
	'use strict';
	const _init = function(pr_wrap,wrap){
			Themify.LoadCss(Themify.css_modules.stb, null, null, null, function(){
				if(Themify.css_modules.stb_t){
					Themify.LoadCss(Themify.css_modules.stb_t, null, null, null,null);
				}
				const container = document.createElement('div'),
					product = document.createElement('div'),
					img_wrap = document.createElement('div'),
					gallery = document.createElement('div'),
					summary = document.createElement('div'),
					pr_form = pr_wrap.querySelector('form.cart'),
					ind = document.getElementById('tf_sticky_form_wrap');
				container.className = 'tf_box pagewidth clearfix';
				product.id = pr_wrap.id;
				product.className = pr_wrap.classList;
				//wrap image
				img_wrap.className = 'tf_sticky_prod_img';
				// Image
				gallery.className = 'images';
				gallery.appendChild(pr_wrap.getElementsByClassName('woocommerce-product-gallery__image')[0].cloneNode(true));
				img_wrap.appendChild(gallery);
				summary.className = 'summary entry-summary';
				// Title
				summary.appendChild(document.querySelector('.product .product_title').cloneNode(true));
				// Price
				summary.appendChild(document.querySelector('.product .price').cloneNode(true));
				img_wrap.appendChild(summary);
				product.appendChild(img_wrap);
				// Form
				ind.style.height = pr_form.getBoundingClientRect().height+'px';
				product.appendChild(pr_form);
				wrap.dataset.url = '';
				container.appendChild(product);
				wrap.appendChild(container);
				wrap.classList.add('tf_st_show');
				_pw_padding(wrap,'show');
			});
		},
		_move_form = function(el, act){
			const obs_el = document.getElementById('tf_sticky_form_wrap'),
				form = 'hide' === act ? el.querySelector('form.cart') : document.querySelector('form.cart');
			if(!form){
				return;
			}
			if('hide' === act){
				obs_el.appendChild(form);
				obs_el.style.height = null;
			}else{
				obs_el.style.height = form.getBoundingClientRect().height+'px';
				el.getElementsByClassName('product')[0].appendChild(form);
			}
			const $var_form = $('.variations_form');
			if($var_form.length>0){
				$var_form.trigger( 'check_variations' );
			}
			_pw_padding(el,act);
		},
		_pw_padding = function(el,act){
			document.getElementById('pagewrap').style.paddingBottom = act==='show'?el.getBoundingClientRect().height + 'px':'';
		}
	Themify.on('tf_sticky_buy_init', function(pr_wrap,el){
		_init(pr_wrap,el);
		Themify.on('tfsmartresize', function(){
			_pw_padding(el,el.classList.contains('tf_st_show')?'show':'hide');
		});
	}).on('tf_sticky_buy_switched', function(el, act){
		_move_form(el, act);
	});

})(Themify, jQuery);