<?php get_header(); ?>

<?php
  $cat = get_the_category();
?>
<?php
  $list_cnt = get_option('posts_per_page'); //表示させたい件数
  $sticky = get_option('sticky_posts'); //先頭固定の記事
  if ( !empty($sticky) ) $list_cnt -= count($sticky); //もし先頭固定の記事があったら、その件数を「$list_cnt」の値から引く
    if ( count($sticky) > 0 ):
      $the_query = new WP_Query(array(
        'orderby' => 'date',
        'category_name' => $cat[0]->slug,
        'post__in' => $sticky,
      ));
?>
      <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <?php get_template_part('post-content'); ?>
      <?php endwhile; ?>
    <?php endif; ?>
    <?php if ( $list_cnt > 0 ): //先頭固定以外の記事の表示
      $the_query = new WP_Query(array(
        'posts_per_page' => $list_cnt,
        'category_name' => $cat[0]->slug,
        'orderby' => 'date',
        'ignore_sticky_posts' => 1,
        'post__not_in' => $sticky,
      ));?>
      <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <?php get_template_part('post-content'); ?>
      <?php endwhile; ?>
    <?php endif; ?>
    <?php wp_reset_postdata(); ?>
    <?php
      pagination();
    ?>
<?php get_footer(); ?>
