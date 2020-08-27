<?php
/**
 * Dynamic css
 *
 * @package Ample Themes
 * @subpackage Business agency
 *
 * @param null
 * @return void
 *
 */
if ( !function_exists('online_portfolio_dynamic_css') ):
    function online_portfolio_dynamic_css(){


        $online_portfolio_top_footer_color = esc_attr( online_portfolio_get_option('online_portfolio_top_footer_background_color') );


        $online_portfolio_primary_color = esc_attr( online_portfolio_get_option('online_portfolio_primary_color') );
        


        $custom_css = '';

        $custom_css .= ".example_f , #intro .btn-get-started , .search-button button, a.btn-get-started.scrollto,.section-header h3::after,#faq #accordion .card-header .btn[aria-expanded=\"true\"],#portfolio #portfolio-flters li:hover, #portfolio #portfolio-flters li.filter-active,#call-to-action .cta-btn:hover,.back-to-top{
           background: " . $online_portfolio_primary_color . ";}
           
    ";
        $custom_css .= " .nav-menu a:hover,.nav-menu a:active,.nav-menu a:focus, #mobile-nav ul li.menu-active a, .footer-top a, .timeline-content a, #facts .counters span, .credits a, a.btn-get-started.scrollto.know a , .nav-menu li:hover > a, .nav-menu > .menu-active > a,#services .icon i,#services .box:hover .title a,.contact-page-content ul li .fa{
    
           color: " . $online_portfolio_primary_color . ";}
    ";



        $custom_css .= "#testimonials .owl-dot.active,.post-rating, .line > span, .service-icon div, .widget-online-portfolio-theme-counter, .portfolioFilter .current, .portfolioFilter a:hover, .paralex-btn:hover, .view-more:hover, .features-slider .owl-theme .owl-controls .owl-page.active span, .widget-online-portfolio-theme-testimonial .owl-theme .owl-controls .owl-page.active span, .read-more-background, .widget-online-portfolio-theme-testimonial, .widget-online-portfolio-theme-meetbutton, .footer-tags a:hover, .ample-inner-banner, .widget-search .search-submit:hover,  .pagination-blog .pagination > .active > a, .pagination-blog .pagination > li > a:hover, .scrollup, .widget_search .search-submit, posts-navigation .nav-previous, .posts-navigation .nav-next, .wpcf7-form input.wpcf7-submit

 {
    
           background-color: " . $online_portfolio_primary_color . ";}
           
    ";

        $custom_css .= "#footer .footer-top{
         background-color: " . $online_portfolio_top_footer_color . ";}
    ";






        $custom_css .= "..icon-box--description .fa{
         border-color: " . $online_portfolio_primary_color .'!important'. ";}
    ";
        

        $custom_css .= ".post-rating,.line > span, .service-icon div, .widget-online-portfolio-theme-counter, .portfolioFilter .current, .portfolioFilter a:hover, .paralex-btn:hover, .view-more:hover, .features-slider .owl-theme .owl-controls .owl-page.active span, .widget-online-portfolio-theme-testimonial .owl-theme .owl-controls .owl-page.active span, .read-more-background, .widget-online-portfolio-theme-testimonial, .widget-online-portfolio-theme-meetbutton, .footer-tags a:hover, .ample-inner-banner,  .widget-search .search-submit:hover,  .pagination-blog .pagination > .active > a, .pagination-blog .pagination > li > a:hover, .scrollup ,.widget_search .search-submit ,posts-navigation .nav-previous,.posts-navigation .nav-next , .wpcf7-form input.wpcf7-submit
    
 {
    
           background-color: " . $online_portfolio_primary_color . ";}
           
    ";
        $custom_css .= ".error404 .content-area .search-form .search-submit  ,.button-course, .read-more-background:hover,a.viewcourse , .blog-event-date{
           background: " . $online_portfolio_primary_color .'!important'. ";}
           
    ";



        /*------------------------------------------------------------------------------------------------- */

        /*custom css*/


        wp_add_inline_style('online-portfolio-style', $custom_css);

    }
endif;
add_action('wp_enqueue_scripts', 'online_portfolio_dynamic_css', 99);