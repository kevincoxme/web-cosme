<?php

/**
 * Slider  options
 * @param null
 * @return array $online_portfolio_slider_option
 *
 */
if (!function_exists('online_portfolio_slider_option')) :
    function online_portfolio_slider_option()
    {
        $online_portfolio_slider_option = array(
            'show' => esc_html__('Show', 'online-portfolio'),
            'hide' => esc_html__('Hide', 'online-portfolio')
        );
        return apply_filters('online_portfolio_slider_option', $online_portfolio_slider_option);
    }
endif;