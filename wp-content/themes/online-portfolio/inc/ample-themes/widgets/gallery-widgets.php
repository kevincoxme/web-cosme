<?php
if (!class_exists('Online_Portfolio_Our_Work_Widget')) {
    class Online_Portfolio_Our_Work_Widget extends WP_Widget
    {

        private function defaults()
        {

            $defaults = array(
                'title' => esc_html__('Our Work', 'online-portfolio'),
                'sub-title' => '',
                'online_portfolio_portfolio_filter_all' => esc_html__('All', 'online-portfolio'),
                'cat_id' => array(),
                'section-id' =>'',



            );
            return $defaults;
        }


        public function __construct()
        {
            parent::__construct(
                'online-portfolio-our-work-widget',
                esc_html__('AT : Work Widget', 'online-portfolio'),
                array('description' => esc_html__('Business Work Section', 'online-portfolio'))
            );
        }

        public function widget($args, $instance)
        {

            $instance = wp_parse_args((array)$instance, $this->defaults());

            if (!empty($instance)) {
                $section_id = esc_attr($instance['section-id']);
                $subtitle = esc_html($instance['sub-title']);
                $title = apply_filters('widget_title', !empty($instance['title']) ? esc_html($instance['title']) : '', $instance, $this->id_base);
                $online_portfolio_ad_title = esc_html($instance['online_portfolio_portfolio_filter_all']);
                $online_portfolio_selected_cat = '';

                if (!empty($instance['cat_id'])) {
                    $online_portfolio_selected_cat = online_portfolio_sanitize_multiple_category($instance['cat_id']);
                    if (is_array($online_portfolio_selected_cat[0])) {
                        $online_portfolio_selected_cat = $online_portfolio_selected_cat[0];
                    }
                }

                echo $args['before_widget'];
                ?>


                <section id="<?php echo esc_attr($section_id); ?>">

                <div id="portfolio"  class="section-bg" >
                    <div class="container-fluid">

                        <header class="section-header">
                            <h3 class="section-title"><?php echo esc_html($title); ?></h3>
                            <p><?php echo esc_html($subtitle); ?></p>
                        </header>

                        <div class="row">
                            <div class="col-lg-12">
                                <?php
                                $sticky = get_option('sticky_posts');
                                $online_portfolio_cat_post_args = array(
                                    'posts_per_page' => 30,
                                    'no_found_rows' => true,
                                    'post_status' => 'publish',
                                    'ignore_sticky_posts' => true,
                                    'post__not_in' => $sticky,
                                    'orderby' => 'post_date',
                                    'order' => 'DESC',
                                );
                                if (-1 != $online_portfolio_cat_post_args) {
                                    $online_portfolio_cat_post_args['category__in'] = $online_portfolio_selected_cat;
                                }
                                $portfolio_filter_query = new WP_Query($online_portfolio_cat_post_args);

                                ?>

                                <ul id="portfolio-flters">

                                    <?php
                                    if (!empty($online_portfolio_ad_title)) {
                                        echo '<li data-filter="*" class="filter-active">' . $online_portfolio_ad_title . '</li>';
                                    }

                                    if (!empty($online_portfolio_selected_cat) && is_array($online_portfolio_selected_cat)) {
                                        foreach ($online_portfolio_selected_cat as $online_portfolio_selected_single_cat) {

                                            echo ' <li href="#" data-filter=".filter-' . esc_attr($online_portfolio_selected_single_cat) . '">' . esc_html(get_cat_name($online_portfolio_selected_single_cat)) . '</li>';



                                        }
                                    }

                                    ?>

                                </ul>
                            </div>
                        </div>

                        <div class="row portfolio-container">
                <?php
                if ($portfolio_filter_query->have_posts()):
                    while ($portfolio_filter_query->have_posts()):
                        $portfolio_filter_query->the_post();
                        $categories = get_the_category(get_the_ID());
                        if (!empty($categories)) {
                            foreach ($categories as $category) {
                                $select_cat = $category->term_id;
                                ?>

                            <div class="col-lg-4 col-md-6 portfolio-item filter-<?php echo esc_attr($select_cat); ?> wow fadeInUp">

                                <?php
                            }
                        }
                        ?>
                                <div class="portfolio-wrap">

                                    <figure>
                        <?php
                        if (has_post_thumbnail()) {
                            $image_id = get_post_thumbnail_id();
                            $image_url = wp_get_attachment_image_src($image_id, 'large', true);
                            ?>
                                        <img src="<?php echo esc_url($image_url[0]); ?>" class="img-fluid" alt="">
                                        <a href="<?php echo esc_url($image_url[0]); ?>" data-lightbox="portfolio" data-title="Advertising 1" class="link-preview" title="Preview"><i class="far fa-eye"></i></a>
                        <?php } ?>
                                        <a href="<?php the_permalink();?>" class="link-details" title="More Details"><i class="fas fa-plus"></i></a>
                                    </figure>

                                    <div class="portfolio-info">
                                        <h4><a href="<?php the_permalink();?>"><?php the_title();?></a></h4>
                                    </div>
                                </div>
                            </div>

                                <?php
                            endwhile;
                            endif;
                                wp_reset_postdata();
                                ?>
                        </div>

                    </div>

                </div><!-- #portfolio -->

                 </section>
                <?php
                echo $args['after_widget'];
            }
        }

        public function update($new_instance, $old_instance)
        {
            $instance = $old_instance;
            $instance['cat_id'] = (isset($new_instance['cat_id'])) ? online_portfolio_sanitize_multiple_category($new_instance['cat_id']) : array();
            $instance['online_portfolio_portfolio_filter_all'] = sanitize_text_field($new_instance['online_portfolio_portfolio_filter_all']);
            $instance['title'] = sanitize_text_field($new_instance['title']);
            $instance['sub-title'] = sanitize_text_field($new_instance['sub-title']);
            $instance['section-id'] = sanitize_text_field($new_instance['section-id']);

            return $instance;
        }

        public function form($instance)
        {
            $section_id= esc_attr( $instance['section-id'] );

            $instance = wp_parse_args((array )$instance, $this->defaults());
            $title = esc_attr($instance['title']);
            $subtitle = esc_attr($instance['sub-title']);
            $online_portfolio_ad_title = esc_attr($instance['online_portfolio_portfolio_filter_all']);
            $online_portfolio_selected_cat = '';
            if (!empty($instance['cat_id'])) {
                $online_portfolio_selected_cat = $instance['cat_id'];
                if (is_array($online_portfolio_selected_cat[0])) {
                    $online_portfolio_selected_cat = $online_portfolio_selected_cat[0];
                }
            }
            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('section-id') ); ?>">
                    <?php esc_html_e( 'Section Id', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('section-id')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('section-id')); ?>" value="<?php echo $section_id; ?>">
            </p>
            <p>
                <label
                    for="<?php echo esc_attr($this->get_field_id('title')); ?>"><strong><?php esc_html_e('Title:', 'online-portfolio'); ?></strong></label>
                <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>"
                       name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text"
                       value="<?php echo $title; ?>"/>
            </p>

            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('sub-title') ); ?>">
                    <?php esc_html_e( 'Sub Title', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('sub-title')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('sub-title')); ?>" value="<?php echo $subtitle; ?>">
            </p>

            <p>
                <label
                    for="<?php echo esc_attr($this->get_field_id('online_portfolio_portfolio_filter_all')); ?>"><strong><?php esc_html_e('Our Work Filter All Text', 'online-portfolio'); ?></strong></label>
                <input class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('online_portfolio_portfolio_filter_all')); ?>"
                       name="<?php echo esc_attr($this->get_field_name('online_portfolio_portfolio_filter_all')); ?>"
                       type="text" value="<?php echo $online_portfolio_ad_title; ?>"/>
            </p>

            <p>
                <label
                    for="<?php echo esc_attr($this->get_field_id('cat_id')); ?>"><strong><?php esc_html_e('Select Category', 'online-portfolio'); ?></strong></label>
                <select class="widefat" name="<?php echo $this->get_field_name('cat_id'); ?>[]"
                        id="<?php echo esc_attr($this->get_field_id('post_number')); ?>" multiple="multiple">
                    <?php
                    $option = '';
                    $categories = get_categories();
                    if ($categories) {
                        foreach ($categories as $category) {
                            $result = in_array($category->term_id, $online_portfolio_selected_cat) ? 'selected=selected' : '';
                            $option .= '<option value="' . esc_attr($category->term_id) . '"' . esc_attr($result) . '>';
                            $option .= esc_html($category->cat_name);
                            $option .= esc_html(' (' . $category->category_count . ')');
                            $option .= '</option>';
                        }
                    }
                    echo $option;
                    ?>
                </select>
            </p>
            <hr>





            <?php

        }
    }
}

add_action('widgets_init', 'online_portfolio_our_work_widget');
function online_portfolio_our_work_widget()
{
    register_widget('Online_Portfolio_Our_Work_Widget');

}















