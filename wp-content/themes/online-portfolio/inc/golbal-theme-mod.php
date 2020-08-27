<?php
/**
 * Functions for get_theme_mod()
 *
 
 */
if (!function_exists('online_portfolio_get_option')) :

    /**
     * Get theme option.
     *
     * @since 1.0.0
     *
     * @param string $key Option key.
     * @return mixed Option value.
     */
    function online_portfolio_get_option($key = '')
    {
        if (empty($key)) {
            return;
        }
        $online_portfolio_default_options = online_portfolio_get_default_theme_options();

        $default = (isset($online_portfolio_default_options[$key])) ? $online_portfolio_default_options[$key] : '';

        $theme_option = get_theme_mod($key, $default);

        return $theme_option;

    }

endif;

