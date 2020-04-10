# 環境

- VCCW
- node 10.13.0
- SCSS
- webpack4
- gulp

## サンプル URL

http://

### server

- tsa07.xbiz.jp
- user
- pw

### サイト URL

- http

### ワードプレス情報

- http
- user
- pw

## wp cli

### 投稿データ 20 追加

- wp post generate --count=20 --post_type=post --post_status=publish

### 投稿データ作成

wp post create --post_title="テスト投稿" --post_content="テスト投稿です。" --post_category=3 --post_status=publish

### DB 関連

- wp db export /vagrant/wordpress.sql
- wp db import /vagrant/wordpress.sql
