jquery-hover-zoom
-

Plugin it's a lightweight wrapper around jQuery.animate() which creates image zoom effect on hover event

Usage & Options
-

- zoom_percent (default: 30)
 
        $('img').hoverZoom({zoom_percent: 15};)

- z-index of images in zoom in/out state (default: 5/10)

        $('img').hoverZoom({z_index_in: 2, z_index_out: 4});
        
- animation options: you can pass any valid jQuery.animate() option

        $('img').hoverZoom({zoom_in: {duration: 100}, zoom_out: {duration: 300} });

