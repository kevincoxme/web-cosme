<?php
/**
 * Breadcrumb  display option options
 * @param null
 * @return array $online_portfolio_show_breadcrumb_option
 *
 */
if (!function_exists('online_portfolio_show_breadcrumb_option')) :
    function online_portfolio_show_breadcrumb_option()
    {
        $online_portfolio_show_breadcrumb_option = array(
            'enable' => esc_html__('Enable', 'online-portfolio'),
            'disable' => esc_html__('Disable', 'online-portfolio')
        );
        return apply_filters('online_portfolio_show_breadcrumb_option', $online_portfolio_show_breadcrumb_option);
    }
endif;


/**
 * Reset Option
 *
 *
 * @param null
 * @return array $online_portfolio_reset_option
 *
 */
if (!function_exists('online_portfolio_reset_option')) :
    function online_portfolio_reset_option()
    {
        $online_portfolio_reset_option = array(
            'do-not-reset' => esc_html__('Do Not Reset', 'online-portfolio'),
            'reset-all' => esc_html__('Reset All', 'online-portfolio'),
        );
        return apply_filters('online_portfolio_reset_option', $online_portfolio_reset_option);
    }
endif;



/**
 * Sanitize Multiple Category
 * =====================================
 */

if ( !function_exists('online_portfolio_sanitize_multiple_category') ) :

    function online_portfolio_sanitize_multiple_category( $values )
    {

        $multi_values = !is_array( $values ) ? explode( ',', $values ) : $values;

        return !empty( $multi_values ) ? array_map( 'sanitize_text_field', $multi_values ) : array();
    }

endif;
