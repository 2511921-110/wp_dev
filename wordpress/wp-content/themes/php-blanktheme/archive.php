<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="<?php echo is_dynamic_sidebar() ? 'col-lg-90 col-120' : 'col-120'; ?>">
      <main>
        <article id="post-<?php the_ID(); ?>" <?php post_class('row'); ?>>
          <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
          <?php get_template_part('post-content'); ?>
          <?php endwhile; else : ?>
          <div class="col-120">
            <p>記事がありません</p>
          </div>
          <?php endif; ?>

          <?php wp_reset_postdata(); ?>

          <div class="<?php echo is_dynamic_sidebar() ? 'col-120' : 'col-lg-80 col-120'; ?>">
            <div class="mt-3 mb-3 mb-lg-0">
              <?php
              pagination();
            ?>
            </div>
          </div>
          <?php if (!is_dynamic_sidebar()): ?>
          <div class="col-lg-40 col-120 mt-3 mb-5 mt-lg-0 mb-lg-0">
            <?php wp_dropdown_categories('show_count=1&show_option_none=カテゴリを選ぶ'); ?>

            <script type="text/javascript">
            <!--
            var dropdown = document.getElementById("cat");

            function onCatChange() {
              if (dropdown.options[dropdown.selectedIndex].value > 0) {
                location.href = "<?php echo get_option('home'); ?>/?cat=" + dropdown.options[dropdown.selectedIndex]
                  .value;
              }
            }
            dropdown.onchange = onCatChange;
            -->
            </script>
          </div>
          <?php endif; ?>
        </article>
      </main>
    </div>
    <?php if (is_dynamic_sidebar()): ?>
    <div class="offset-lg-3 col-lg-27 col-120">
      <aside>
        <?php get_sidebar(); ?>
      </aside>
    </div>
    <?php endif; ?>
  </div>
</div>

<?php get_footer(); ?>
