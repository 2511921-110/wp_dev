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

- wp post generate --count=3 --post_type=post --post_status=publish --post_author=wisedev --post_title="fuga"

### 投稿データ作成

wp post create --post_title="テスト投稿" --post_content="テスト投稿です。" --post_category=3 --post_status=publish

### DB 関連

- wp db export /vagrant/wordpress.sql
- wp db import /vagrant/wordpress.sql

### PHP バージョン変更

- curl https://raw.githubusercontent.com/vccw-team/change-php-version/master/run.sh | bash -s -- 7.4

- sudo vi /etc/php/7.4/apache2/php.ini

#### Vi コマンド

> 行数移動
>
> > 846G

> 文字検索
>
> > /文字列

> 書き込みして終了
>
> > :wq

> 再起動
>
> > sudo service apache2 restart

> php の関係性
>
> > memory_limit >= post_max_size >= upload_max_filesize

#### migration export

themes/$$$$$/gulp,themes/$$$$$/0,themes/$$$$$/README.md,themes/$$$$$/.editorconfig,themes/$$$$$/.gitignore,themes/$$$$$/.prettierrc
