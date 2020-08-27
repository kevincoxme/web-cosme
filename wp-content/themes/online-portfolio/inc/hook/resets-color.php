<?php
//=============================================================
// Color reset
//=============================================================
if ( ! function_exists( 'online_portfolio_reset_colors' ) ) :

    function online_portfolio_reset_colors($data) {


        set_theme_mod('online_portfolio_top_footer_background_color','#1A1E21');


        set_theme_mod('online_portfolio_primary_color','#ef4a2b');

        set_theme_mod('online_portfolio_color_reset_option','do-not-reset');

    }

endif;
add_action( 'online_portfolio_colors_reset','online_portfolio_reset_colors', 10 );

