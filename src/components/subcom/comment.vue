<!--公用评论模板-->
<template>
   <div id="tmp">
       <div id="potsit">
           <!--实现评论提交-->
           <h3>提交评论</h3>
           <p></p>
           <textarea placeholder="请输入提交评论" v-model="postcontent"></textarea>
           <mt-button type="primary" size="large" @click="postTo">发表</mt-button>
           <div id="comments">
               <ul>
                   <li v-for="item in list">
                       <p>{{item.user_name}}</p>
                       <p>{{item.add_time | datafmt("YYYY-MM-DD HH:mm:ss")}}</p>
                       <p>{{item.content}}</p>
                   </li>
               </ul>
           </div>
       </div>
       <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
    import commom from "../../common.js";
    import {Toast} from "mint-ui";
    export default{
        data(){
            return{
                pageindex:1,
                postcontent:"",
                list:[]
            }
        },
        created(){
            this.getInfo();
        },
       props:["id"],
        methods:{
            getMore:function(){   //加载更多方法
               this.pageindex++;
               this.getInfo(this.pageindex)
            },
           getInfo:function(pageindex){     //加载评论列表
              pageindex = pageindex || 1;
               var url=commom.apidomain+"/api/getcomments/"+this.id+"?pageindex="+pageindex;
               this.$http.get(url).then(function(res){
                   var res=res.body;
                   if(res.status!=0){
                       Toast(res.message)
                   }
                   this.list=this.list.concat(res.message);
               })
           },
            postTo:function(){    //添加评论方法
                var url=commom.apidomain+"/api/postcomment/"+this.id;
                this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
                    var body=res.body;
                    Toast(body.message);
                    this.getInfo();
                })

            }
        }
    }

</script>
<style scoped>
    ul {
        padding-left:0px;
        list-style: none;
    }
    ul >li{
        border-bottom: 1px solid #ccc;
    }

</style>