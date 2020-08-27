<?php
/**
 * Bussiness agency functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Bussiness_agency
 */

if ( ! function_exists( 'online_portfolio_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function online_portfolio_setup() {
		/*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on Bussiness agency, use a find and replace
         * to change 'online_portfolio' to the name of your theme in all the template files.
         */
		load_theme_textdomain( 'online-portfolio' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
		add_theme_support( 'title-tag' );

		/*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => esc_html__( 'Primary', 'online-portfolio' ),
			'social-link' => esc_html__('Social Link', 'online-portfolio'),

		) );

		/*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'online_portfolio_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );


		// This theme styles the visual editor with editor-style.css to match the theme style.
		add_editor_style();

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
		/*for header image */

		$online_portfolio_args = array(
			'flex-width'    => true,
			'width'         => 980,
			'flex-height'    => true,
			'height'        => 200,
			'default-image' => get_template_directory_uri() . '/assets/images/header.png',
		);
		add_theme_support( 'custom-header', $online_portfolio_args );


		/**woo compatible*/
		add_theme_support( 'woocommerce' );

        /*add excert on page*/
        add_post_type_support( 'page', 'excerpt' );

		add_theme_support( 'align-wide' );


// woocommerce images popup code
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );

	}
endif;
add_action( 'after_setup_theme', 'online_portfolio_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function online_portfolio_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'online_portfolio_content_width', 640 );
}
add_action( 'after_setup_theme', 'online_portfolio_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function online_portfolio_widgets_init() {
	
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'online-portfolio' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'online-portfolio' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title"><span>',
		'after_title'   => '</span></h2>'
	) );
	register_sidebar(array(
		'name' => esc_html__('HomePage Widgets Area ', 'online-portfolio'),
		'id' => 'homepage_widgets',
		'description' => esc_html__('Add widgets here.', 'online-portfolio'),
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h2 class="widget-title">',
		'after_title' => '</h2>',
	));
	
	register_sidebar(array(
		'name' => esc_html__('Footer1 ', 'online-portfolio'),
		'id' => 'footer1',
		'description' => esc_html__('Add widgets here.', 'online-portfolio'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title"><span>',
		'after_title'   => '</span></h2>'
	));
	register_sidebar(array(
		'name' => esc_html__('Footer2 ', 'online-portfolio'),
		'id' => 'footer2',
		'description' => esc_html__('Add widgets here.', 'online-portfolio'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title"><span>',
		'after_title'   => '</span></h2>'
	));
	register_sidebar(array(
		'name' => esc_html__('Footer3 ', 'online-portfolio'),
		'id' => 'footer3',
		'description' => esc_html__('Add widgets here.', 'online-portfolio'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title"><span>',
		'after_title'   => '</span></h2>'
	));
	register_sidebar(array(
		'name' => esc_html__('Footer4 ', 'online-portfolio'),
		'id' => 'footer4',
		'description' => esc_html__('Add widgets here.', 'online-portfolio'),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title"><span>',
		'after_title'   => '</span></h2>'
	));
}
add_action( 'widgets_init', 'online_portfolio_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
/**
 * Enqueue scripts and styles.
 */
function online_portfolio_scripts() {


	/*google font  */
	wp_enqueue_style('online-portfolio-googleapis', '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Work+Sans:100,200,300,400,500,600,700,800,900', array(), null);

	wp_enqueue_style('font-awesome', get_template_directory_uri() . '/assets/lib/font-awesome/css/all.min.css', array(), '5.8.1');

	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/lib/bootstrap/css/bootstrap.min.css', array(), '4.2.1');


	wp_enqueue_style('animate', get_template_directory_uri() . '/assets/lib/animate/animate.min.css', array(), '3.5.2');

	wp_enqueue_style('owlcarousel-css', get_template_directory_uri() . '/assets/lib/owlcarousel/assets/owl.carousel.min.css', array(), '2.2.1');

	wp_enqueue_style('lightbox', get_template_directory_uri() . '/assets/lib/lightbox/css/lightbox.min.css', array(), '2.2.1');

	wp_enqueue_style('online-portfolio-style', get_stylesheet_uri());

	wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/lib/bootstrap/js/bootstrap.bundle.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('easing', get_template_directory_uri() . '/assets/lib/easing/easing.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('hoverIntent', get_template_directory_uri() . '/assets/lib/superfish/hoverIntent.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('superfish', get_template_directory_uri() . '/assets/lib/superfish/superfish.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('wow', get_template_directory_uri() . '/assets/lib/wow/wow.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('waypoints', get_template_directory_uri() . '/assets/lib/waypoints/waypoints.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('counterup', get_template_directory_uri() . '/assets/lib/counterup/counterup.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('owlcarousel-js', get_template_directory_uri() . '/assets/lib/owlcarousel/owl.carousel.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('isotope', get_template_directory_uri() . '/assets/lib/isotope/isotope.pkgd.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('lightbox-js', get_template_directory_uri() . '/assets/lib/lightbox/js/lightbox.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script('touchSwipe', get_template_directory_uri() . '/assets/lib/touchSwipe/jquery.touchSwipe.min.js', array('jquery'), '4.2.1', 1);

	wp_enqueue_script( 'sticky-sidebar', get_template_directory_uri() . '/assets/js/theia-sticky-sidebar.js', array('jquery'), '4.5.0' );
    //wp_enqueue_script('online-portfolio-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/skip-link-focus-fix.js', array('jquery'), '20151215', true);

    //wp_enqueue_script('online-portfolio-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), '20151215', true);

	wp_enqueue_script('online-portfolio-custom', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.5', 1);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'online_portfolio_scripts' );



/**
 * define size of logo.
 */

if (!function_exists('online_portfolio_custom_logo_setup')) :
	function online_portfolio_custom_logo_setup()
	{
		add_theme_support('custom-logo', array(
			'height' => 90,
			'width' => 300,
			'flex-width' => true,
		));
	}

	add_action('after_setup_theme', 'online_portfolio_custom_logo_setup');
endif;








if ( ! function_exists( 'online_portfolio_header_page_title' ) ) :

	/**
	 * Display page title on header.
	 *
	 * @since 1.0.0
	 */
	function online_portfolio_header_page_title() {
		if ( is_home() ) :
			$online_portfolio_blog_page_title = online_portfolio_get_option('online_portfolio_blog_title_option');

			?>

			<h3><?php echo esc_html($online_portfolio_blog_page_title); ?></h3>


			<?php
		elseif ( ! is_front_page()  || is_singular() ) :
			?>
			<h3><?php single_post_title(); ?></h3>


			<?php
		elseif ( is_archive() ) :
			?>

			
			<h3><?php  the_archive_title(); ?></h3>

			<?php
		elseif ( is_search() ) :
			?>
			<h3 class="header-title"><?php printf( esc_html__( 'Search Results for: %s', 'online-portfolio' ), get_search_query() ); ?></h3>
			<?php
		elseif ( is_404() ) :
			?>
			<h3 ><?php echo esc_html__( 'Oops! That page can&#39;t be found.', 'online-portfolio' ); ?></h3>


			<?php
		
		endif;
	}

endif;
















/*header image class */

function online_portfolio_header_img()
{
	/**
	 * 
	 *
	 * @link https://codex.wordpress.org/Template_Hierarchy
	 *
	 * @package online_portfolio
	 */
	global $online_portfolio_header_image, $online_portfolio_header_style;
	$online_portfolio_header_image = get_header_image();

	if ($online_portfolio_header_image) {
		$online_portfolio_header_style = $online_portfolio_header_image;

	} else {

		$online_portfolio_header_style = '';
	}

	?>


	<div class="inner-header-banner overlay bg-img"
		 style="background-image: url(<?php echo esc_url($online_portfolio_header_style); ?>);">
		<div class="container">
			<header class="section-header">
				<?php online_portfolio_header_page_title(); ?>

				<?php
				$online_portfolio_breadcrump_option = online_portfolio_get_option('online_portfolio_breadcrumb_setting_option');

				if ($online_portfolio_breadcrump_option == "enable") {
					?>

					<div class="breadcrumbs">
						<div class="container">
							<div class="breadcrumb-trail breadcrumbs" arial-label="Breadcrumbs" role="navigation">
								<ol class="breadcrumb trail-items">
									<li><?php breadcrumb_trail(); ?></li>
								</ol>
							</div>
						</div>
					</div>
				<?php } ?>

			</header>
		</div>
	</div>

	<?php
}



if (!function_exists('online_portfolio_widgets_backend_enqueue')) :
	function online_portfolio_widgets_backend_enqueue($hook)
	{
		if ('widgets.php' != $hook) {
			return;
		}
		wp_enqueue_script('online_portfolio-media-sort', get_template_directory_uri() . '/assets/js/sortable.js', array( 'jquery' ) );
		wp_register_script('online-portfolio-custom-widgets', get_template_directory_uri() . '/assets/js/widgets.js', array('jquery'), true);
		wp_enqueue_media();
		wp_enqueue_script('online-portfolio-custom-widgets');
		wp_enqueue_style( 'font-awesome', get_template_directory_uri().'/assets/css/font-awesome.css' );
        wp_enqueue_style( 'online-portfolio-style-admin', get_template_directory_uri() . '/assets/css/repeater-admin.css');
	}

	add_action('admin_enqueue_scripts', 'online_portfolio_widgets_backend_enqueue');
endif;




if (!function_exists('online_portfolio_admin_css_enqueue_new_post')) :
	function online_portfolio_admin_css_enqueue_new_post($hook)
	{
		if ('post-new.php' != $hook) {
			return;
		}
		wp_enqueue_style('online-portfolio-admin', get_template_directory_uri() . '/assets/css/admin.css', array(), '2.0.0');
	}
	add_action('admin_enqueue_scripts', 'online_portfolio_admin_css_enqueue_new_post');
endif;



if (!function_exists('online_portfolio_admin_css_enqueue')) :
	function online_portfolio_admin_css_enqueue($hook)
	{
		if ('post.php' != $hook) {
			return;
		}
		wp_enqueue_style('online-portfolio-admin', get_template_directory_uri() . '/assets/css/admin.css', array(), '2.0.0');
		
		wp_enqueue_script('online_portfolio-custom-widgets');

	}
	add_action('admin_enqueue_scripts', 'online_portfolio_admin_css_enqueue');
endif;



/**
 * Admin Enqueue scripts
 */
if ( ! function_exists( 'online_portfolio_admin_scripts' ) ) {
    function online_portfolio_admin_scripts($hook) {

		wp_enqueue_script('online_portfolio-media-sort', get_template_directory_uri() . '/assets/js/sortable.js', array( 'jquery' ) );


		wp_enqueue_script('online_portfolio-media-repeater', get_template_directory_uri() . '/assets/js/repeater-admin.js', array( 'jquery', 'customize-controls' ) );

        wp_enqueue_style('at-ample-admin', get_template_directory_uri() . '/assets/css/at-admin-css.css', array(), '2.0.0');

    }
}
add_action('admin_enqueue_scripts', 'online_portfolio_admin_scripts');





/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/fileloader.php';

require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
require get_template_directory() . '/library/breadcrumbs/breadcrumbs.php';



/*add custom body class for sidebar section*/




/*for sidebar adding options**/

function online_portfolio_names( $classes ) {
	// add 'class-name' to the $classes array
	$sidebardesignlayout = esc_attr( get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true) );
	if (is_singular() && $sidebardesignlayout != "default-sidebar")
	{
		$sidebardesignlayout = esc_attr( get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true) );

	} else
	{
		$sidebardesignlayout = esc_attr(online_portfolio_get_option('online_portfolio_sidebar_layout_option' ));
	}

	$classes[] = $sidebardesignlayout;
	return $classes;

}
add_filter( 'body_class', 'online_portfolio_names' );

/**
 * Load Dynamic css.
 */
$online_portfolio_dynamic_css_options = online_portfolio_get_option('online_portfolio_color_reset_option');

if ($online_portfolio_dynamic_css_options== "do-not-reset" || $dynamic_css_options == "") {

	include get_template_directory() . '/inc/hook/dynamic-style-css.php';

} elseif ($online_portfolio_dynamic_css_options == "reset-all") {
	do_action('online_portfolio_colors_reset');
}




/**
 * Run ajax request.
 */
if ( ! function_exists('online_portfolio_wp_pages_plucker') ) :

	/**
	 * Sending pages with ids
	 */
	function online_portfolio_wp_pages_plucker()
	{
		$pages = get_pages(
			array (
				'parent'  => 0, // replaces 'depth' => 1,
			)
		);

		$ids = wp_list_pluck( $pages, 'post_title', 'ID' );

		return wp_send_json($ids);
	}

endif;
add_action( 'wp_ajax_online_portfolio_wp_pages_plucker', 'online_portfolio_wp_pages_plucker' );
add_action( 'wp_ajax_nopriv_online_portfolio_wp_pages_plucker', 'online_portfolio_wp_pages_plucker' );

