
(function( $ ) {

    $.fn.hoverZoom = function(options) {

      var options = options || {};

      var defaults = $.extend({
        zoom_percent: 30,
        z_index_in: 10,
        z_index_out: 5
      }, options);


      var zoom_in_options = options['zoom_in'] || {};
      var zoom_out_options = options['zoom_out'] || {};

      var w = this.width();
      var h = this.height();
      
      this.css({'position': 'relative', 'z-index': defaults.z_index_out});
      
      var dw = w*(defaults.zoom_percent/100.0);
      var dh = h*(defaults.zoom_percent/100.0);
      
      var zw = w + dw;
      var zh = h + dh;
          
      var zoom_in = {
        'marginTop'  : '-' + dh + 'px', 
        'marginLeft' : '-' + dw + 'px', 
        'top'        : (dh/2) + 'px', 
        'left'       : (dw/2) + 'px',
        'width'      : zw + 'px',
        'height'     : zh + 'px',
        'padding'    : '0px'
      };


      var zoom_out = {
        'marginTop'  : '0px', 
        'marginLeft' : '0px', 
        'top'        : '0px', 
        'left'       : '0px',
        'width'      : w + 'px',
        'height'     : h + 'px',
        'padding'    : '0px' ,
      };

      this.hover(

        function(){
	  $(this).css({'z-index': defaults.z_index_in});
          $(this).stop().animate(zoom_in, zoom_in_options);
        },

        function(){
	  $(this).css({'z-index': defaults.z_index_out});
          $(this).stop().animate(zoom_out, zoom_out_options);
        }

      );
        
    };

})( jQuery );
