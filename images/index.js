window.onload = function(){
	var Fadetext = {};
	Fadetext.arow 		= 0;
	Fadetext.Flag 		= false;
	Fadetext.viewWidth  = document.body.clientWidth;
	Fadetext.viewHeight = (window.innerHeight) ? window.innerHeight : document.body.clientHeight;
	Fadetext.offsetdom  = [];
	Fadetext.offsetinx  = [];
	Fadetext.init = function(option){
		this.option = $.extend({},option);
		this.className = this.option.className || '';
		this.speed	   = this.option.speed || '';
		this.bindEvent();
	}
	Fadetext.bindEvent = function(){
		var $dom = {};
		$dom.bodya = $('.wqd-advantage');
		$dom.rotate = $('.add-more');
		$dom.advantAgebox = $('.advantagebox');
		$(document).on('click','.add-more div',function(){
			$dom.rotate.find('p').toggle().end().toggleClass("add-more-close");
			$dom.advantAgebox.toggleClass("show-advan");
			Fadetext.Flag = !Fadetext.Flag;
			$dom.bodya.toggleClass('correct');
		})
		this.bindCarousel();
	}
	Fadetext.bindCarousel = function(){
    
		var $progress = $('.swiper-pagination-one');
		var $img	  = $('.bannar').find('.swiper-slide');
		var mySwiper = new Swiper('.slider-one',{
			loop : true,
			autoplay : 5000,
			speed:800,
			prevButton:'.ban-left',
			nextButton:'.ban-right',
			pagination : '.swiper-pagination-one',
			paginationClickable :true,
			autoplayDisableOnInteraction : false,
			paginationBulletRender: function (swiper, index, className) {
      			return '<div class="' + className + '"><p></p></div>';
  		},
			onTransitionEnd: function(swiper){
				if(swiper.activeIndex == 1){
					setTimeout(function() {
						$progress.find('div').eq(0).find('p').addClass('login');
					}, 1);
				}
				$progress.find('p').removeClass('login');
				$progress.find('div').eq(swiper.activeIndex == swiper.imagesLoaded - 1 ? 0 : swiper.activeIndex - 1).find('p').addClass('login');
      },
			onImagesReady: function(swiper){
      	$('.wqd-adv-left').find('img').show(0);
    	}
		})

		$(document).on('mousemove mouseout',".bannar .swiper-wrapper",function(e) {
			if(e.type === 'mousemove'){
				(Fadetext.viewWidth / 2 > e.pageX) ? $('.ban-left').addClass('arowshow').siblings('.ban-right').removeClass('arowshow') : $('.ban-right').addClass('arowshow').siblings('.ban-left').removeClass('arowshow');
			}else{
				$('.ban-left,.ban-right').removeClass('arowshow');
			}
    })
		
			
		var help = $('.js-animated-circles');
		$(document).on('mouseenter mouseleave','.wqd-help-icon,.wqd-information',function(e){
			if(e.type === 'mouseenter'){
				help.addClass('stop').removeClass('animated');
			}else{
				help.removeClass('stop');
			}
		})
		help.addClass('animated');
		setInterval(function(){
			if(help.hasClass('stop')) return false;
			help.toggleClass('animated');
		},2800)		
		this.bindCarousely();
	}
	//暂时复制 ，后期提出公共部分
	Fadetext.bindCarousely = function(){
		var $progress = $('.swiper-pagination-two');
		var $img	    = $('.slipe-box').find('.swiper-slide');
		var $k	 		  = $('.section-img').find('img');
		var mySwiper  = new Swiper('.slider-two',{
			loop : true,
			autoplay : 5000,
			speed:800,
			prevButton:'.slipe-left',
			nextButton:'.slipe-right',
			pagination : '.swiper-pagination-two',
			paginationClickable :true,
			autoplayDisableOnInteraction : false,
			paginationBulletRender: function (swiper, index, className) {
      			return '<div class="' + className + '"><p></p></div>';
  		},
			onTransitionEnd: function(swiper){
				if(swiper.activeIndex == 1){
					setTimeout(function() {
						$progress.find('div').eq(0).find('p').addClass('login');
					}, 1);
				}
				$progress.find('p').removeClass('login');
				$progress.find('div').eq(swiper.activeIndex == swiper.imagesLoaded - 1 ? 0 : swiper.activeIndex - 1).find('p').addClass('login');
				
      },
			onSlideChangeStart: function(swiper){
      	$k.eq(swiper.activeIndex == swiper.imagesLoaded - 1 ? 0 : swiper.activeIndex - 1).css('opacity','1').siblings().css('opacity','0');
    	}
		})
		$(document).on('mousemove mouseout',".slipe-box .swiper-wrapper",function(e) {
			if(e.type === 'mousemove'){
				(Fadetext.viewWidth / 2 > e.pageX) ? $('.slipe-left').addClass('arowshow').siblings('.slipe-right').removeClass('arowshow') : $('.slipe-right').addClass('arowshow').siblings('.slipe-left').removeClass('arowshow');
			}else{
				$('.slipe-left,.slipe-right').removeClass('arowshow');
			}
    })
		
		this.bindScroll();
	}
	Fadetext.bindScroll = function(){
		var a = c = d = e = 0,
			$flag = $index = 0,
			node = (!!window.ActiveXObject || "ActiveXObject" in window) ? "body" : document;
			$('.animate-text').each(function(){
				var a = 'a' + parseInt($(this).offset().top);
					var o = {
						index : a.substr(1),
						doma  : $(this)
					}
					Fadetext.offsetinx.push(o);
			})
		
			Fadetext.offsetdom[0] = Fadetext.offsetinx[0];
			for(var i = 1 ; i < Fadetext.offsetinx.length; i++){
				var f = true;
				for(var j = 0 ; j < Fadetext.offsetdom.length; j++){
					if(Fadetext.offsetinx[i].index == Fadetext.offsetdom[j].index){
						f = false;
						Fadetext.offsetdom[j].doma.push(Fadetext.offsetinx[i].doma);
					}
				}
				if(f){
					var o = {
						index : Fadetext.offsetinx[i].index,
						doma  : [Fadetext.offsetinx[i].doma]
					}
					Fadetext.offsetdom.push(o);
				}
				f = true;
			}
			Fadetext.offsetinx = [];
			$('.animate-img').each(function(){
				var a = 'a' + parseInt($(this).offset().top);
					var o = {
						index : a.substr(1),
						doma  : $(this)
					}
					Fadetext.offsetinx.push(o);
			})
			window.scroll(0,$(document).scrollTop() + 1);
		$(window).resize(function() {
			window.location.reload();
		});

		var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {},
				fx = true;
		$(window).scroll(function (){
			var b = $(window).scrollTop() + $(window).height(); 
			var p = $(this).scrollTop();
			var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        fx = ( delta > 0 ? false : true );
        beforeScrollTop = afterScrollTop;
			for(var i = 0 ; i < Fadetext.offsetdom.length; i++ ){
				var vala = Fadetext.offsetdom[i];
				//到元素位置显示动画
				if ( (Fadetext.viewHeight + p) >= parseInt(vala.index)) {
					var valb = vala.doma;
					for(var j = 0 ; j < vala.doma.length ; j++){
						if($(vala.doma[j]).attr('data-lazy') === 'lazy'){
							if(Fadetext.Flag && (Fadetext.viewHeight + p) >= parseInt(vala.index) + 3070){
								$(vala.doma[j]).addClass('animate-position');
							}
							else if (!Fadetext.Flag){
								$(vala.doma[j]).addClass('animate-position');
							}
						}else{
							$(vala.doma[j]).addClass('animate-position');
						}
						
						//到位置数字滚动效果
						if($(vala.doma[j]).attr('data-type') === 'num'){
							if(Fadetext.Flag && (Fadetext.viewHeight + p) >= parseInt(vala.index) + 3070){
								Fadetext.numRun1.resetData('1000000');
								Fadetext.numRun2.resetData('15000');
								Fadetext.numRun3.resetData('1000');
								Fadetext.numRun4.resetData('100');
							}
							else if (!Fadetext.Flag){
								Fadetext.numRun1.resetData('1000000');
								Fadetext.numRun2.resetData('15000');
								Fadetext.numRun3.resetData('1000');
								Fadetext.numRun4.resetData('100');
							}
						}
					}
				}
								
			}
			
			for(var j = 0 ; j < Fadetext.offsetinx.length; j++){
				var vala = Fadetext.offsetinx[j];
				//图片视差滚动 1
				if(b > parseInt(vala.index) + 900 && $(vala.doma[j]).attr('data-type') === 'one'){
					if(p < parseInt(vala.index) + 1000 && a < 40){
						if(this.arow){
							a -= 0.2;
						}else{
							a += 0.2;
						}
					}else if(p < parseInt(vala.index) + 400 && a > 40){
						a -= 0.3;
					}
					else{
						a = 0;
					}
					$(vala.doma[j]).css("transform", "translate3d(0%," + a + "% , 0)");
				}

				//图片视差滚动 2
				if (b > 2235 && Fadetext.Flag) {
					if(p < 2400 && Math.abs(d) < 150){
						if(fx){
							d += 0.03;
						}else{
							d -= 0.03;
						}
					}
					else{
						d = 0;
					}
					// console.log(d);
					$('.animate-img[data-type="two"]').css("transform", "translate3d(0%," + d + "px , 0)");
				}

				//图片视差滚动 3
				if (p > 3853 && Fadetext.Flag) {
					if(p < 4200 && Math.abs(c) < 8){
						if(this.arow){
							c += 0.007;
						}else{
							c -= 0.007;
						}
					}else if(p < 4200 && Math.abs(c) < 8){
						c += 0.007;
					}
					else{
						c = 0;
					}
					$('.animate-img[data-type="three"]').css("transform", "translate3d(0%," + c + "% , 0)");
				}
			}
		});
		if (document.addEventListener) {
        	document.addEventListener('DOMMouseScroll', this.judgeDirection, false);  
    	}  
    		window.onmousewheel = document.onmousewheel = this.judgeDirection;
		this.number();
	}
	Fadetext.judgeDirection = function(e){
        e = e || window.event;  
        if (e.wheelDelta) {                
            if (e.wheelDelta > 0) { 
                this.arow = 1;
            }  
            if (e.wheelDelta < 0) {
                this.arow = 0;
            }  
        } else if (e.detail) { 
            if (e.detail> 0) { 
                this.arow = 1;
            }  
            if (e.detail< 0) { 
                this.arow = 0;
            }  
        }  
    }
	Fadetext.number = function(){
		$.fn.numberAnimate = function(setting) {
    		var defaults = {
      		speed : 1000,//动画速度
      		num : "", //初始化值
      		iniAnimate : true, //是否要初始化动画效果
      		symbol : '',
      		dot : 0 
    	}
    //如果setting为空，就取default的值
      var setting = $.extend(defaults, setting);
    
      //如果对象有多个，提示出错
      if($(this).length > 1){
        alert("just only one obj!");
        return;
      }
    
      //如果未设置初始化值。提示出错
      if(setting.num == ""){
        alert("must set a num!");
        return;
      }
      var nHtml = '<div class="mt-number-animate-dom" data-num="{{num}}">\
              <span class="mt-number-animate-span">0</span>\
              <span class="mt-number-animate-span">1</span>\
              <span class="mt-number-animate-span">2</span>\
              <span class="mt-number-animate-span">3</span>\
              <span class="mt-number-animate-span">4</span>\
              <span class="mt-number-animate-span">5</span>\
              <span class="mt-number-animate-span">6</span>\
              <span class="mt-number-animate-span">7</span>\
              <span class="mt-number-animate-span">8</span>\
              <span class="mt-number-animate-span">9</span>\
			  <span class="mt-number-animate-span">0</span>\
              <span class="mt-number-animate-span">1</span>\
              <span class="mt-number-animate-span">2</span>\
              <span class="mt-number-animate-span">3</span>\
              <span class="mt-number-animate-span">4</span>\
              <span class="mt-number-animate-span">5</span>\
              <span class="mt-number-animate-span">6</span>\
              <span class="mt-number-animate-span">7</span>\
              <span class="mt-number-animate-span">8</span>\
              <span class="mt-number-animate-span">9</span>\
            </div>';
    
      var numToArr = function(num){
        num = parseFloat(num).toFixed(setting.dot);
        if(typeof(num) == 'number'){
          var arrStr = num.toString().split("");  
        }else{
          var arrStr = num.split("");
        }
        return arrStr;
      }
    
      var setNumDom = function(arrStr){
        var shtml = '<div class="mt-number-animate">';
        for(var i=0,len=arrStr.length; i<len; i++){
          if(i != 0 && (len-i)%3 == 0 && setting.symbol != "" && arrStr[i]!="."){
            shtml += '<div class="mt-number-animate-dot">'+setting.symbol+'</div>'+nHtml.replace("{{num}}",arrStr[i]);
          }else{
            shtml += nHtml.replace("{{num}}",arrStr[i]);
          }
        }
        shtml += '</div>';
        return shtml;
      }
    
      //执行动画
      var runAnimate = function($parent){
        $parent.find(".mt-number-animate-dom").each(function() {
          var num = $(this).attr("data-num");
          num = (num=="."?10:num);
          var spanHei = $(this).height()/20; //11为元素个数
           var thisTop = -(num*spanHei + 400)+"px";
          if(thisTop != $(this).css("top")){
            if(setting.iniAnimate){
              if(!window.applicationCache){
                $(this).animate({
                  top : thisTop
                }, setting.speed);
              }else{
                $(this).css({
                  'transform':'translateY('+thisTop+')',
                  '-ms-transform':'translateY('+thisTop+')',  
                  '-moz-transform':'translateY('+thisTop+')', 
                  '-webkit-transform':'translateY('+thisTop+')',
                  '-o-transform':'translateY('+thisTop+')',
                  '-ms-transition':setting.speed/1000+'s',
                  '-moz-transition':setting.speed/1000+'s',
                  '-webkit-transition':setting.speed/1000+'s',
                  '-o-transition':setting.speed/1000+'s',
                  'transition':setting.speed/1000+'s'
                }); 
              }
            }else{
              setting.iniAnimate = true;
              $(this).css({
                top : thisTop
              });
            }
          }
        });
      	}
    
      //初始化
      var init = function($parent){
        //初始化
        $parent.html(setNumDom(numToArr(setting.num)));
        runAnimate($parent);
      };
    
      //重置参数
      this.resetData = function(num){
        var newArr = numToArr(num);
        var $dom = $(this).find(".mt-number-animate-dom");
        if($dom.length < newArr.length){
          $(this).html(setNumDom(numToArr(num)));
        }else{
          $dom.each(function(index, el) {
            $(this).attr("data-num",newArr[index]);
          });
        }
        runAnimate($(this));
      }
      //init
      init($(this));
      return this;
    }
			Fadetext.numRun1 = $(".numberRun1").numberAnimate({num:'000000', speed:1000});
			Fadetext.numRun2 = $(".numberRun2").numberAnimate({num:'00000', speed:1000});
			Fadetext.numRun3 = $(".numberRun3").numberAnimate({num:'0000', speed:1000});
			Fadetext.numRun4 = $(".numberRun4").numberAnimate({num:'000', speed:1000});
	}
 	Fadetext.init();
}
