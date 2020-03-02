<template>
  <div class="slide-warp">
    <div class="left_box">
      <ul class="left_ul">
        <a class="li_img1"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></a>
        <a class="li_img1"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></a>
        <a class="li_img1"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></a>
        <a class="li_img1"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></a>
      </ul>
    </div>
    <div class="box">
      <div class="arr">
        <span title="1" class="left"><</span>
        <span title="0" class="right" style="float: right">></span>
      </div>
      <ul class="ul_img">
        <li class="li_img"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></li>
        <li class="li_img"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></li>
        <li class="li_img"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></li>
        <li class="li_img"><img src="http://a4.att.hudong.com/21/09/01200000026352136359091694357.jpg" alt=""></li>
      </ul>
      <ul class="ul_cat">
        <li class="li_cat"></li>
        <li class="li_cat"></li>
        <li class="li_cat"></li>
        <li class="li_cat"></li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "SlideWarp"
  }

  //设置count来显示当前图片的序号
  var count = 0;
  //动画的执行方向
  var stargo = false;
  //计时器对象
  var timer;
  window.onload = function () {
    //获取各个元素
    var ul_img = document.getElementsByClassName("ul_img")[0];
    var li_img = document.getElementsByClassName("li_img");
    var arr = document.getElementsByClassName("arr");
    var li_cat = document.getElementsByClassName("li_cat");
    li_cat[0].style.backgroundColor = "aqua";
    //这是定时器
    showtime();

    function showtime() {
      timer = setInterval(function () {
        if (stargo == false) {
          count++;
          ul_img.style.transform = "translate(" + -700 * count + "px)";
          if (count >= li_img.length - 1) {
            count = li_img.length - 1;
            stargo = true;
          }
        } else {
          count--;
          ul_img.style.transform = "translate(" + -700 * count + "px)";
          if (count <= 0) {
            count = 0;
            stargo = false;
          }
        }

        for (var i = 0; i < li_cat.length; i++) {
          li_cat[i].style.backgroundColor = "#fff";
        }

        li_cat[count].style.backgroundColor = 'aqua';

      }, 10000)
    }

    //这是左右点击
    for (var i = 0; i < arr.length; i++) {
      arr[i].onmouseover = function () {
        clearInterval(timer);
      }
      arr[i].onmouseout = function () {
        showtime();
      }
      arr[i].onclick = function () {
        if (this.title == 0) {
          count++;
          if (count > 3) {
            count = 0;
          }
        } else {
          count--;
          if (count < 0) {
            count = 3;
          }
        }

        ul_img.style.transform = "translate(" + -700 * count + "px)";

        for (var i = 0; i < li_cat.length; i++) {
          li_cat[i].style.backgroundColor = "#fff";
        }
        // li_cat[count].style.backgroundColor = "aqua";
      }
    }
    //鼠标onmousever事件
    for (var b = 0; b < li_cat.length; b++) {
      li_cat[b].index = b;
      li_cat[b].onmouseover = function () {
        clearInterval(timer);
        //让count值对应
        //为了控制方向
        if (this.index == 3) {
          stargo = true;
        }
        if (this.index == 0) {
          stargo = false;
        }
        count = this.index;
        ul_img.style.transform = "translate(" + -700 * this.index + "px)";
        for (var a = 0; a < li_cat.length; a++) {
          li_cat[a].style.backgroundColor = "#fff";
        }
        li_cat[this.index].style.backgroundColor = "aqua";
      }
      li_cat[b].onmouseout = function () {
        //添加计时器
        showtime();
      }
    }
  }
</script>

<style scoped>
  .slide-warp {
    display: flex;
    flex-direction: row;
    height: 370px;
    width: 100%;
    margin: 0 0 10px 0;
    position: relative;
  }
  .left_box{
    display: flex;
    width: 140px;
    height: 100%;
    overflow: hidden;
    background-color: white;
  }

  .li_img1 img{
    width: 120px;
    height: 60px;
    margin: 10px
  }
  .box{
    display: flex;

    width: 700px;
    overflow: hidden;
    margin-left: 10px;
    padding: 0;
  }
  .li_img img{
    width: 700px;
    height: 370px;
    margin: 0;
  }
  .li_img{
    height: 100%;
    width: 700px;
  }
  .ul_img {
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 2700px;
    height: 100%;
    padding: 0;
    margin: 0;
    transition: all 2s;
  }

  .arr {
    z-index: 9999;
    position: absolute;
    padding-top: 175px;
    width: 700px;
  }

  .arr span {
    font-size: 3em;
    color: seashell;
  }

  .arr span:hover {
    cursor: pointer;
    background-color: rgba(192, 192, 192, 0.29);
  }

  .ul_cat {
    width: 250px;
    height: 25px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 42%;
    bottom: 10%;
  }

  .li_cat {
    width: 12px;
    height: 12px;
    margin-top: 5px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 40px;
    float: left;
  }

  .li_cat:hover {
    background-color: aqua;

  }
  li{
    list-style: none;
  }
</style>
