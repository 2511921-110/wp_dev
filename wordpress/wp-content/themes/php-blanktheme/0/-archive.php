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
            if(!empty($sticky)):
              $paged = (int) get_query_var('paged');
              // if ( !empty($sticky) ) $show -= count($sticky);
              $args = array(
                'paged' => $paged,
                'orderby' => 'date',
                'order' => 'DESC',
                'category_name' => $cat[0]->slug,
                'post_status' => 'publish',
                'post__in'  => $sticky,
              );
              $the_query = new WP_Query($args);
              if ( $the_query->have_posts() ) :
        ?>
              <?php	while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <?php get_template_part('post-content'); ?>
              <?php endwhile; else : ?>
                <div class="col-120">
                  <p>記事がありません</p>
                </div>
              <?php endif; ?>

              <?php wp_reset_postdata(); ?>
            <?php endif; ?>
          <?php endif; ?>

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
