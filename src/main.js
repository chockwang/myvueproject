//1.导入vue核心包
import Vue from "vue";
//2.导入App.vue的vue的vue对象
import App from "./App.vue";
//3.0集成vue-router到这个项目中
import vueRouter from "vue-router";
//3.0.1将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
//3,01,1导路由规则对象的组件对象
import Home from "./components/Home.vue";
import car from "./components/shopcar/car.vue";
import newslist from "./components/news/newslist.vue";
import newsinfo from "./components/news/newsinfo.vue";
//3.0.2制定路由规则
var router1=new vueRouter({
    linkActiveClass:"mui-active", //改变路由激活状态
    routes:[
        {path:"/Home",component:Home},
        {path:"/car",component:car},
        {path:"/news/newslist",component:newslist},
        {path:"/news/newsinfo/:id",component:newsinfo},
        {path:"/",redirect:"/Home"}
    ]
});
//注册mint-ui
//导入mint-ui 的css文件
import "mint-ui/lib/style.min.css";
import mintui from "mint-ui";
//在Vue中使用
Vue.use(mintui);

//导入mui的css样式
import "../statics/mui/css/mui.css";
//导入全局样式
import "../statics/css/site.css";
//将vue-resouce绑定到vue对象中,可以让vue文件进行ajax请求通过$http.get()
import vueResource from "vue-resource";
Vue.use(vueResource);
//导入过滤器
import moment from "moment";
Vue.filter("datafmt",function(input,fmtString){
    return moment(input).format(fmtString)
});
// 4.利用Vue对象进行渲染解析
new Vue({
    el:"#app",
    router:router1,
    /*render:function(create){  //es5写法
        create(App)
    }*/
    render:c=>c(App)  //es6函数写法,goes to
});