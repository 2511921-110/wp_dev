<?php
$parent_cat_id = 3; // 任意の親カテゴリーID
$categories = get_term_children($parent_cat_id, 'category');
// array_push($categories, $parent_cat_id);
asort($categories);
$arg_categories = implode(",", $categories);
// echo $arg_categories; // 確認出力
  $args = array(
    'posts_per_page' => 3,
    'orderby' => 'post_date',
    'cat' => $arg_categories,
    'order' => 'DESC',
    'post_type' => 'post',
    'post_status' => 'publish'
  );
  $the_query = new WP_Query($args);
  if ( $the_query->have_posts() ) :
?>
<div class="row">
  <?php	while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
  <section class="col-120">
    <div class="module__post mb-3 pb-2">
      <div class="row">
        <div class="col-lg-87 col-120 order-2">
          <h3 class="module__post-title">
            <a href="<?php the_permalink(); ?>">
              <?php
                if(mb_strlen($post->post_title, 'UTF-8')>22){
                  $title= mb_substr(strip_tags($post->post_title), 0, 5, 'UTF-8');
                  echo $title.'……';
                }else{
                  echo $post->post_title;
                }
              ?>
            </a>
          </h3>
        </div>
        <div class="col-lg-20 col-30 order-1">
          <?php
            $cat = get_the_category();
            $cat_id = $cat[0]->term_id;
            $term_idsp = 'category_'.$cat_id;
            $bg = get_field('color', $term_idsp);
          ?>
          <div class="module__post-cat" <?php if($bg) echo 'style="background-color:' . $bg . '";' ?>>
            <?php echo $cat[0]->name; ?>
          </div>
        </div>
        <div class="col-lg-13 col-30 order-0">
          <time class="module__post-time mr-2"
            datetime="<?php the_time('Y-m-d'); ?>T<?php the_time('H:i:sP'); ?>"><?php the_time('Y.m.d'); ?></time>
        </div>
      </div>
    </div>
  </section>

  <?php endwhile;?>
</div>
<?php endif; ?>