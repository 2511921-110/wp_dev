<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-120">
      <main>
        <article>
          <?php if(have_posts()) : while (have_posts()) : the_post(); ?>
            <figure class="single__post-img">
              <?php the_post_thumbnail('medium'); ?>
            </figure>
            <time class="single__post-time" datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
            <h3 class="single__post-title"><?php the_title(); ?></h3>
            <div class="single__post-content"><?php the_content(); ?></div>
          <?php endwhile; endif; ?>
        </article>
      </main>
    </div>
    <div class="col-120">
      <?php get_sidebar(); ?>
    </div>
  </div>
</div>



<?php get_footer(); ?>
