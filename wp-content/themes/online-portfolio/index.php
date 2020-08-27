<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Bussiness_agency
 */

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Bussiness_agency
 */

$online_portfolio_breadcrump_option = online_portfolio_get_option('online_portfolio_breadcrumb_setting_option');
$online_portfolio_designlayout = get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true);

get_header();

?>


<main id="main">
	<?php
	if ($online_portfolio_breadcrump_option == 'enable' ) {
		online_portfolio_header_img();

	} ?>
	<div id="content" class="site-content single-ample-page">
		<div class="container  clearfix">
			<?php
			$sidebardesignlayout = esc_attr( get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true) );
			if (is_singular() && $sidebardesignlayout != "default-sidebar")
			{
				$sidebardesignlayout = esc_attr( get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true) );

			} else
			{
				$sidebardesignlayout = esc_attr(online_portfolio_get_option('online_portfolio_sidebar_layout_option' ));
			}


			if($sidebardesignlayout == 'left-sidebar'){
			?>
			<div class="flex-row-reverse">
				<?php } else{?>
				<div class="row"><?php } ?>
					<!-- Start primary content area -->
					<div id="primary" class="content-area">
						<main id="main" class="site-main" role="main">

							<?php
							if (have_posts()) :
								/* Start the Loop */
								while (have_posts()) : the_post();
									{
										/*
                                         * Include the Post-Format-specific template for the content.
                                         * If you want to override this in a child theme, then include a file
                                         * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                                         */
										get_template_part('template-parts/content', get_post_format());
									}

								endwhile;

								wp_reset_postdata();

								the_posts_navigation();

							else :
								get_template_part('template-parts/content', 'none');
							endif; ?>

						</main><!-- #main -->
					</div><!-- #primary -->

					<div id="sidebar-primary secondary" class="widget-area sidebar" role="complementary">
						<section  class="widget ">
							<?php get_sidebar();?>
						</section>
					</div>

				</div>
			</div>
		</div>
</main>


<?php

get_footer();
?>

