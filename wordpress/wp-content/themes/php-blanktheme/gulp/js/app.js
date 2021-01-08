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

