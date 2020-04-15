<?php get_header(); ?>

<?php if(have_posts()) : while (have_posts()) : the_post(); ?>
<figure class="single__post-img"><?php the_post_thumbnail('medium'); ?></figure>
<time class="single__post-time" datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
<h1 class="single__post-title"><?php the_title(); ?></h1>
<div class="single__post-content"><?php the_content(); ?></div>
<?php endwhile; endif; ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
