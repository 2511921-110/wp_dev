<?php

// wp_enqueue_script('jquery');
function change_editor_default( $editor ) {
  $editor = 'tinymce';
  return $editor;
}
add_filter( 'wp_default_editor', 'change_editor_default' );

//画像のサイズ追加
add_image_size('square__large', 600, 600, true);

// add_editor_style('css/style.css');
// add_editor_style('style.css');
add_filter('editor_stylesheets', 'editor_stylesheets_custom_demo');
function editor_stylesheets_custom_demo($stylesheets)
{
    //$stylesheets配列に対してフルパスでCSSファイルURLを指定する

    //$stylesheets配列の最後に読み込む順番でファイルパスを追加していく
    array_push($stylesheets,
    get_template_directory_uri().'/css/bootstrap-grid.css',
    // get_template_directory_uri().'/css/editor-style.css',
    get_template_directory_uri().'/css/style.css',
    get_template_directory_uri().'/style.css'
  );
    //読み込むCSSファイル配列は返り値として返す
    return $stylesheets;
}

//headerで読み込むCSS
if (!is_admin()) {
    function add()
    {
        define('TEMPLATE_DIRE', get_template_directory_uri());
        define('TEMPLATE_PATH', get_template_directory());
        function wp_css($css_name, $file_path)
        {
            wp_enqueue_style($css_name, TEMPLATE_DIRE.$file_path, array(), date('YmdGis', filemtime(TEMPLATE_PATH.$file_path)));
        }
        function wp_script($script_name, $file_path, $bool = true)
        {
            wp_enqueue_script($script_name, TEMPLATE_DIRE.$file_path, array('jquery'), date('YmdGis', filemtime(TEMPLATE_PATH.$file_path)), $bool);
        }
        //以下のように使う
        wp_script('js', '/js/bundle.js');
        wp_css('bootstrap', '/css/bootstrap-grid.css');
        wp_css('css_style', '/css/style.css');
        wp_css('common_style', '/style.css');
    }
    add_action('wp_enqueue_scripts', 'add', 1);
}

//コンテンツのimgパスを置き換える
function imagepassshort($arg)
{
    $content = str_replace('"assets/', '"'.get_bloginfo('template_directory').'/assets/', $arg);

    return $content;
}
add_action('the_content', 'imagepassshort');

//コンテンツ内のリンクパスを置き換える
function urlpassshort($arg)
{
    $content = str_replace('"home_url/', '"'.get_bloginfo('url').'/', $arg);

    return $content;
}
add_action('the_content', 'urlpassshort');

//ショートコードで投稿を取得する
/*
使い方は投稿の編集画面内で
[showcatpostsfix cat="1" show="3"]
とする。
*/
function show_Cat_Posts_fix_func($atts)
{
    global $post;
    $output = '';

    extract(shortcode_atts(array(
        'cat' => 3, // デフォルトカテゴリーID = 3
        'show' => 3, // デフォルト表示件数 = 3
    ), $atts));

    $cat = rtrim($cat, ',');
    // get_postsで指定カテゴリーの記事を指定件数取得
    $sticky = get_option('sticky_posts');
    if ( !empty($sticky) ) $show -= count($sticky);
    $sticky_args = array(
      'cat' => $cat,
      // 'posts_per_page' => $show,
      'post__in' => $sticky,
    );
    $args = array(
        'cat' => $cat,
        'posts_per_page' => $show,
    );
    if ( count($sticky) > 0 ){
      $sticky_posts = get_posts($sticky_args);
    }
    $my_posts = get_posts($args);

    // 上記条件の投稿があるなら$outputに出力、マークアップはお好みで
    if ($sticky) {
      // カテゴリーを配列に
      $cat2 = explode(',', $cat);
      $catnames2 = '';
      foreach ($cat2 as $catID) : // カテゴリー名取得ループ
          $catnames2 .= get_the_category_by_ID($catID).', ';
      endforeach;
      $catnames2 = rtrim($catnames2, ', ');
      $output .= '<div class="module__posts">'."\n";
      foreach ($sticky_posts as $post) : // ループスタート
      $post_id = get_the_id();
      $thumb_id = get_post_thumbnail_id($post_id);
      $thumb_img = wp_get_attachment_image_src($thumb_id, 'medium');
      setup_postdata($post); // get_the_title() などのテンプレートタグを使えるようにする
      $output .= '<div id="post-'.get_the_ID().'" class="module__post-item">';
      if (has_post_thumbnail($post_id)) {
          $output .= '<div class="module__post-img"><img src="'.$thumb_img[0].'" alt="'.get_the_title().'"></div>';
      }
      $output .= '<div class="module__post-date">'.get_the_date().'</div><div class="module__post-title"><a href="'.get_permalink().'">'.get_the_title()."</a></div><div>カテゴリー：".$catnames2 ."</div></div>\n";
      endforeach; // ループ終わり
      $output .= "</div>\n";
      //$output .= "</aside>\n";
    }
    if($show > 0){
      if ($my_posts) {
          // カテゴリーを配列に
          $cat = explode(',', $cat);
          $catnames = '';
          foreach ($cat as $catID) : // カテゴリー名取得ループ
              $catnames .= get_the_category_by_ID($catID).', ';
          endforeach;
          $catnames = rtrim($catnames, ', ');

          /*$output .= '<aside class="showcatposts">'."\n";
          $output .= '<h2 class="showcatposts-title">カテゴリー「'.$catnames.'」'."の最新記事（".$show."件）</h2>\n";*/
          $output .= '<div class="module__posts">'."\n";
          foreach ($my_posts as $post) : // ループスタート
          $post_id = get_the_id();
          $thumb_id = get_post_thumbnail_id($post_id);
          $thumb_img = wp_get_attachment_image_src($thumb_id, 'medium');
          setup_postdata($post); // get_the_title() などのテンプレートタグを使えるようにする
          $output .= '<div id="post-'.get_the_ID().'" class="module__post-item">';
          if (has_post_thumbnail($post_id)) {
              $output .= '<div class="module__post-img"><img src="'.$thumb_img[0].'" alt="'.get_the_title().'"></div>';
          }
          $output .= '<div class="module__post-date">'.get_the_date().'</div><div class="module__post-title"><a href="'.get_permalink().'">'.get_the_title()."</a></div><div>カテゴリー：".$catnames ."</div></div>\n";
          endforeach; // ループ終わり
          $output .= "</div>\n";
          //$output .= "</aside>\n";
      }
    }
    // クエリのリセット
    wp_reset_postdata();

    return $output;
}
add_shortcode('showcatpostsfix', 'show_Cat_Posts_fix_func');

//ショートコードで投稿を取得する
/*
使い方は投稿の編集画面内で
[showcatposts cat="1" show="3"]
とする。
*/
function show_Cat_Posts_func($atts)
{
    global $post;
    $output = '';

    extract(shortcode_atts(array(
        'cat' => 3, // デフォルトカテゴリーID = 3
        'show' => 3, // デフォルト表示件数 = 3
    ), $atts));

    $cat = rtrim($cat, ',');
    // get_postsで指定カテゴリーの記事を指定件数取得
    $args = array(
        'cat' => $cat,
        'posts_per_page' => $show,
    );
    $my_posts = get_posts($args);

    // 上記条件の投稿があるなら$outputに出力、マークアップはお好みで
    if ($my_posts) {
        // カテゴリーを配列に
        $cat = explode(',', $cat);
        $catnames = '';
        foreach ($cat as $catID) : // カテゴリー名取得ループ
            $catnames .= get_the_category_by_ID($catID).', ';
        endforeach;
        $catnames = rtrim($catnames, ', ');

        /*$output .= '<aside class="showcatposts">'."\n";
        $output .= '<h2 class="showcatposts-title">カテゴリー「'.$catnames.'」'."の最新記事（".$show."件）</h2>\n";*/
        $output .= '<div class="module__posts">'."\n";
        foreach ($my_posts as $post) : // ループスタート
        $post_id = get_the_id();
        $thumb_id = get_post_thumbnail_id($post_id);
        $thumb_img = wp_get_attachment_image_src($thumb_id, 'medium');
        setup_postdata($post); // get_the_title() などのテンプレートタグを使えるようにする
        $output .= '<div id="post-'.get_the_ID().'" class="module__post-item">';
        if (has_post_thumbnail($post_id)) {
            $output .= '<div class="module__post-img"><img src="'.$thumb_img[0].'" alt="'.get_the_title().'"></div>';
        }
        $output .= '<div class="module__post-date">'.get_the_date().'</div><div class="module__post-title"><a href="'.get_permalink().'">'.get_the_title()."</a></div></div>\n";
        endforeach; // ループ終わり
        $output .= "</div>\n";
        //$output .= "</aside>\n";
    }
    // クエリのリセット
    wp_reset_postdata();

    return $output;
}
add_shortcode('showcatposts', 'show_Cat_Posts_func');


// 日付アーカイブ title 変更
function jp_date_archive_wp_title( $title ) {
	if ( is_date() ) {
		$title = '';
		if ( $y = intval(get_query_var('year')) )
			$title .= sprintf('%4d年', $y);
		if ( $m = intval(get_query_var('monthnum')) )
			$title .= sprintf('%02d月', $m);
		if ( $d = intval(get_query_var('day')) )
			$title .= sprintf('%02d日', $d);
		$title .= ' | ';
	}
	return $title;
}
add_filter( 'wp_title', 'jp_date_archive_wp_title', 1 );


//headerの不要なタグを消す
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'wp_shortlink_wp_head');
// Since 4.4
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'rest_output_link_wp_head');
//add_filter( 'author_rewrite_rules', '__return_empty_arr

//pagination
function pagination($pages = '', $range = 2)
{
    $showitems = ($range * 2) + 1; //表示するページ数（５ページを表示）

    global $paged; //現在のページ値
    if (empty($paged)) {
        $paged = 1;
    } //デフォルトのページ

    if ($pages == '') {
        global $wp_query;
        $pages = $wp_query->max_num_pages; //全ページ数を取得
         if (!$pages) {//全ページ数が空の場合は、１とする
             $pages = 1;
         }
    }

    if (1 != $pages) {//全ページが１でない場合はページネーションを表示する
        echo "<div class=\"pagination\">\n";
        echo "<ul>\n";
        //Prev：現在のページ値が１より大きい場合は表示
        if ($paged > 1) {
            echo "<li class=\"prev\"><a href='".get_pagenum_link($paged - 1)."'>Prev</a></li>\n";
        }

        for ($i = 1; $i <= $pages; ++$i) {
            if (1 != $pages && (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) || $pages <= $showitems)) {
                //三項演算子での条件分岐
                echo ($paged == $i) ? '<li class="active">'.$i."</li>\n" : "<li><a href='".get_pagenum_link($i)."'>".$i."</a></li>\n";
            }
        }
        //Next：総ページ数より現在のページ値が小さい場合は表示
        if ($paged < $pages) {
            echo '<li class="next"><a href="'.get_pagenum_link($paged + 1)."\">Next</a></li>\n";
        }
        echo "</ul>\n";
        echo "</div>\n";
    }
}

//スマホ表示分岐
function is_mobile()
{
    $useragents = array(
    'iPhone', // iPhone
    'iPod', // iPod touch
    'Android.*Mobile', // 1.5+ Android *** Only mobile
    'Windows.*Phone', // *** Windows Phone
    'dream', // Pre 1.5 Android
    'CUPCAKE', // 1.5+ Android
    'blackberry9500', // Storm
    'blackberry9530', // Storm
    'blackberry9520', // Storm v2
    'blackberry9550', // Storm v2
    'blackberry9800', // Torch
    'webOS', // Palm Pre Experimental
    'incognito', // Other iPhone browser
    'webmate', // Other iPhone browser
  );
    $pattern = '/'.implode('|', $useragents).'/i';

    return preg_match($pattern, $_SERVER['HTTP_USER_AGENT']);
}

register_nav_menus();
register_sidebar(array(
  'id' => 'sidebar-1',
));
add_theme_support('post-thumbnails');

add_filter('post_thumbnail_html', 'custom_attribute');
function custom_attribute($html)
{
    // width height を削除する
    $html = preg_replace('/(width|height)="\d*"\s/', '', $html);

    return $html;
}

//scriptにasyncを追加
if (!(is_admin())) {
    function add_async_to_enqueue_script($url)
    {
        if (false === strpos($url, '.js')) {
            return $url;
        }
        if (strpos($url, 'jquery')) {
            return $url;
        }

        return "$url' async charset='UTF-8";
    }
    add_filter('clean_url', 'add_async_to_enqueue_script', 11, 1);
}

//TinyMCE Advanceにスタイルを追加
function plugin_mce_css($mce_css)
{
    if (!empty($mce_css)) {
        $mce_css .= ',';
    }

    // $font_url = get_stylesheet_directory_uri().'/editor-style.css';
    // $mce_css .= str_replace(',', '%2C', $font_url);

    return $mce_css;
}
add_filter('mce_css', 'plugin_mce_css');
//add_editor_style('editor-style.css');
function my_mce4_options($init)
{
    $default_colors = '
  "000000", "Black",
  "993300", "Burnt orange",
  "333300", "Dark olive",
  "003300", "Dark green",
  "003366", "Dark azure",
  "000080", "Navy Blue",
  "333399", "Indigo",
  "333333", "Very dark gray",
  "800000", "Maroon",
  "FF6600", "Orange",
  "808000", "Olive",
  "008000", "Green",
  "008080", "Teal",
  "0000FF", "Blue",
  "666699", "Grayish blue",
  "808080", "Gray",
  "FF0000", "Red",
  "FF9900", "Amber",
  "99CC00", "Yellow green",
  "339966", "Sea green",
  "33CCCC", "Turquoise",
  "3366FF", "Royal blue",
  "800080", "Purple",
  "999999", "Medium gray",
  "FF00FF", "Magenta",
  "FFCC00", "Gold",
  "FFFF00", "Yellow",
  "00FF00", "Lime",
  "00FFFF", "Aqua",
  "00CCFF", "Sky blue",
  "993366", "Brown",
  "C0C0C0", "Silver",
  "FF99CC", "Pink",
  "FFCC99", "Peach",
  "FFFF99", "Light yellow",
  "CCFFCC", "Pale green",
  "CCFFFF", "Pale cyan",
  "99CCFF", "Light sky blue",
  "CC99FF", "Plum",
  "FFFFFF", "White"
  ';
    $custom_colors = '
  "ce2c17", "独自red",
  "3c258d", "独自blue",
  "ff5c86", "独自pink",
  "ef3e00", "独自オレンジ",
  "59ab95", "独自グリーン",
  "48a722", "独自yグリーン",
  "00d96e", "独自Eグリーン",
  "2eacad", "独自mグリーン",
  "69c0f6", "独自skyblue",
  "624525", "brown"
  ';
    $style_formats = array(
  array(
    'title' => '余白無し',
    'block' => 'p',
    'classes' => 'mb0',
  ),
  array(
    'title' => '太文字',
    'inline' => 'b',
  ),
);
    $init['style_formats'] = json_encode($style_formats);
    $init['textcolor_map'] = '['.$default_colors.','.$custom_colors.']';
    $init['textcolor_rows'] = 6; // 色を最大何行まで表示させるか
$init['textcolor_cols'] = 10; // 色を最大何列まで表示させるか
$init['fontsize_formats'] = '10px 11px 12px 13px 14px 15px 16px 17px 18px 19px 20px 21px 22px 23px 24px 25px 26px 27px 28px 29px 30px 32px 33px 35px 38px 40px 46px';

    $init['body_class'] = 'editor-area';

    return $init;
}
add_filter('tiny_mce_before_init', 'my_mce4_options');

/*----------------------------------------
  エディタへのスタイル反映
----------------------------------------*/
function add_editor_style_cb()
{
    // add_editor_style();
    add_editor_style(array('css/editor-style.css', 'css/style.css', 'style.css'));
}
add_action('admin_init', 'add_editor_style_cb');
/*----------------------------------------------------------
  TinyMCE Advanceにスタイルを追加
----------------------------------------------------------*/
function _my_tinymce($initArray)
{
    $style_formats = array(
    array(
      'title' => 'text:small',
      'inline' => 'span',
      'classes' => 'text-small',
    ),
    array(
      'title' => 'text:large',
      'inline' => 'span',
      'classes' => 'text-large',
    ),
    array(
      'title' => 'marker:yellow',
      'inline' => 'span',
      'classes' => 'marker-yellow',
    ),
    array(
      'title' => 'marker:pink',
      'inline' => 'span',
      'classes' => 'marker-pink',
    ),
    array(
      'title' => 'marker:water',
      'inline' => 'span',
      'classes' => 'marker-water',
    ),
    array(
      'title' => 'marker:lime',
      'inline' => 'span',
      'classes' => 'marker-lime',
    ),
    array(
      'title' => 'box:title',
      'block' => 'p',
      'classes' => 'box-title',
    ),
    array(
      'title' => 'box:water',
      'block' => 'div',
      'classes' => 'box box-water',
      'wrapper' => true,
    ),
    array(
      'title' => 'box:red',
      'block' => 'div',
      'classes' => 'box box-red',
      'wrapper' => true,
    ),
    array(
      'title' => 'box:gray',
      'block' => 'div',
      'classes' => 'box box-gray',
      'wrapper' => true,
    ),
    array(
      'title' => 'box:green',
      'block' => 'div',
      'classes' => 'box box-lime',
      'wrapper' => true,
    ),
  );
    $initArray['style_formats'] = json_encode($style_formats);

    return $initArray;
}
add_filter('tiny_mce_before_init', '_my_tinymce', 10000);

/*
* shortcodeがpタグに囲まれるfix
*/
function shortcode_empty_paragraph_fix($content)
{
    $array = array(
    '<p>[' => '[',
    ']</p>' => ']',
    ']<br />' => ']',
  );
    $content = strtr($content, $array);

    return $content;
}

//カテゴリーの順番が変わらないようにする
function wp_category_terms_checklist_repair($args, $post_id = null)
{
    $args['checked_ontop'] = false;

    return $args;
}
add_action('wp_terms_checklist_args', 'wp_category_terms_checklist_repair');

//START 画像の自動指定停止
add_filter('image_send_to_editor', 'remove_image_attribute', 10);
add_filter('post_thumbnail_html', 'remove_image_attribute', 10);
function remove_image_attribute($html)
{
    $html = preg_replace('/(width|height)="\d*"\s/', '', $html);
    // $html = preg_replace('/class=[\'"]([^\'"]+)[\'"]/i', '', $html);

    return $html;
}
//END 画像の自動指定停止

//tableを編集した場合のwidthを削除
function customize_tinymce_settings($mceInit)
{
    $mceInit['table_resize_bars'] = false;
    $mceInit['object_resizing'] = 'img';

    return $mceInit;
}
add_filter('tiny_mce_before_init', 'customize_tinymce_settings', 0);

//テーマの画像フォルダへのパス
function get_at()
{
    return get_template_directory_uri().'/assets/';
}

/*
    アーカイブページで現在のカテゴリー・タグ・タームを取得する
*/
function get_current_term()
{
    $id;
    $tax_slug;

    if (is_category()) {
        $tax_slug = 'category';
        $id = get_query_var('cat');
    } elseif (is_tag()) {
        $tax_slug = 'post_tag';
        $id = get_query_var('tag_id');
    } elseif (is_tax()) {
        $tax_slug = get_query_var('taxonomy');
        $term_slug = get_query_var('term');
        $term = get_term_by('slug', $term_slug, $tax_slug);
        $id = $term->term_id;
    } elseif (is_month()) {
      $id = "";
      $tax_slug = "";
    }

    return get_term($id, $tax_slug);
}

//woo commerce の機能を使う
add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}

//カスタム投稿追加
// add_action( 'init', 'create_post_type' );
// function create_post_type() {
//   //カスタム投稿で使う内容
//   $exampleSupports = [
//     'title',
//     'editor',
//     'thumbnail',
//     'excerpt',
//     'revisions'
//   ];

//   //カスタム投稿を追加
//   register_post_type( 'news', [ // 投稿タイプ名の定義
//     'labels' => [
//       'name'          => 'お知らせ一覧', // 管理画面上で表示する投稿タイプ名
//       'singular_name' => 'お知らせ', // カスタム投稿の識別名
//     ],
//     'public'        => true,  // 投稿タイプをpublicにするか
//     'has_archive'   => true, // アーカイブ機能ON/OFF
//     'menu_position' => 6,     // 管理画面上での配置場所
//     'show_in_rest'  => true,
//     'supports' => $exampleSupports,
//     'taxonomies' => array('type'),
//   ]);

//   //タクソノミーを入れる
//   //第一引数はタクソノミー名入れて配列に使うカスタム投稿名を指定
//   register_taxonomy(
//     'type', array('news'),array(
//     'label' => '種別',
//     'hierarchical' => true,
//     'show_ui' => true,
//     'query_var' => true,
//     'rewrite' => array(
//       'slug' => 'area',
//       'hierarchical' => true
//     ),
//     'show_in_rest' => true,
//   ));

// }
