<?php get_header(); ?>
<main>
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php echo do_shortcode('[showcatpostsfix cat="16" show="10"]'); ?>
      <div>
        <?php the_title(); ?>
        <?php the_content(); ?>
      </div>
    <?php endwhile; endif; ?>
  </article>
</main>
<?php get_footer(); ?>
