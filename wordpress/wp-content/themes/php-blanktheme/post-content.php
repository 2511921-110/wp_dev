<section class="col-120">
  <div class="module__post">
    <?php if(has_post_thumbnail()): ?>
    <div class="module__post-img">
      <a href="<?php the_permalink(); ?>">
        <?php the_post_thumbnail('medium'); ?>
      </a>
    </div>
    <?php endif; ?>
    <h3 class="module__post-title">
      <a href="<?php the_permalink(); ?>">
        <?php
          //if(mb_strlen($post->post_title, 'UTF-8')>5){
          //	$title= mb_substr(strip_tags($post->post_title), 0, 5, 'UTF-8');
          //	echo $title.'……';
          //}else{
          //	echo $post->post_title;
          //}
          the_title(  );
        ?>
      </a>
    </h3>
    <time class="module__post-time" datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
    <div class="module__post-content">
      <?php
        if(mb_strlen($post->post_content, 'UTF-8')>100){
        	$content= mb_substr(strip_tags($post->post_content), 0, 100, 'UTF-8');
        	echo $content.'……';
        }else{
        	echo $post->post_content;
        }
      ?>
    </div>
  </div>
</section>
