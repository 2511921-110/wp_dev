<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-lg-90 col-120">
      <main>
        <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <section class="col-120">
              <?php get_template_part('post-content'); ?>
            </section>
          <?php endwhile; else : ?>
            <div class="col-120">
              <p>記事がありません</p>
            </div>
          <?php endif; ?>

          <?php wp_reset_postdata(); ?>

          <div class="col-120">
            <?php
              pagination();
            ?>
          </div>
        </article>
        <!-- <?php get_template_part('post-vue'); ?> -->
      </main>
    </div>
    <div class="offset-lg-3 col-lg-27 col-120">
      <aside>
        <?php get_sidebar(); ?>
      </aside>
    </div>
  </div>
</div>

<?php get_footer(); ?>
