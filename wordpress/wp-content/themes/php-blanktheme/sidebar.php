<?php if ( ! dynamic_sidebar( 'sidebar' ) ) : ?>

  <div class="sidebar mb-5 pb-5">
    <ul>
      <?php dynamic_sidebar(); ?>
    </ul>
  </div>

<?php else: ?>

  <div class="sidebar mb-5 pb-5">
    <ul>
      <?php dynamic_sidebar(); ?>
    </ul>
  </div>

<?php endif; // end sidebar widget area ?>
