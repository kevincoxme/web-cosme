<?php
if ( ! function_exists( 'online_portfolio_gutenberg_setup' ) ) :
	/**
	 * Making theme gutenberg compatible
	 */
	function online_portfolio_gutenberg_setup() {
		add_theme_support( 'align-wide' );
		add_theme_support( 'wp-block-styles' );
	}
endif;
add_action( 'after_setup_theme', 'online_portfolio_gutenberg_setup' );

function online_portfolio_dynamic_editor_styles(){

	global $online_portfolio_customizer_all_values;
	$online_portfolio_link_color               = esc_attr( $online_portfolio_customizer_all_values['online_portfolio-link-color'] );
	$online_portfolio_link_hover_color         = esc_attr( $online_portfolio_customizer_all_values['online_portfolio-link-hover-color'] );

	$custom_css = '';

	$custom_css .= "
            .edit-post-visual-editor, 
			.edit-post-visual-editor p {
               color: #666;
            }";

	$custom_css .= "
	        .wp-block .wp-block-heading h1, 
	        .wp-block .wp-block-heading h1 a,
	        .wp-block .wp-block-heading h2,
	        .wp-block .wp-block-heading h2 a,
	        .wp-block .wp-block-heading h3, 
	        .wp-block .wp-block-heading h3 a,
	        .wp-block .wp-block-heading h4, 
	        .wp-block .wp-block-heading h4 a,
	        .wp-block .wp-block-heading h5, 
	        .wp-block .wp-block-heading h5 a,
	        .wp-block .wp-block-heading h6,
	        .wp-block .wp-block-heading h6 a{
	            color: #3a3a3a;
	        }";

	$custom_css .= "
	        .wp-block a{
	            color: {$online_portfolio_link_color};
	        }";
	$custom_css .= "
	        .wp-block a:hover,
	        .wp-block a:active,
	        .wp-block a:focus{
	            color: {$online_portfolio_link_hover_color};
	        }";

        return wp_strip_all_tags( $custom_css );	
}

/**
 * Enqueue block editor style
 */
function online_portfolio_block_editor_styles() {
	wp_enqueue_style( 'online-portfolio-googleapis', '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Work+Sans:100,200,300,400,500,600,700,800,900', array(), null );
	wp_enqueue_style( 'online-portfolio-block-editor-styles', get_template_directory_uri() . '/inc/gutenberg/gutenberg-edit.css', false, '1.0' );

	/**
	 * Styles from the customizer
	 */
	wp_add_inline_style( 'online-portfolio-block-editor-styles', online_portfolio_dynamic_editor_styles() );
}
add_action( 'enqueue_block_editor_assets', 'online_portfolio_block_editor_styles',99 );

function online_portfolio_gutenberg_scripts() {
	wp_enqueue_style( 'online-portfolio-block-front-styles', get_template_directory_uri() . '/inc/gutenberg/gutenberg-front.css', false, '1.0' );
	wp_style_add_data( 'online-portfolio-block-front-styles', 'rtl', 'replace' );
}
add_action( 'wp_enqueue_scripts', 'online_portfolio_gutenberg_scripts' );