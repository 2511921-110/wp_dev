<section class="col-120">
  <div class="module__post module__post01 mb-3">
    <div class="d-lg-flex">
      <div class="d-flex align-items-center">
        <time class="module__post-time me-lg-2"
          datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
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
      </div>
      <h3 class="module__post-title mb-0">
        <a href="<?php the_permalink(); ?>">
          <?php the_title(); ?>
        </a>
      </h3>
    </div>
  </div>
</section>