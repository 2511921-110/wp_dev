<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-120">
      <main>
        <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <section class="col-120">
              <div class="post">
                <?php if(has_post_thumbnail()): ?>
                <div class="post__img">
                  <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('medium'); ?>
                  </a>
                </div>
                <?php endif; ?>
                <h3 class="post__title">
                  <a href="<?php the_permalink(); ?>">
                    <?php
                      //if(mb_strlen($post->post_title, 'UTF-8')>5){
                      //	$title= mb_substr($post->post_title, 0, 5, 'UTF-8');
                      //	echo $title.'……';
                      //}else{
                      //	echo $post->post_title;
                      //}
                      the_title(  );
                    ?>
                  </a>
                </h3>
                <time class="post__time" datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
                <div class="post__content">
                  <?php
                    // if(mb_strlen($post->post_content, 'UTF-8')>100){
                    // 	$content= mb_substr($post->post_content, 0, 100, 'UTF-8');
                    // 	echo $content.'……';
                    // }else{
                    // 	echo $post->post_content;
                    // }
                  ?>
                  <?php the_content(); ?>
                </div>
              </div>
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
      </main>
    </div>
    <div class="col-120">
      <aside>
        <?php //get_sidebar(); ?>
      </aside>
    </div>
  </div>
</div>

<?php get_footer(); ?>
