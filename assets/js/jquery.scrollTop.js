function scrollTop(opciones){
	var config={
		color:"rgba(255,0,0,0.8)",
		altura:400,time:400,
		position:"middle",
		speed:500
	};

	$.extend(config,opciones);
	var scrollElem=scrollableElement('html','body');
	function scrollableElement(els){
		for(
			var i=0,
			argLength=arguments.length;
			i<argLength;i++){var el=arguments[i],$scrollElement=$(el);
			if($scrollElement.scrollTop()>0){
				return el}
				else{
					$scrollElement.scrollTop(1);
					var isScrollable=$scrollElement.scrollTop()>0;
					$scrollElement.scrollTop(0);
					if(isScrollable){return el}}}return[]}var capa=$("body");
					switch(config.position){
						case"top":config.position="90%";
						break;
						case"middle":config.position="50%";
						break;
						case"bottom":config.position="10%";
						break}
						$(window).scroll(function(){
							if($(window).scrollTop()>config.top){
								capa.trigger("activa_flecha")}
								else{$("#arriba").animate({bottom:config.position,opacity:0},config.time,function(){
									$(this).remove()});creado=0}});var creado=0;capa.on("activa_flecha",function(e){
							if(creado==0){
								var elemento=$("<a href='#' id='arriba'><span></span></a>").css({
									width:"40px",
									height:"40px",
									position:"fixed",
									"border-radius":"50px",
									"background-color":config.color,right:"1%",
									opacity:0,
									"box-shadow":"1px 1px 2px #666",
									bottom:config.position
								}).insertAfter(capa).animate({
									opacity:1,
								},config.time).on("click",function(e,obj){
									e.preventDefault();
									retirar($(this));
									$(scrollElem).animate({scrollTop:0},
										config.speed,"swing")});
								elemento.find("span").css({
									width:"40px",
									position:"relative",
									left:"0px",top:"0px",
									height:"40px",
									display:"block",
									"background":"url(http://www.biodiversidad.gob.mx/usos/alimentacion/peces/imagenes/aplicacion/ome_03.png) no-repeat center",
								});creado=1}});
									function retirar(obj){obj.animate({bottom:config.position,opacity:0},config.time)}}