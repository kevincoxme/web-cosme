<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bussiness_agency
 */

?>
	<footer id="footer">
	<?php $copyright = online_portfolio_get_option('online_portfolio_copyright');
if( is_active_sidebar('footer1') || is_active_sidebar('footer2') || is_active_sidebar('footer3') || is_active_sidebar('footer4')|| is_active_sidebar('footerinfo'))
{
	?>

	<div class="footer-top">
			<div class="container">
				<div class="row">

					<div class="col-lg-3 col-md-6 footer-info">
						<?php dynamic_sidebar('footer1'); ?>
					</div>

					<div class="col-lg-3 col-md-6 footer-links">
						<?php dynamic_sidebar('footer2'); ?>
					</div>

					<div class="col-lg-3 col-md-6 footer-contact">
						<?php dynamic_sidebar('footer3'); ?>
					</div>

					<div class="col-lg-3 col-md-6 footer-newsletter">
						<?php dynamic_sidebar('footer4'); ?>
					</div>

				</div>
			</div>
		</div>
<?php } ?>		
		

		<div class="container">
			<div class="copyright">
				&copy; <?php echo wp_kses_post($copyright); ?>
			</div>
			<div class="credits">
				<a href="<?php echo esc_url( __( 'https://www.amplethemes.com/', 'online-portfolio' ) ); ?>"
				><?php
					/* translators: %s: CMS name, i.e. WordPress. */
					/*printf( esc_html__( ' Design & develop by AmpleThemes %s', 'online-portfolio' ), '' );*/
					?></a>
			</div>
		</div>
	</footer><!-- #footer -->

	<a href="#" class="back-to-top"><i class="fas fa-chevron-up"></i></a>
	<?php wp_footer(); ?>
</div>

	</body>
	</html>
