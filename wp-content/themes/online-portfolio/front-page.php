<?php
get_header();


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
                                                <div class="slider-text">

                                                <h2><?php the_title() ?></h2>
                                                <p> <?php echo esc_html(wp_trim_words(get_the_content(), 20)); ?></p>
                                                    <div class="slider-button">
                                                    <?php if (!empty($slides_single_data['button_text'])) { ?>
                                                    <a href="<?php echo esc_url($slides_single_data['button_link']); ?>"
                                                       class="btn-get-started scrollto"><?php echo esc_html($slides_single_data['button_text']) ?></a>
                                                <?php } ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php if($i>0) { ?>
                                        <a class="carousel-control-prev" href="#introCarousel" role="button"
                                           data-slide="prev">
                                            <span class="carousel-control-prev-icon ion-chevron-left"
                                                  aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>

                                        <a class="carousel-control-next" href="#introCarousel" role="button"
                                           data-slide="next">
                                            <span class="carousel-control-next-icon ion-chevron-right"
                                                  aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>


                                        <?php
                                    }
                                    $i++;
                                endwhile;
                                wp_reset_postdata();
                            endif; endif;

                        ?>


                    </div>


                </div>
            </div>
        </section><!-- #intro -->
    <?php } ?>


    <main id="main">

        <?php dynamic_sidebar('homepage_widgets'); ?>


    </main>


    <?php

}

if ('posts' == get_option('show_on_front')) {

    include(get_home_template());
} else {
    if (0 == $online_portfolio_hide_front_page_content) {
        include(get_page_template());


    }
}

get_footer();
?>


