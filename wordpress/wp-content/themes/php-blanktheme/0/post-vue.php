<div id="Posts">
  <ul>
    <li v-for="(cat, key) in cats" v-text="cat.name" :data-id="cat.id" @click="btnClicked(cat.id)" :name="cat.name"></li>
  </ul>
  <div v-for="post in posts" v-if="posts.length">
    <h3 class="post__title" v-text="post.title.rendered" v-if="post.title.rendered"></h3>
    <div class="post__content" v-html="post.content.rendered" v-if="post.content.rendered"></div>
  </div>
</div>
