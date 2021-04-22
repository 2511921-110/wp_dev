<?php
/*
Template Name: 見積もりフォーム */
get_header(); ?>
<main>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-120">
              <div id="estimate">
                <?php the_title(); ?>
                <?php the_content(); ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php endwhile; endif; ?>
  </article>
</main>
<?php get_footer(); ?>
