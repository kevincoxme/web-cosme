<?php
/**
 * Theme Option
 *
 * @since 1.0.0
 */
$wp_customize->add_panel(
    'online_portfolio_theme_options',
    array(
        'priority' => 7,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Theme Option', 'online-portfolio'),
    )
);


/*----------------------------------------------------------------------------------------------*/
/**
 * Color Options
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'online_portfolio_primary_color_option',
    array(
        'title' => esc_html__('Color Options', 'online-portfolio'),
        'panel' => 'online_portfolio_theme_options',
        'priority' => 6,
    )
);

$wp_customize->add_setting(
    'online_portfolio_primary_color',
    array(
        'default' => $default['online_portfolio_primary_color'],
        'sanitize_callback' => 'sanitize_hex_color',
    )
);

$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'online_portfolio_primary_color', array(
    'label' => esc_html__('Primary Color', 'online-portfolio'),
    'description' => esc_html__('We recommend choose  different  background color but not to choose similar to font color', 'online-portfolio'),
    'section' => 'online_portfolio_primary_color_option',
    'priority' => 14,

)));


/*-----------------------------------------------------------------------------*/
/**
 * Top Footer Background Color
 *
 * @since 1.0.0
 */

$wp_customize->add_setting(
    'online_portfolio_top_footer_background_color',
    array(
        'default' => $default['online_portfolio_top_footer_background_color'],
        'sanitize_callback' => 'sanitize_hex_color',

    )
);

$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'online_portfolio_top_footer_background_color', array(
    'label' => esc_html__('Top Footer Background Color', 'online-portfolio'),
    'description' => esc_html__('We recommend choose  different  background color but not to choose similar to font color', 'online-portfolio'),
    'section' => 'online_portfolio_primary_color_option',
    'priority' => 14,

)));


/*-------------------------------------------------------------------------------------------*/
/**
 * Hide Static page in Home page
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'online_portfolio_front_page_option',
    array(
        'title' => esc_html__('Front Page Options', 'online-portfolio'),
        'panel' => 'online_portfolio_theme_options',
        'priority' => 6,
    )
);

/**
 *   Show/Hide Static page/Posts in Home page
 */
$wp_customize->add_setting(
    'online_portfolio_front_page_hide_option',
    array(
        'default' => $default['online_portfolio_front_page_hide_option'],
        'sanitize_callback' => 'online_portfolio_sanitize_checkbox',
    )
);
$wp_customize->add_control('online_portfolio_front_page_hide_option',
    array(
        'label' => esc_html__('Hide Blog Posts or Static Page on Front Page', 'online-portfolio'),
        'section' => 'online_portfolio_front_page_option',
        'type' => 'checkbox',
        'priority' => 10
    )
);


/*-------------------------------------------------------------------------------------------*/
/**
 * Breadcrumb Options
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'online_portfolio_breadcrumb_option',
    array(
        'title' => esc_html__('Breadcrumb Options', 'online-portfolio'),
        'panel' => 'online_portfolio_theme_options',
        'priority' => 6,
    )
);

/**
 * Breadcrumb Option
 */
$wp_customize->add_setting(
    'online_portfolio_breadcrumb_setting_option',
    array(
        'default' => $default['online_portfolio_breadcrumb_setting_option'],
        'sanitize_callback' => 'online_portfolio_sanitize_select',

    )
);
$hide_show_breadcrumb_option = online_portfolio_show_breadcrumb_option();
$wp_customize->add_control('online_portfolio_breadcrumb_setting_option',
    array(
        'label' => esc_html__('Breadcrumb/header Image Options', 'online-portfolio'),
        'section' => 'online_portfolio_breadcrumb_option',
        'choices' => $hide_show_breadcrumb_option,
        'type' => 'select',
        'priority' => 10
    )
);



/*-------------------------------------------------------------------------------------------*/

/**
 * Reset Options
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'online_portfolio_reset_option',
    array(
        'title' => esc_html__('Color Reset Options', 'online-portfolio'),
        'panel' => 'online_portfolio_theme_options',
        'priority' => 14,
    )
);

/**
 * Reset Option
 */
$wp_customize->add_setting(
    'online_portfolio_color_reset_option',
    array(
        'default' => $default['online_portfolio_color_reset_option'],
        'sanitize_callback' => 'online_portfolio_sanitize_select',
        'transport' => 'postMessage'
    )
);
$reset_option = online_portfolio_reset_option();
$wp_customize->add_control('online_portfolio_color_reset_option',
    array(
        'label' => esc_html__('Reset Options', 'online-portfolio'),
        'description' => sprintf( esc_html__('Caution: Reset theme settings according to the given options. Refresh the page after saving to view the effects', 'online-portfolio')),
        'section' => 'online_portfolio_reset_option',
        'type' => 'select',
        'choices' => $reset_option,
        'priority' => 20
    )
);

