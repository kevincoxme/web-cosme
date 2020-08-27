<?php
/**
 * Business agency default theme options.
 *
 * 
 * @subpackage Business agency
 */

if ( !function_exists('online_portfolio_get_default_theme_options' ) ) :

    /**
     * Get default theme options.
     *
     * @since 1.0.0
     *
     * @return array Default theme options.
     */
    function online_portfolio_get_default_theme_options()
    {

        $default = array();

        // Homepage Slider Section
        $default['online_portfolio_homepage_slider_option'] = 'hide';
        $default['online_portfolio_slider_cat_id'] = 0;
        $default['online_portfolio_no_of_slider'] = 3;
        $default['online_portfolio_slider_get_started_txt'] = esc_html__('Get Started!', 'online-portfolio');
        $default['online_portfolio_slider_get_started_link'] = '#';

        // footer copyright.
        $default['online_portfolio_copyright'] = esc_html__('Copyright All Rights Reserved 2019', 'online-portfolio');

        // Home Page Top header Info.
        $default['online_portfolio_top_header_section'] = 'hide';
        $default['online_portfolio_notice_title']= esc_html__('Notice', 'online-portfolio');
        $default['online_portfolio_news_cat_id']='';
        $default['online_portfolio_no_of_news']=5;
        $default['online_portfolio_social_link_hide_option'] = 1;

        $default['online_portfolio_button']=esc_html__('Contact Us', 'online-portfolio');
        $default['online_portfolio_apply_button_link']='';

        // Blog.
        $default['online_portfolio_sidebar_layout_option'] = 'right-sidebar';
        $default['online_portfolio_blog_title_option'] = esc_html__('Latest Blog', 'online-portfolio');
        $default['online_portfolio_blog_excerpt_option'] = 'excerpt';
        $default['online_portfolio_description_length_option'] = 40;
        $default['online_portfolio_exclude_cat_blog_archive_option'] = '';
        

        // Details page.
        $default['online_portfolio_show_feature_image_single_option'] = 'show';

        // Color Option.
        $default['online_portfolio_primary_color'] = '#3178fb';
       
        $default['online_portfolio_top_footer_background_color'] = '#252020';
        $default['online_portfolio_front_page_hide_option'] = 0;
        $default['online_portfolio_breadcrumb_setting_option'] = 'enable';
        $default['online_portfolio_post_search_placeholder_option'] = esc_html__('Search', 'online-portfolio');
        $default['online_portfolio_hide_breadcrumb_front_page_option'] = 0;
        $default['online_portfolio_color_reset_option'] = 'do-not-reset';

        //company info
        $default['online_portfolio_top_header_section']='hide';
        $default['online_portfolio_info_header_section_location_icon']='fa-home';
        $default['online_portfolio_info_header_location']='';
        $default['online_portfolio_info_header_section_phone_number_icon']='fa-phone';
        $default['online_portfolio_info_header_phone_no']='';
        $default['online_portfolio_email_icon']='fa-envelope';
        $default['online_portfolio_info_header_email']='';

        /*default value */

        $default['online_portfolio_facebook_url']='';
        $default['online_portfolio_youtube_url']='';
        $default['online_portfolio_linkedin_url']='';
        $default['online_portfolio_twitter_url']='';
        $default['online_portfolio_instagram_url']='';
        $default['online_portfolio_google_plus_url']='';




        // Pass through filter.
        $default = apply_filters( 'online_portfolio_get_default_theme_options', $default );
        return $default;
    }
endif;
