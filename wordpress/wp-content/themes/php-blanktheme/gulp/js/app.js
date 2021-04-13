import Vue from 'vue'
import axios from 'axios'
// import Inview from 'in-view'
// import objectFitImages from 'object-fit-images';

/*******************
  object fit
*******************/
// objectFitImages('.module__img img', {watchMQ: true});


/*******************
  loading 画面
*******************/
if(document.getElementById('js-loader')){
  const loader = document.getElementById('js-loader');
  window.addEventListener('load', () => {
    const ms = 400;
    loader.style.transition = 'opacity ' + ms + 'ms';

    const loaderOpacity = function(){
      loader.style.opacity = 0;
    }
    const loaderDisplay = function(){
      loader.style.display = 'none';
    }
    // setTimeout(loaderOpacity, 1);
    // setTimeout(loaderDisplay, ms);
    // デモ用
    setTimeout(loaderOpacity, 3000);
    setTimeout(loaderDisplay, 3500 + ms);
  });
}

/*******************
  sticky header
*******************/
function　scrollFunction() {
  var this_y = window.pageYOffset;
  // console.log(this_y)
  if (this_y > 130) {
      document.getElementById("header").classList.add("active");
      setTimeout(() => {
        document.getElementById("header").classList.add("in-view");
      }, 1000)
  } else {
      document.getElementById("header").classList.remove("active", "in-view");
  }
}
window.onload = function() {
  scrollFunction();
}
window.onscroll = function() {
  scrollFunction();
}

/*******************
  Nav
*******************/

if(document.getElementsByClassName('globalNav')[0]){
  const wrap = document.querySelector('.menu__btnwrap')
  const nav_el = document.querySelector('.spmenu_btn')
  const nav_state_class = 'globalNav_state'
  const nav_target_class = '.globalNav'
  const nav_close_class = 'spmenu_btnClose'
  const nav_wrap = document.querySelector('.menu')

  wrap.addEventListener('click',()=>{
    if(document.querySelector('.'+ nav_state_class) === null){
      document.querySelector(nav_target_class).classList.add(nav_state_class)
      nav_el.classList.add(nav_close_class)
    }else{
      document.querySelector(nav_target_class).classList.remove(nav_state_class)
      nav_el.classList.remove(nav_close_class)
    }
  },false)

  nav_wrap.addEventListener('click',()=>{
    document.querySelector(nav_target_class).classList.remove(nav_state_class)
    nav_el.classList.remove(nav_close_class)
  },false)
}


/*******************
  map
*******************/
if (document.getElementById('Map')) {
  const mapInstance = new Vue({
    el: "#Map",
    data() {
      return {
        lat: 34.6704542,
        lng: 135.5013464,
        zoom: 16,
        icon: THEME_URL + "/assets/mappin.png",
        geometry:{
          hue:'#111',       // 色
          gamma:0.1,        // ガンマ 0.01 ~ 10
          lightness:-70,    // 明度  -100 ~ 100
          saturation:-100,   // 彩度 -100 ~ 100
        },
        labels:{
          hue:'#ae9e74',       // 色
          gamma:1,        // ガンマ
          lightness:0,    // 明度
          saturation: -50, // 彩度
        }
      }
    },
    mounted(){
      let map
      let marker
      let center = {
        lat: Number(this.lat), // 緯度
        lng: Number(this.lng) // 経度
      }
      map = new google.maps.Map(document.getElementById('Map'), { // #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: this.zoom, // 地図のズームを指定
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [
              { hue: this.geometry.hue },
              { gamma: this.geometry.gamma },
              { lightness: this.geometry.lightness },
              { saturation: this.geometry.saturation },
            ],
          },
          {
            featureType: 'all',
            elementType: 'labels',
            stylers: [
              { hue: this.labels.hue },
              { gamma: this.labels.gamma },
              { lightness: this.labels.lightness },
              { saturation: this.labels.saturation },
            ],
          },
        ]
      })
      marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
        icon: this.icon // マーカーのアイコン指定
      })
    },
  })
}


/*******************
  accordion
*******************/

var trigger = document.querySelectorAll('.accordion__title');
for (var i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', function() {
    var body = this.nextElementSibling;
    if (this.classList.contains('is-active')) {
      this.classList.remove('is-active');
      body.classList.remove('is-open');
    } else {
      this.classList.add('is-active');
      body.classList.add('is-open');
    }
  });
}




/*******************
  posts
*******************/

if (document.getElementById('Posts')) {
  const postsInstance = new Vue({
    el: "#Posts",
    data() {
      return {
        cats: [],
        posts: [],
        eventObject: '',
      }
    },
    mounted(){
      axios(BASEURL+'posts')
      .then( (res) =>{
        this.posts = res.data
      })
      axios(BASEURL+'categories')
      .then( (res) =>{
        this.cats = res.data.filter(item => item.slug != 'uncategorized')
      })
    },
    methods:  {
      btnClicked(e) {
        axios(BASEURL+'posts')
        .then( (res) =>{
          this.posts = res.data.filter(item => item.categories.includes(e))
        })
      }
    },
  })
}

/*******************
  posts
*******************/

// if (document.getElementById('Cat')) {
//   const postsInstance = new Vue({
//     el: "#Cat",
//     data() {
//       return {
//         cats: [],
//       }
//     },
//     mounted(){
//       axios(BASEURL+'categories')
//       .then( (res) =>{
//         this.cats = res.data.filter(item => item.slug != 'uncategorized')
//       })
//     },
//   })
// }

/*******************
  tab
*******************/
if (document.getElementById('tab')) {
  //-- タブ切り替え --------------------------------------------------------------------
  // 対象クラスのついているDOM全てを取得
  var btn = document.getElementsByClassName('tab__btn');

  // btn.length で 対象ボタンの個数全部を取得し、条件式が0になるまで回す。
  // 要素indexは0から割り振られているので-1することで、個数を、indexに合わせる。
  for (var i = btn.length - 1; i >= 0; i--) {
    // 各ボタン、イベントリスナーでクリックしたら発動
    btn[i].addEventListener('click', function () {

      // btn.length で 対象ボタンの個数全部を取得し、条件式が0になるまで回す。
      for (var x = btn.length - 1; x >= 0; x--) {
        // contains で対象クラス有無をチェックし、あれば削除
        if (btn[x].classList.contains('active')) {
          btn[x].classList.remove('active');
        }
      }

      // this はクリックされたオブジェクト。parentNode でその親。
      // classList でクラス操作。active クラスの追加と削除。
      this.classList.add('active');

      // 対象クラスのついているDOM全てを取得
      var box = document.getElementsByClassName('tab__container');
      for (var y = box.length - 1; y >= 0; y--) {
        // contains で対象クラス有無をチェックし、あれば削除
        if (box[y].classList.contains('open')) {
          box[y].classList.remove('open');
        }
      }

      //data属性の値を取得して、同じidの要素にクラス付加。
      var tab_id = this.getAttribute('data-tab');
      document.getElementById(tab_id).classList.add('open');
    });
  }
}


/*******************
  見積もり機能
*******************/
if (document.getElementById('estimate')) {
  const form = document.querySelectorAll('input[name=合計金額]')
  const setu01 = document.querySelectorAll('input[name=メニュー01]')
  const setu02 = document.querySelectorAll('input[name=オプション01]');
  const radio = document.querySelectorAll("input[type='radio']")
  console.log(radio)
  for(i=0;i<setu01.length;i++){
    setu01[i].addEventListener('click', function(e){
      price_sum();
    });
  }
  //optionのクリックを監視
  for(i=0;i<setu02.length;i++){
    setu02[i].addEventListener('click', function(e){
      price_sum();
    });
  }
  //合計計算
  function price_sum(){
    var sum = 0;
    for (var i = 0; i < setu01.length; i++){
      if(setu01[i].checked){
        sum += parseInt(setu01[i].value);
      }
    }
    for(var i = 0; i < setu02.length; i ++){
      if(setu02[i].checked){
        sum += parseInt(setu02[i].value);
      }
    }
    // console.log(form[0].value)
    form[0].value = sum;
  }
  // for (let i = 0; i < setu01.length; i++) {
  //   element.addEventListener('change',function(){})
  //   const e = setu01[i];
  //   e =
  // }
}
