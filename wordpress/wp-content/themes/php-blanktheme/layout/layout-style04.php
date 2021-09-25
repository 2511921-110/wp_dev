<section class="col-120">
  <div class="module__post module__post03 mb-3">
    <time class="module__post-time"
      datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
    <h3 class="module__post-title">
      <a href="<?php the_permalink(); ?>">
        <?php the_title(); ?>
      </a>
    </h3>
    <div class="module__post-content">
      <?php the_content(); ?>
    </div>
    <?php
              $cat = get_the_category();
            ?>
    <div class="module__post-cat">
      Category：<?php echo $cat[0]->name; ?>
    </div>
  </div>
</section>