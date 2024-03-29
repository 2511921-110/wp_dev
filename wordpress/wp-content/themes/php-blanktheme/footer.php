	<footer>
	  <?php
            $args = array( 'pagename' => 'home/footer' );
            $the_query = new WP_Query($args);
            while ($the_query->have_posts()) : $the_query->the_post();
            $post_id = get_the_ID();
        ?>
	  <?php the_content(); ?>
	  <?php
            endwhile;
            wp_reset_postdata();
        ?>
	  <?php if (!wp_is_mobile()): ?>
	  <div class="cm_totop"><a href="#header"><span> <i class="fas fa-angle-double-up"></i> </span>TO TOP</a></div>
	  <?php endif; ?>

	  <?php
            if (wp_is_mobile()):
            $page_id = get_page_by_path('home/footer');
            $left = get_field('left', $page_id -> ID);
            $center = get_field('center', $page_id -> ID);
            $right = get_field('right', $page_id -> ID);
        ?>
	  <div class="sp__fixed">
	    <?php if (is_array($left)): ?>
	    <a href="<?php echo $left['link']['url']; ?>">
	      <?php echo $left['icon']; ?><?php echo $left['text']; ?>
	    </a>
	    <?php endif; ?>
	    <?php if (is_array($center)): ?>
	    <a href="<?php echo $center['link']['url']; ?>">
	      <?php echo $center['icon']; ?><?php echo $center['text']; ?>
	    </a>
	    <?php endif; ?>
	    <?php if (is_array($right)): ?>
	    <a href="<?php echo $right['link']; ?>">
	      <?php echo $right['icon']; ?><?php echo $right['text']; ?>
	    </a>
	    <?php endif; ?>
	  </div>
	  <?php endif; ?>
	</footer>
	<script defer>
window.addEventListener('load', function() {
  jQuery(document).ready(function($) {
    var pagetop = $('.cm_totop');
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        pagetop.fadeIn('slow');
      } else {
        pagetop.fadeOut('slow');
      }
    });

    $('a[href^=#]').click(function() {
      var speed = 500;
      var href = $(this).attr('href');
      var target = $(href == '#' || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('html, body').animate({
        scrollTop: position
      }, speed, 'swing');
      return false;
    });
  });
}, false);
var THEME_URL = "<?php echo get_template_directory_uri() ?>";
var BASEURL = "<?php echo home_url('/wp-json/wp/v2/') ?>";
var HOMEURL = "<?php echo home_url() ?>";
var dateFormat = "<?php echo get_option('date_format') ?>";
<?php if (is_front_page() && is_home()): ?>
var rest = "posts/"
var id = "<?php echo get_the_ID(); ?>";
<?php elseif (is_front_page()): ?>
var rest = "pages/"
var id = "<?php echo get_the_ID(); ?>";
<?php elseif (is_home()): ?>
var rest = "posts/"
var id = "<?php echo get_the_ID(); ?>";
<?php elseif (is_page()): ?>
var rest = "pages/"
var id = "<?php echo get_the_ID(); ?>";
<?php else: ?>
var rest = "posts/"
var id = "<?php echo get_the_ID(); ?>";
<?php endif; ?>
	</script>
	<?php wp_footer(); ?>
	<script>
window.MSInputMethodContext && document.documentMode && document.write(
  '<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>'
  );
	</script>

	</body>

	</html>