<?php
function header_php_include()  {
  include('header-include.php');
}
add_action('wp_head', 'header_php_include');
?>