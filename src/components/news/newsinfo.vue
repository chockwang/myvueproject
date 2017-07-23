<template>
    <div id="tmp">
        <h3>{{obj.title}}</h3>
        <p>{{obj.add_time|datafmt("YYYY-MM-DD HH:mm:ss")}}</p>
        <p v-html="obj.content"></p>

        <div>
            <comment :id="id"></comment>
        </div>
    </div>

</template>
<script>
    import {Toast} from "mint-ui";
    import commom from "../../common.js";
    import comment from  "../subcom/comment.vue";  //导入评论组件
    export default{
        components:{      //注册评论组件
          comment
        },
        data(){
            return {
                obj:{}
            }

        },
        created(){
            this.id=this.$route.params.id;
            this.getInfo();
        },
        methods:{
            getInfo:function(){
                var url=commom.apidomain+"/api/getnew/"+this.id;
                this.$http.get(url).then(function(res){
                    var body=res.body;
                    if(body.status!=0){
                        Toast(body.message)
                    }
                    this.obj=body.message[0]
                })
            }
        }
    }
</script>
<style scoped>
    #tmp{
        padding:5px;
    }
</style>