<?php get_header(); ?>
<?php
  $cat = get_the_category();
  $sticky = get_option('sticky_posts');
?>
<div class="container">
  <div class="row">
    <div class="col-120">
      <main>
        <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>

          <?php
          if (!is_paged()) :
            $list_cnt = get_option('posts_per_page'); //表示させたい件数
          ?>
          <!--「先頭に固定」する記事のみを取得-->
          <?php $parm_b = array(
            'posts_per_page' => $list_cnt,
            'category_name' => $cat[0]->slug,
            'post_type' => 'post',
            'post__in' => get_option( 'sticky_posts' )
          );
          $the_query = new WP_Query( $parm_b );?>
          <?php $posts = get_posts( $parm_b );?>
          <?php if ( $posts ) :?>
          <?php
          foreach ( $posts as $post ) :
          setup_postdata( $post ); ?>
          <!--「先頭に固定」の数を格納-->
          <?php $sentou=count($posts);?>
            <?php get_template_part('post-content'); ?>
          <?php endforeach; endif;?>
          <!--「先頭に固定」分を表示したい合計数(ここでは4)から引く-->
          <?php $list_count = $list_cnt-$sentou;?>
          <!--上で取得した数分だけ最新記事を取得する-->
          <?php
            $parm = array (
            'posts_per_page' => $list_count,
            'order' => 'DESC',
            'category_name' => $cat[0]->slug,
            //最新記事の配列から「先頭に固定」にした分を除外する
            'post__not_in' => get_option( 'sticky_posts' )
          );?>
          <?php $posts = get_posts( $parm ); ?>
          <?php if ( $posts ) :?>
          <?php
          foreach ( $posts as $post ) :
          setup_postdata( $post ); ?>
            <?php get_template_part('post-content'); ?>
          <?php endforeach; endif;?>
          <?php else: ?>
            <?php
            $args = array(
              'post__not_in' => $sticky,
              'category_name' => $cat[0]->slug,
            );
            $the_query = new WP_Query( $args );
            if ( $the_query->have_posts() ) :
              while ( $the_query->have_posts() ) : $the_query->the_post();
          ?>

                <?php get_template_part('post-content'); ?>
              <?php endwhile;?>
            <?php endif;?>
          <?php endif;?>

          <div class="col-120">
            <?php
              pagination();
            ?>
          </div>
        </article>
      </main>
    </div>
    <div class="col-120">
      <aside>
        <?php get_sidebar(); ?>
      </aside>
    </div>
  </div>
</div>
<?php get_footer(); ?>
