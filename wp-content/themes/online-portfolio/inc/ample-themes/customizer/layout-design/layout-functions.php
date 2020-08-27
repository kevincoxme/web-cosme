<?php
if (!function_exists('online_portfolio_sidebar_layout')) :
    function online_portfolio_sidebar_layout()
    {
        $online_portfolio_sidebar_layout = array(
            'right-sidebar' => esc_html__('Right Sidebar', 'online-portfolio'),
            'left-sidebar' => esc_html__('Left Sidebar', 'online-portfolio'),
            'no-sidebar' => esc_html__('No Sidebar', 'online-portfolio'),
        );
        return apply_filters('online_portfolio_sidebar_layout', $online_portfolio_sidebar_layout);
    }
endif;

/**
 * Blog/Archive Description Option
 *
 * @since Business agency 1.0.0
 *
 *
 * 
 * @param null
 * @return array $online_portfolio_blog_excerpt
 *
 */
if (!function_exists('online_portfolio_blog_excerpt')) :
    function online_portfolio_blog_excerpt()
    {
        $online_portfolio_blog_excerpt = array(
            'excerpt' => esc_html__('Excerpt', 'online-portfolio'),
            'content' => esc_html__('Content', 'online-portfolio'),

        );
        return apply_filters('online_portfolio_blog_excerpt', $online_portfolio_blog_excerpt);
    }
endif;

/**
 * Show/Hide Feature Image  options
 *
 * @since Business agency 1.0.0
 *
 * @param null
 * @return array $online_portfolio_show_feature_image_option
 *
 */
if (!function_exists('online_portfolio_show_feature_image_option')) :
    function online_portfolio_show_feature_image_option()
    {
        $online_portfolio_show_feature_image_option = array(
            'show' => esc_html__('Show', 'online-portfolio'),
            'hide' => esc_html__('Hide', 'online-portfolio')
        );
        return apply_filters('online_portfolio_show_feature_image_option', $online_portfolio_show_feature_image_option);
    }
endif;
