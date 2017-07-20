<template>

    <!-- 项目的根目录 -->
    <div>
        <!--1.利用mint-ui的header组件来实现整个系统的头部-->
        <mt-header fixed title="传志播客黑马程序员"></mt-header>

        <router-view></router-view>


        <!--2.利用mui中的tabbar组件实现系统的底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/car">
                <span class="mui-icon mui-icon-contact"> <span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>


</template>
<script>
    import {Toast} from "mint-ui";
 //负责导出.vue这个组件对象
 function add(x,y){
   console.log(x+y)
 }
    export default{
        data(){    //es6写法,是个函数n
            return{
                msg:"浪里小白条"
            }
        },methods:{
            add,        //es6 写法   es5 add:add
            tip:function(){
                    Toast("hellow")
            }
        },
        create(){

        }

    }

</script>
<style scoped>
.red{
    color:red;
}



</style>