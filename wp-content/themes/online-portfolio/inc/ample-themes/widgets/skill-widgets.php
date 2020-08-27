<?php
/**
 * Created by PhpStorm.
 * User: arjun
 * Date: 9/4/2017
 * Time: 1:47 AM
 */
if (!class_exists('Online_Portfolio_Skill_Widget')) {
    class Online_Portfolio_Skill_Widget extends WP_Widget
    {
        private function defaults()
        {
            $defaults = array(
                'title' => esc_html__('My Skill', 'online-portfolio'),
                'sub-title' => esc_html__('', 'online-portfolio'),

                'skill-value_First' => 100,
                'title_First' => esc_html__('HTML', 'online-portfolio'),

                'skill-value_Second' => 90,
                'title_Second' => esc_html__('CSS', 'online-portfolio'),

                'skill-value_Third' => 85,
                'title_Third' => esc_html__('Jquery', 'online-portfolio'),

                'skill-value_Fourth' => 95,
                'title_Fourth' => esc_html__('PHP', 'online-portfolio'),
                'features_background' => '',
                'section_image' => '',
                'section-id' =>'',

            );
            return $defaults;
        }

        public function __construct()
        {
            parent::__construct(
                'online-portfolio-skill-widget',
                esc_html__('AT : Skill Widget', 'online-portfolio'),
                array('description' => esc_html__('Business Skill Section', 'online-portfolio'))
            );
        }

        public function form($instance)
        {
            $instance = wp_parse_args((array )$instance, $this->defaults());
            $title1 = esc_attr($instance['title']);
            $subtitle = esc_attr($instance['sub-title']);
            $skills = array('First', 'Second', 'Third', 'Fourth');
            $section_id= esc_attr( $instance['section-id'] );

            $i = 0;
            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('section-id') ); ?>">
                    <?php esc_html_e( 'Section Id', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('section-id')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('section-id')); ?>" value="<?php echo $section_id; ?>">
            </p>
            <p><label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
                    <?php esc_html_e('Title', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('title')); ?>" class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('title')); ?>" value="<?php echo $title1; ?>">
            </p>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('sub-title')); ?>">
                    <?php esc_html_e('Sub Title', 'online-portfolio'); ?>
                </label><br/>
                <input type="text" name="<?php echo esc_attr($this->get_field_name('sub-title')); ?>" class="widefat"
                       id="<?php echo esc_attr($this->get_field_id('sub-title')); ?>" value="<?php echo $subtitle; ?>">
            </p>
            <?php
            foreach ($skills as $skillvalue) {
                $value = $instance['skill-value_' . $skillvalue];
                $title = $instance['title_' . $skillvalue];


                ?>


                <hr>
                <p>
                    <label
                        for="<?php echo esc_attr($this->get_field_id('skill-value_' . $skillvalue)); ?>"><strong><?php echo esc_html__($skillvalue . ' Skill Value in Number', 'online-portfolio'); ?></strong></label><br/>
                    <input type="number"
                           name="<?php echo esc_attr($this->get_field_name('skill-value_' . $skillvalue)); ?>"
                           class="widefat"
                           id="<?php echo esc_attr($this->get_field_id('skill-value_' . $skillvalue)); ?>"
                           value="<?php echo esc_attr($value); ?>"/>
                </p>
                <hr>

                <p>
                    <label
                        for="<?php echo esc_attr($this->get_field_id('title_' . $skillvalue)); ?>"><strong><?php echo esc_html__($skillvalue . '  Title of Skill', 'online-portfolio'); ?></strong></label><br/>
                    <input type="text" name="<?php echo esc_attr($this->get_field_name('title_' . $skillvalue)); ?>"
                           class="widefat" id="<?php echo esc_attr($this->get_field_id('title_' . $skillvalue)); ?>"
                           value="<?php echo esc_attr($title); ?>">
                </p>
                <hr>
                <?php
                $i++;
            }
            ?>

        <?php }

        public function update($new_instance, $old_instance)
        {
            $instance = $old_instance;
            $instance['title'] = sanitize_text_field($new_instance['title']);
            $instance['sub-title'] = sanitize_text_field($new_instance['sub-title']);
            $instance['section-id'] = sanitize_text_field($new_instance['section-id']);

            $skill = array('First', 'Second', 'Third', 'Fourth');
            foreach ($skill as $skill_value) {
                $instance['skill-value_' . $skill_value] = absint($new_instance['skill-value_' . $skill_value]);
                $instance['symbol_' . $skill_value] = sanitize_text_field($new_instance['symbol_' . $skill_value]);
                $instance['title_' . $skill_value] = sanitize_text_field($new_instance['title_' . $skill_value]);

            }
            $instance['features_background'] = esc_url_raw($new_instance['features_background']);

            return $instance;

        }

        public function widget($args, $instance)
        {
            if (!empty($instance)) {
                $instance = wp_parse_args((array)$instance, $this->defaults());
                $title1 = esc_html($instance['title']);
                $subtitle = esc_html($instance['sub-title']);
                $section_id = esc_attr($instance['section-id']);

                echo $args['before_widget'];
                ?>

                <!--==========================
	  Skills Section
	============================-->
                <Section id="<?php echo esc_html($section_id)?>"?>
                <div id="skills" class="skills">
                    <div class="container">

                        <header class="section-header">
                            <h3><?php echo esc_html( $title1);?></h3>
                            <p><?php  echo esc_html( $subtitle); ?></p>
                        </header>

                        <div class="skills-content row">


                            <?php
                            $count = 0;
                            $skill = array('First', 'Second', 'Third', 'Fourth');
                            foreach ($skill as $skill_value) {
                                $value = $instance['skill-value_' . $skill_value];
                                $title = $instance['title_' . $skill_value];


                                if (!empty($icon) && !empty($value) && !empty($title)) {
                                    $count = $count + 1;
                                }

                            }
                            foreach ($skill as $skill_value) {
                                $value = $instance['skill-value_' . $skill_value];
                                $title = $instance['title_' . $skill_value];
                                $colsm = "";
                                if (!empty($value) && !empty($title)) {
                                    if ($count == 4) {
                                        $colsm = 3;
                                    } elseif ($count == 3) {
                                        $colsm = 4;
                                    } elseif ($count == 2) {
                                        $colsm = 6;
                                    } elseif ($count == 1) {
                                        $colsm = 12;

                                    }
                                  
                                    ?>

                                    <div class="col-md-6">
                                        <span class="skill"><?php echo esc_html($title); ?> <i class="val"><?php echo esc_html($value); ?>%</i></span>
                                        <div class="progress">
                                            <div class="progress-bar <?php if($count==0){ echo 'bg-success'; }elseif($count==1){echo 'bg-warning';}elseif($count==2){ echo 'bg-danger';} else{echo 'bg-info';} ?> progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="<?php echo esc_html($value); ?>" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>




                                    <?php
                                }
                                $count = $count + 1;
                            }

                            ?>


                        </div>

                    </div>
                </div>
                </Section>
                
                
                
                
                


                <!--==========================
	  Skills Section
	============================-->
                <?php
                echo $args['after_widget'];
            }
        }

    }

}
add_action('widgets_init', 'online_portfolio_skill_widget');
function online_portfolio_skill_widget()
{
    register_widget('Online_Portfolio_Skill_Widget');

}

