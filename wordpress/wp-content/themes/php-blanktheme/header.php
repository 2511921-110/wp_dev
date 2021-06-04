<!DOCTYPE html>
<html <?php language_attributes(); ?>>

  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php
  if(get_option('home_image_url')){
    echo '<link rel="icon" type="image/png" href="' . get_option('home_image_url') . '">';
  }
?>
    <title><?php wp_title('｜',true,'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>

    <?php
  if(get_option('home_image_url')){
    echo '<div id="js-loader" class="loader"><img src="' . get_option('home_image_url') . '" ></div>';
  }
?>
    <header id="header">
      <?php
      $args = array( 'pagename' => 'home/header' );
      $the_query = new WP_Query( $args );
        while ( $the_query->have_posts() ) : $the_query->the_post();
      $post_id = get_the_ID();
      the_content();
      endwhile;
      wp_reset_postdata();
    ?>
      <div class="navwrap">
        <div class="menu__btnwrap">
          <span class="spmenu_btn"><span></span></span>MENU
        </div>
        <nav class="globalNav">
          <?php wp_nav_menu( array( 'menu' => 'globalNav' ) ); ?>
        </nav>
      </div>
    </header><!-- /header -->
    <?php
  if(is_front_page()|| is_home()):
    echo '<div class="main__img j_slider">';
    if(wp_is_mobile()){
      $slider = get_field('slider__sp');
      if($slider['img01'] || $slider['img02']){
        $slider = get_field('slider__sp');
      }else{
        $slider = get_field('slider__pc');
      }
    }else{
      $slider = get_field('slider__pc');
    }
  ?>
    <?php if($slider): ?>
    <div class="slider">
      <?php foreach($slider as $k => $v): ?>
      <div class="slide_item"><img src="<?php echo $v; ?>"></div>
      <?php endforeach; ?>
    </div>
    <?php endif; ?>
    </div> <!-- main__img -->
    <?php elseif(is_page()): ?>
    <?php
      if(has_post_thumbnail()){
        echo '<div class="main__img-img">';
        the_post_thumbnail('full');
        echo '</div>';
      }
    ?>
    <!-- <div class="main__eye">
      <div class="container px-0">
        <div class="row no-gutters align-items-center">
          <div class="col-120">
            <div class="main__eye-inner" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');">
              <h2 class="title__page title__large mincho"><?php the_title(); ?></h2>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="breadcrumb">
      <ul>
        <?php //breadcrumb(); ?>
      </ul>
    </div> -->
    <?php elseif(is_archive()): ?>
    <div class="maintitle">
      <h2 class="maintitle__text">
        <?php if(is_month()): ?>
        <?php wp_title(); ?>
        <?php else: ?>
        <?php echo get_current_term()->name; ?>
        <?php endif; ?>
      </h2>
    </div>
    <?php endif; ?>