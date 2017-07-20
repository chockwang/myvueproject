
<!--新闻列表-->

<template>
    <div id="tmp">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media"  v-for="item in list">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src=item.img_url>
                    <div class="mui-media-body">
                       {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <div class="Stime">
                            <span>发表时间：{{item.add_time|datafmt("YYYY-MM-DD   HH:mm:ss")}}</span>
                            <span class="clicknum">点击数：{{item.click}}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>


    </div>

</template>
<script>
    import { Toast } from 'mint-ui';
    import commom from "../../common.js";
        export default{
            data(){
                return {
                    list:[

                    ]
                }
            },
            created(){
                this.getnewsList()
            },
            methods:{
                getnewsList:function(){
                      var url=commom.apidomain+"/api/getnewslist";
                      this.$http.get(url).then(function(res){
                          var body=res.body;
                          if(body.status!=0){
                              Toast(body.message)
                          }
                          this.list=body.message;

                      })

                }
            }




        }
</script>
<style scoped>
.mui-table-view img{
    height: 80px;
    width: 80px;
}
.mui-table-view .mui-media-object{
    max-width: 80px;
    line-height: 80px;
}
.Stime{
    font-size:14px;
    margin-top: 1.5em;
    color: #0094ff;
}
.Stime .clicknum{
    margin-left: 20px;
}

</style>