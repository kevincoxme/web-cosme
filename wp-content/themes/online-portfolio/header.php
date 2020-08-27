<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Ample_OnePage
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class('at-sticky-sidebar'); ?>>

<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content">
        <?php _e( 'Skip to content', 'online-portfolio' ); ?></a>
    
<!--==========================
  Header
============================-->
    


<header id="header">
    <?php
    $section_option_company_info = online_portfolio_get_option('online_portfolio_top_header_section');
    if ($section_option_company_info == 'show') {
    ?>

    <?php } ?>
    <div class="main-header">
        <div class="container-fluid">

            <div id="logo" class="pull-left">
                <?php
                if (has_custom_logo()) { ?>
                    <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>">
                        <?php the_custom_logo(); ?>
                    </a>
                <?php } else {
                    if (is_front_page() && is_home()) :
                        ?>
                        <h1 class="site-title">

                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
                        </h1>
                    <?php else : ?>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
                        </h1>
                        <?php
                    endif;
                    $description = get_bloginfo('description', 'display');
                    if ($description || is_customize_preview()) : ?>
                        <p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
                        <?php
                    endif;
                } ?>
                <!-- Uncomment below if you prefer to use an image logo -->
                <!-- <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>-->
            </div>

            <nav id="nav-menu-container">


                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_class' => 'nav-menu',
                            'depth' => 4,

                        )
                    );
                }
                ?>

            </nav><!-- #nav-menu-container -->
        </div>

    </div>
</header><!-- #header -->




