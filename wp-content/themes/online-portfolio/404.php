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


$online_portfolio_breadcrump_option = online_portfolio_get_option('online_portfolio_breadcrumb_setting_option');
$online_portfolio_designlayout = get_post_meta(get_the_ID(), 'online_portfolio_sidebar_layout', true);

get_header();

?>


<main id="main">
	<?php
	if ($online_portfolio_breadcrump_option == 'enable' ) {
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
					<h3 class="page-title"><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'online-portfolio' ); ?></h3>


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


	<?php	} ?>
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


							<article id="post-147" class="post type-post status-publish has-post-thumbnail hentry">
								<h3 class="not-founds"><?php esc_html_e( '404 NOT Found!!!', 'online-portfolio' ); ?></h3>
								<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'online-portfolio' ); ?></p>
								<?php get_search_form();?>
							</article>


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

