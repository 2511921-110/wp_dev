<section class="col-lg-30 col-120">
  <div class="module__post module__post03 mb-3">
    <div class="module__post-img cover">
      <a href="<?php the_permalink(); ?>">
        <?php if (has_post_thumbnail()): ?>
        <?php the_post_thumbnail('medium'); ?>
        <?php else: ?>
        <img src="<?php echo get_template_directory_uri(); ?>/assets/blank.png" alt="">
        <?php endif; ?>
      </a>
    </div>
    <?php
              $cat = get_the_category();
              $cat_id = $cat[0]->term_id;
              $term_idsp = 'category_'.$cat_id;
              $bg = get_field('color', $term_idsp);
            ?>
    <div class="module__post-cat me-lg-2" <?php if ($bg) {
                echo 'style="background-color:' . $bg . '";';
            } ?>>
      <?php echo $cat[0]->name; ?>
    </div>
    <time class="module__post-time"
      datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
    <h3 class="module__post-title">
      <a href="<?php the_permalink(); ?>">
        <?php the_title(); ?>
      </a>
    </h3>
  </div>
</section>