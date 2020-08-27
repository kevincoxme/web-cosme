<?php
get_header();
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 * Template Name: AT: Elementor Template
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package online_portfolio
 */

$online_portfolio_hide_front_page_content = online_portfolio_get_option('online_portfolio_front_page_hide_option');
if (!is_home()){
$online_portfolio_slider_section_option = online_portfolio_get_option('online_portfolio_homepage_slider_option');

if ($online_portfolio_slider_section_option != 'hide') {
    ?>
    <section id="intro">
        <div class="intro-container">
            <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <?php
                    $all_slider = json_decode(online_portfolio_get_option('online_portfolio_banner_all_sliders'));
                    $post_in = array();
                    $slides_other_data = array();

                    if (is_array($all_slider)) {

                        foreach ($all_slider as $slides_data) {

                            if (isset($slides_data->selectpage) && !empty($slides_data->selectpage)) {
                                $post_in[] = $slides_data->selectpage;

                                $slides_other_data[$slides_data->selectpage] = array(
                                    'button_text' => $slides_data->button_text,
                                    'button_link' => $slides_data->button_url,

                                );


                            }


                        }
                    }
                    if (!empty($post_in)) :
                        $online_portfolio_slider_page_args = array(
                            'post__in' => $post_in,
                            'orderby' => 'post__in',
                            'posts_per_page' => count($post_in),
                            'post_type' => 'page',
                            'no_found_rows' => true,
                            'post_status' => 'publish'
                        );
                        $slider_query = new WP_Query($online_portfolio_slider_page_args);
                        $i = 0;
                        /*The Loop*/
                        if ($slider_query->have_posts()):
                            while ($slider_query->have_posts()):$slider_query->the_post();
                                $slides_single_data = $slides_other_data[get_the_ID()];
                                ?>

                                <div class="carousel-item <?php if ($i == 0) {
                                    echo "active";
                                } ?>">
                                    <?php
                                    if (has_post_thumbnail()) {
                                        $image_id = get_post_thumbnail_id();
                                        $image_url = wp_get_attachment_image_src($image_id, 'full', true); ?>


                                        <div class="carousel-background"><img
                                                src="<?php echo esc_url($image_url[0]); ?>"
                                                alt="<?php the_title_attribute(); ?>"></div>

                                    <?php } ?>
                                    <div class="carousel-container">
                                        <div class="carousel-content">

                                            <h2><?php the_title() ?></h2>
                                            <p> <?php echo esc_html(wp_trim_words(get_the_content(), 20)); ?></p>
                                            <?php if (!empty($slides_single_data['button_text'])) { ?>
                                                <a href="<?php echo esc_url($slides_single_data['button_link']); ?>"
                                                   class="btn-get-started scrollto"><?php echo esc_html($slides_single_data['button_text']) ?></a>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>

                                <?php
                                $i++;
                            endwhile;
                            wp_reset_postdata();
                        endif; endif;

                    ?>


                </div>

                <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only"><?php esc_html('Previous', 'online-portfolio')?></span>
                </a>

                <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only"><?php esc_html('Next', 'online-portfolio')?></span>
                </a>

            </div>
        </div>
    </section><!-- #intro -->
<?php } }?>

    <main id="main">


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

                                while ( have_posts() ) : the_post();?>

                                    <?php
                                    /**
                                     * Template part for displaying page content in page.php
                                     *
                                     * @link https://codex.wordpress.org/Template_Hierarchy
                                     *
                                     * @package Bussiness_agency
                                     */
                                    $hide_show_feature_image=online_portfolio_get_option( 'online_portfolio_show_feature_image_single_option');

                                    ?>

                                    <article id="post-<?php the_ID(); ?>" class="post type-post status-publish has-post-thumbnail hentry" <?php post_class(); ?>>

                                        

                                        <div class="entry-content">
                                            <?php
                                            the_content();
                                            wp_link_pages( array(
                                                'before' => '<div class="page-links">' . esc_html__( 'Pages:','online-portfolio' ),
                                                'after'  => '</div>',
                                            ) );
                                            ?>
                                        </div>

                                    </article><!-- #post-<?php the_ID(); ?> -->




                                    <?php // If comments are open or we have at least one comment, load up the comment template.
                                    if ( comments_open() || get_comments_number() ) :
                                        comments_template();
                                    endif;

                                endwhile; // End of the loop.
                                ?>

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