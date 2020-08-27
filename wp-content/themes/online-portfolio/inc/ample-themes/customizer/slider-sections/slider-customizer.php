<?php
/**
 * HomePage Settings Panel on customizer
 */
$wp_customize->add_panel(
    'online_portfolio_homepage_settings_panel',
    array(
        'priority' => 5,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('HomePage Slider Settings', 'online-portfolio'),
    )
);

/*-------------------------------------------------------------------------------------------------*/
/**
 * Slider Section
 *
 */
$wp_customize->add_section(
    'online_portfolio_slider_section',
    array(
        'title' => esc_html__('Slider Section', 'online-portfolio'),
        'panel' => 'online_portfolio_homepage_settings_panel',
        'priority' => 6,
    )
);

/**
 * Show/Hide option for Homepage Slider Section
 *
 */

$wp_customize->add_setting(
    'online_portfolio_homepage_slider_option',
    array(
        'default' => $default['online_portfolio_homepage_slider_option'],
        'sanitize_callback' => 'online_portfolio_sanitize_select',
    )
);
$hide_show_option = online_portfolio_slider_option();
$wp_customize->add_control(
    'online_portfolio_homepage_slider_option',
    array(
        'type' => 'radio',
        'label' => esc_html__('Slider Option', 'online-portfolio'),
        'description' => esc_html__('Show/hide option for homepage Slider Section.', 'online-portfolio'),
        'section' => 'online_portfolio_slider_section',
        'choices' => $hide_show_option,
        'priority' => 7
    )
);


/**
 * List All Pages
 */
$slider_pages = array();
$slider_pages_obj = get_pages();
$slider_pages[''] = esc_html__('Select Page','online-portfolio');
foreach ($slider_pages_obj as $page) {
    $slider_pages[$page->ID] = $page->post_title;
}


/*repeter call */
$wp_customize->add_setting('online_portfolio_banner_all_sliders', array(
    'sanitize_callback' => 'online_portfolio_sanitize_repeater',
    'default' => json_encode(array(
        array(
            'selectpage' => '',//field
            'button_text' => '',
            'button_url' => ''
        )
    ))
));

$wp_customize->add_control(new online_portfolio_Repeater_Controler($wp_customize, 'online_portfolio_banner_all_sliders', array(
        'label' =>esc_html__('Slider Settings Area', 'online-portfolio'),
        'section' => 'online_portfolio_slider_section',
        'settings' => 'online_portfolio_banner_all_sliders',
        'online_portfolio_box_label' =>esc_html__('Slider Settings Options', 'online-portfolio'),
        'online_portfolio_box_add_control' =>esc_html__('Add New Slider', 'online-portfolio'),
    ),
        array(
            'selectpage' => array(
                'type' => 'select',
                'label' =>esc_html__('Select Slider Page', 'online-portfolio'),
                'options' => $slider_pages//array
            ),
            'button_text' => array(
                'type' => 'text',
                'label' =>esc_html__('Enter Button Text', 'online-portfolio'),
                'default' => ''
            ),
            'button_url' => array(
                'type' => 'text',
                'label' => esc_html__('Enter Button Url', 'online-portfolio'),
                'default' => ''
            ),

        )
    )
);

	