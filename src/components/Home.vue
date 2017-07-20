<template>

    <div id="tmp">
        <!--用mint-ui实现轮播图-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in list">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--用mui来实现九宫格导航区-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">图片分享</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video/videos">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/contactus/contact">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                    </router-link></li>m
            </ul>
        </div>

    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import commom from "../common.js";
    export default{
            data(){
                return{
                    list:[]
                }
            },
            created(){  //当页面中的data和methods对象都创建完毕的时候就会自动调用
                    this.getImgs()
        },
            methods:{
                getImgs(){
                  var url=commom.apidomain+"/api/getlunbo";
                  this.$http.get(url).then(function(response){
                      var data=response.body;
                      if(data.status!=0){
                          Toast(data.message);
                          return
                      }
                      this.list=data.message;
                  })
                }
        }
    }
</script>
<style scoped>
    .mint-swipe{
       height: 220px;
    }
    .mint-swipe-item{
        width: 100%;
        height: 220px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 220px;
    }
    .mui-content,.mui-content ul{
        background-color: white;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
       border: none;
    }
    .mui-icon-home:before {
        content: '';
        background-image: url(../../statics/imgs/1.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;

    }
    .mui-icon-email:before {
        content: '';
        background-image: url(../../statics/imgs/2.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;

    }
    .mui-icon-chatbubble:before {
        content: '';
        background-image: url(../../statics/imgs/3.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;

    }
    .mui-icon-location:before {
        content: '';
        background-image: url(../../statics/imgs/4.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;

    }
    .mui-icon-search:before {
        content: '';
        background-image: url(../../statics/imgs/5.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }
    .mui-icon-phone:before {
        content: '';
        background-image: url(../../statics/imgs/6.png);
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }
</style>