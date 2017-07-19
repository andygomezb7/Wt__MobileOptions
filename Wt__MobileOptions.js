(function($){
	/*
	* Inicialización del plugin
	* @parram options, array de opciones para el plugin
	* @parran return, funcion a la que se retornara la información, puede ser function(){} o una funcion fuera
	*/

	var WtMobileOptions = {
		animationTime: .3,
		init: function() { // functión iniciar la aplicación

		},
		/*
		* @parram object, objeto para ejecutar la animación {object:, type:}, array opcional
		* @parram process, proceso que lleva, para validar si se termina o continua con el plugin
		*/
		animation: function (object, process) {
			var time = WtMobileOptions.animationTime, type: 'default', objectAnimate;

			// Valida si es array u objeto, contrario se envia error y se detene la función
			if (object instanceof Array) {
				objectAnimate = object.object;
				type = object.type;
			} else if(typeof object == 'Object') {
				objectAnimate = object;
			} else {
				$.error('Object no es una variable valida.');
				return;
			}

			setTimeout(function() {
				// funcion de animación
			}, time);
		},
		end: function(returnTo) { // callback de el plugin general
			// se valida que sea una funcion, sino se retorna un error
			if (typeof returnTo == 'function') {
				returnTo();
			} else {
				$.error('No se definio una funcion de finalización');
			}
		}
	};

	$.fn.WtMobileOptions = function (options, return) {
		// definimos las variables globales
		var settings = $.extend( {
	      'animation': true,
	      'loader': 'one',
	      'onthis': 'init'
	    }, options);

		// Se valida el campo "OnThis" para enviar la actividad que se llame, contrario se envia error
		if (WtMobileOptions[settings.onthis]) {
			return WtMobileOptions[settings.onthis].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if (!WtMobileOptions[settings.onthis]) {
			WtMobileOptions.init();
		} else {
		    $.error( 'No existe la funcion que llamas, error #4.0.4-2' );  
		}
	}
})(jQuery)