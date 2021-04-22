<?php get_header();?>
<!-- layout -->
<div id="layout" class="pagewidth tf_clearfix">
    <!-- content -->
    <?php themify_content_before(); //hook ?>
    <main id="content" class="tf_clearfix">
	<?php themify_page_output(); ?>
    </main>
    <?php themify_content_after(); //hook ?>
    <!-- /#content -->
    <?php themify_get_sidebar(); ?>
</div>
<!-- /#layout -->
<?php get_footer(); 