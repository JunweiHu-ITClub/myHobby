<template>
  <div>
    <div v-for="item in aa">
      <div v-for="upDate in item.dtaa">
        <span>{{upDate.title}}</span>
        <b v-html="upDate.msg"></b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "test",
    data () {
    return {
      aa:[
          {
            type:2,
            name:"ddd<br>swww",
            dtaa:[
              {
                "title": "有效期：",
                "msg": "“2018-01-18 00:00至2018-02-13 00:00” <br>改为 “2018-01-18 00:00至2018-02-20 00:00”"
              },
              {
                "title": "2you：",
                "msg": "“2018-01-18 00:00至2018-02-13 00:00” <br>改为 “2018-01-18 00:00至2018-02-20 00:00”"
              },
              {
                "title": "3hu：",
                "msg": "“2018-01-18 00:00至2018-02-13 00:00” <br>改为 “2018-01-18 00:00至2018-02-20 00:00”"
              }
            ]

          }
        ]
    }
  },
  method:{
    aaaa(){
      alert(1)
    }
  },
  filters:{
    strTrans:function(val){
      console.log(val)
      return val;
    }
  }
}

</script>

<style scoped>
  body ,div ,p,b{
    font-size:14px
  }

</style>
