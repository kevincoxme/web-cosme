<?php
/**
 * Class for adding Contact Section Widget
 *
 * @package Acme Themes
 * @subpackage online_portfolio
 * @since 1.0.0
 */
if ( ! class_exists( 'Online_Portfolio_Contact' ) ) {

    class Online_Portfolio_Contact extends WP_Widget {
        /*defaults values for fields*/
        private $defaults = array(
            'title'         => '',
            'shortcode'     => '',
            'page_id'       => '',
            'section-id' =>'',
            

        );

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'online_portfolio_contact',
                /*Widget name will appear in UI*/
                __('AT : Contact Widgets', 'online-portfolio'),
                /*Widget description*/
                array( 'description' => __( 'Show Contact Section.', 'online-portfolio' ), )
            );
        }

        /*Widget Backend*/
        public function form( $instance ) {
            $instance = wp_parse_args( (array) $instance, $this->defaults );
            /*default values*/
            $title = esc_attr( $instance[ 'title' ] );
            $shortcode = esc_attr( $instance[ 'shortcode' ] );
            $page_id = absint( $instance[ 'page_id' ] );
            $section_id= esc_attr( $instance['section-id'] );


            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('section-id') ); ?>">
                    <?php esc_html_e( 'Section Id', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('section-id')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('section-id')); ?>" value="<?php echo $section_id; ?>">
            </p>

            <p>
                <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title', 'online-portfolio' ); ?>:</label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>" />
            </p>
            
            
            <p>
                <label for="<?php echo $this->get_field_id( 'shortcode' ); ?>"><?php _e( 'Enter Shortcode', 'online-portfolio' ); ?>:</label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'shortcode' ); ?>" name="<?php echo $this->get_field_name( 'shortcode' ); ?>" type="text" value="<?php echo $shortcode; ?>" />
                <small>
                    <?php
                    printf( __( 'Download contact form 7 from %1$shere%2$s', 'online-portfolio' ), "<a target='_blank' href='".esc_url( 'https://wordpress.org/plugins/contact-form-7/' )."''>","</a>" );
                    ?>
                </small>
            


            <?php
        }
        /**
         * Function to Updating widget replacing old instances with new
         *
         * @access public
         * @since 1.0.0
         *
         * @param array $new_instance new arrays value
         * @param array $old_instance old arrays value
         * @return array
         *
         */
        public function update( $new_instance, $old_instance ) {
            $instance = $old_instance;
            $instance[ 'title' ] = sanitize_text_field( $new_instance[ 'title' ] );
            $instance[ 'shortcode' ] = wp_kses_post( $new_instance[ 'shortcode' ] );

            $instance['section-id'] = sanitize_text_field($new_instance['section-id']);



            return $instance;
        }
        public function widget($args, $instance)
        {
            $instance = wp_parse_args((array)$instance, $this->defaults);
            $title = apply_filters('widget_title', !empty($instance['title']) ? $instance['title'] : '', $instance, $this->id_base);
            $shortcode = wp_kses_post($instance['shortcode']);

            $section_id = esc_attr($instance['section-id']);



            echo $args['before_widget'];
            ?>





            <section id="<?php echo esc_attr($section_id); ?>">

                <div id="faq" class="section-bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="faq-box">
                                    <div class="section-header wow fadeInUp">
                                        <h3><?php echo esc_html($title);?></h3>
                                    </div>

                                    <div id="accordion" class=" wow fadeInUp">

                                        <?php echo do_shortcode( $shortcode ); ?>

                                    </div>

                                </div>

                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <?php echo $args['after_widget']; ?>
            
            <!-- End innerpage content site -->
            <?php
        }
    } // Class online_portfolio_contact ends here
}
/**
 * Function to Register and load the widget
 *
 * @since 1.0.0
 *
 * @param null
 * @return null
 *
 */
if ( ! function_exists( 'online_portfolio_contact' ) ) :

    function online_portfolio_contact() {
        register_widget( 'Online_Portfolio_Contact' );
    }
endif;
add_action( 'widgets_init', 'online_portfolio_contact' );