<?php
/**
 * Copyright Info Section
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'online_portfolio_copyright_info_section',
    array(
        'priority' => 10,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Footer Option', 'online-portfolio'),
    )
);

/**
 * Field for Copyright
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'online_portfolio_copyright',
    array(
        'default' => $default['online_portfolio_copyright'],
        'sanitize_callback' => 'wp_kses_post',
    )
);
$wp_customize->add_control(
    'online_portfolio_copyright',
    array(
        'type' => 'text',
        'label' => esc_html__('Copyright', 'online-portfolio'),
        'section' => 'online_portfolio_copyright_info_section',
        'priority' => 8
    )
);

