<?php
if (!class_exists('Online_Portfolio_Testimonials_Widget')) {
    class Online_Portfolio_Testimonials_Widget extends WP_Widget
    {

        private function defaults()
        {

            $defaults = array(
                'title' => esc_html__('Our Testimonials', 'online-portfolio'),
                'sub-title' => '',
                'resources' => '',
                'features_background' => '',
                'section-id' =>'',


            );
            return $defaults;
        }

        public function __construct()
        {
            parent::__construct(
                'business_testimonials_widget',
                esc_html__('AT : Testimonials Widget', 'online-portfolio'),
                array('description' => esc_html__('Business Testimonials Section', 'online-portfolio'))
            );
        }
        public function form( $instance )
        {
            $instance = wp_parse_args( (array ) $instance, $this->defaults() );
            $title = esc_attr( $instance['title'] );
            $resources   = ( ! empty( $instance['resources'] ) ) ? $instance['resources'] : array();
            $features_background   = esc_url( $instance['features_background'] );
            $section_id= esc_attr( $instance['section-id'] );


            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('section-id') ); ?>">
                    <?php esc_html_e( 'Section Id', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('section-id')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('section-id')); ?>" value="<?php echo $section_id; ?>">
            </p>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
                    <?php esc_html_e('Title', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title') ); ?>" value="<?php echo  esc_attr($title); ?>">
            </p>


            <span class="at-ample-additional">
            <!--repeater-->
            <label><?php _e( 'Select Pages', 'online-portfolio' ); ?>:</label>
            <br/>
            <small><?php _e( 'Add Page and Remove. Please do not forget to add Icon on selected pages.', 'online-portfolio' ); ?></small>

                <?php
                if  ( count( $resources ) >=  1 && is_array( $resources ) )
                {

                    $selected = $resources['main'];

                }

                else
                {
                    $selected = "";
                }

                $repeater_id   = $this->get_field_id( 'resources' ).'-main';
                $repeater_name = $this->get_field_name( 'resources'). '[main]';

                $args = array(
                    'selected'          => $selected,
                    'name'              => $repeater_name,
                    'id'                => $repeater_id,
                    'class'             => 'widefat pt-select',
                    'show_option_none'  => __( 'Select Page', 'online-portfolio'),
                    'option_none_value' => 0 // string
                );
                wp_dropdown_pages( $args );
                ?>

                <?php

                $counter = 0;

                if ( count( $resources ) > 0 )
                {
                    foreach( $resources as $resource )
                    {

                        if ( isset( $resource['page_ids'] ) )

                        { ?>
                            <div class="at-ample-sec">

                            <?php

                            $repeater_id     = $this->get_field_id( 'resources' ) .'-'. $counter.'-page_ids';
                            $repeater_name   = $this->get_field_name( 'resources' ) . '['.$counter.'][page_ids]';

                            $args = array(
                                'selected'          => $resource['page_ids'],
                                'name'              => $repeater_name,
                                'id'                => $repeater_id,
                                'class'             => 'widefat pt-select',
                                'show_option_none'  => __( 'Select Page', 'online-portfolio'),
                                'option_none_value' => 0 // string
                            );
                            wp_dropdown_pages( $args );
                            ?>
                                <a class="at-ample-remove delete"><?php esc_html_e('Remove Section','online-portfolio') ?></a>

                        </div>
                            <?php
                            $counter++;
                        }
                    }
                }

                ?>

            </span>
            <a class="at-ample-add button" data-id="online-portfolio_resource_widget" id="<?php echo  esc_attr( $repeater_id); ?>"><?php _e('Add New Section', 'online-portfolio'); ?></a>

            <hr/>


            <hr>
            <p>
                <label for="<?php echo $this->get_field_id('features_background'); ?>">
                    <?php _e( 'Select Background Image', 'online-portfolio' ); ?>:
                </label>
                <span class="img-preview-wrap" <?php  if ( empty( $features_background ) ){ ?> style="display:none;" <?php  } ?>>
                    <img class="widefat" src="<?php echo esc_url( $features_background ); ?>" alt="<?php esc_attr_e( 'Image preview', 'online-portfolio' ); ?>"  />
                </span><!-- .img-preview-wrap -->
                <input type="text" class="widefat" name="<?php echo $this->get_field_name('features_background'); ?>" id="<?php echo $this->get_field_id('features_background'); ?>" value="<?php echo esc_url( $features_background ); ?>" />
                <input type="button" id="custom_media_button"  value="<?php esc_attr_e( 'Upload Image', 'online-portfolio' ); ?>" class="button media-image-upload" data-title="<?php esc_attr_e( 'Select Background Image','online-portfolio'); ?>" data-button="<?php esc_attr_e( 'Select Background Image','online-portfolio'); ?>"/>
                <input type="button" id="remove_media_button" value="<?php esc_attr_e( 'Remove Image', 'online-portfolio' ); ?>" class="button media-image-remove" />
            </p>
            <?php
        }
        public function update($new_instance, $old_instance)
        {
            $instance = $old_instance;
            $instance['title'] = sanitize_text_field($new_instance['title']);
            $instance['sub-title'] = sanitize_text_field($new_instance['sub-title']);
            $instance['features_background'] = esc_url_raw($new_instance['features_background']);
            $instance['section-id'] = sanitize_text_field($new_instance['section-id']);


            if (isset($new_instance['resources']))
            {
                foreach($new_instance['resources'] as $resource){

                    $resource['page_ids'] = absint($resource['page_ids']);
                }
                $instance['resources'] = $new_instance['resources'];
            }
            return $instance;

        }
        public function widget($args, $instance)
        {

            if (!empty($instance)) {
                $instance = wp_parse_args((array )$instance, $this->defaults());
                $title = apply_filters('widget_title', !empty($instance['title']) ? esc_html($instance['title']) : '', $instance, $this->id_base);
                
                $resources = (!empty($instance['resources'])) ? $instance['resources'] : array();
                $features_background  = esc_url($instance['features_background']);
                $section_id = esc_attr($instance['section-id']);

                echo $args['before_widget'];
                ?>

            <section id="<?php echo esc_attr($section_id); ?>">

                <div id="testimonials" class="section-bg wow fadeInUp" style="background-image: url(<?php echo esc_url($features_background); ?>);">
                    <div class="container">

                        <header class="section-header">
                            <h3><?php echo esc_html($title); ?></h3>
                        </header>

                        <div class="owl-carousel testimonials-carousel">

                <?php if (isset($resources) && !empty($resources['main'])) { ?>
                    <?php
                    $post_in = array();

                    if (count($resources) > 0 && is_array($resources)) {

                        $post_in[0] = $resources['main'];

                        foreach ($resources as $our_resource) {

                            if (isset($our_resource['page_ids']) && !empty($our_resource['page_ids'])) {

                                $post_in[] = $our_resource['page_ids'];

                            }
                        }


                    }

                    if (!empty($post_in)) :
                        $resources_page_args = array(
                            'post__in' => $post_in,
                            'orderby' => 'post__in',
                            'posts_per_page' => count($post_in),
                            'post_type' => 'page',
                            'no_found_rows' => true,
                            'post_status' => 'publish'
                        );

                        $resources_query = new WP_Query($resources_page_args);

                        /*The Loop*/
                        if ($resources_query->have_posts()):
                            $i = 1;
                            while ($resources_query->have_posts()):$resources_query->the_post();

                                ?>

                            <div class="testimonial-item">
                                <?php
                                if (has_post_thumbnail()) {
                                    $image_id = get_post_thumbnail_id();
                                    $image_url = wp_get_attachment_image_src($image_id, 'medium', true);
                                    ?>
                                <img src="<?php echo esc_url($image_url[0]); ?>" class="testimonial-img" alt="<?php the_title_attribute(); ?>">
                                    <?php } ?>

                                <h3><?php the_title(); ?></h3>

                                <div class="testimonial-item--desc">
                                    <p>

                                        <?php echo esc_html(wp_trim_words(get_the_content(), 30)); ?>
                                    </p>

                                </div>
                            </div>

                                <?php
                            endwhile;
                        endif;
                        wp_reset_postdata();
                    endif;
                }
                ?>



                        </div>

                    </div>
                </div><!-- #testimonials -->
                </section>



                <?php
                echo $args['after_widget'];
            }
        }

    }
}

add_action('widgets_init', 'online_portfolio_testimonials_widget');
function online_portfolio_testimonials_widget()
{
    register_widget('Online_Portfolio_Testimonials_Widget');

}

