<?php
/**
 * [atdi_online_portfolio_pro_ocdi_import_files description]
 * @return [type] [description]
 */
function atdi_online_portfoliopro_ocdi_import_files() {
	return array(
		array(
			'import_file_name'             => __( 'Online Portfolio Pro', 'atdi' ),
			'categories'                   => array( __( 'Online Portfolio Pro Demo Main', 'atdi' ) ),
			'local_import_file'            => ATDI_PATH . 'inc/ample-themes/online-portfolio-pro/online-portfolio-pro.xml',
			'local_import_widget_file'     => ATDI_PATH . 'inc/ample-themes/online-portfolio-pro/online-portfolio-pro.wie',
			'local_import_customizer_file' => ATDI_PATH . 'inc/ample-themes/online-portfolio-pro/online-portfolio-pro.dat',
			'import_preview_image_url'     => trailingslashit( get_template_directory() ) .'assets/img/screenshot.png',
			'import_notice'                => __( 'Make sure that all Recommanded (optional) plugins are activated.', 'atdi' ),
			'preview_url'                  => 'https://preview.amplethemes.com/online-portfolio-pro/',
		),
	);
}
add_filter( 'atdi/import_files', 'atdi_online_portfoliopro_ocdi_import_files' );

/**
 * [atdi_online_portfoliopro_after_import_setup description]
 * @return [type] [description]
 */
function atdi_online_portfoliopro_after_import_setup() {
	// Assign menus to their locations.
	$primary_menu = get_term_by( 'slug', 'primary', 'nav_menu' );
	$sidebar_menu = get_term_by( 'slug', 'social', 'nav_menu' );

	set_theme_mod( 'nav_menu_locations', array(
			'primary' => $primary_menu->term_id,
			'sidebar' => $sidebar_menu->term_id,
		)
	);

	// Assign front page and posts page (blog page).
	$front_page_id = get_page_by_title( 'Home' );
	$blog_page_id  = get_page_by_title( 'Blog' );

	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $front_page_id->ID );
	update_option( 'page_for_posts', $blog_page_id->ID );

	// Set WooCommerce pages.
	if( class_exists( 'WooCommerce' ) ) {
		// Set shop page.
		$pagearr = get_page_by_path( 'shop' );
		if( $pagearr ) {
			$pageid = $pagearr->ID;
			update_option( 'woocommerce_shop_page_id', absint( $pageid ) );
		}

		// Set cart page.
		$pagearr = get_page_by_path( 'cart' );
		if( $pagearr ) {
			$pageid = $pagearr->ID;
			update_option( 'woocommerce_cart_page_id', absint( $pageid ) );
		}

		// Set checkout page.
		$pagearr = get_page_by_path( 'checkout' );
		if( $pagearr ) {
			$pageid = $pagearr->ID;
			update_option( 'woocommerce_checkout_page_id', absint( $pageid ) );
		}

		// Set my-account page.
		$pagearr = get_page_by_path( 'my-account' );
		if( $pagearr ) {
			$pageid = $pagearr->ID;
			update_option( 'woocommerce_myaccount_page_id', absint( $pageid ) );
		}
	}

}
add_action( 'atdi/after_import', 'atdi_online_portfoliopro_after_import_setup' );

