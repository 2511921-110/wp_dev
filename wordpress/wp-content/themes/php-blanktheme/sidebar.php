<?php if (! is_dynamic_sidebar()) : ?>

<div class="sidebar mb-5 pb-5">
  <ul>
    <h3 class="title">ないよ</h3>
  </ul>
</div>

<?php else: ?>

<div class="sidebar mb-5 pb-5">
  <ul>
    <li>
      <?php dynamic_sidebar(); ?>
    </li>
  </ul>
</div>

<?php endif; // end sidebar widget area?>