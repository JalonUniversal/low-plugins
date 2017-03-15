<template>
  <transition name="modal">
    <div class="modal-container" v-if="isShow">
        <div class="header">
            {{title}}
        </div>
        <div class="content">
           <div class="message">{{content}}</div>
           <!--<div class="ensure-button" @click="close">
               {{sure}}
           </div>-->
           <div class="text-center">
             <low-button @click="close">{{sure}}</low-button>
           </div>
           
        </div>
    </div>
  </transition>

</template>
<script>
export default {
  data() {
    return {
      title: 'Tips',
      content: 'content',
      sure: 'OK',
      isShow: true
    }
  },
  methods: {
    close() {
      this.isShow = false;
      this.callback && this.callback();
    }
  }
}
</script>
<style scoped>
.modal-container {
  position: absolute;
  top:50%;
  left:50%;
  margin-top: -80px;
  margin-left: -200px;
  width: 400px;
  height: 160px;
  border: 1px solid #e7e7e7;
  text-align: center;
}
.header {
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding: 0 5px;
  background: #2980b9;
  color: #fff;
  font-size:14px;
}
.close-button{
  float: right;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top:5px;
  vertical-align: middle;
  cursor: pointer;
  background: #27ae60;
  transition: back-ground 0.4s;
}
.close-button:hover{
  background: #2ecc71;
}
.content {
  display: flex;
  height: 130px;
  text-align:left;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
  font-size: 14px;
  color: #666;
  background: #fff;
}
.message{
  flex:1;
}
.ensure-button{
  width: 70px;
  height: 30px;
  margin: 5px auto;
  line-height: 30px;
  text-align: center;
  border: 1px solid #e7e7e7;
  cursor: pointer;
  transition: background 0.4s;
}
.ensure-button:hover {
  background:#bdc3c7;
}
.text-center {text-align: center}
</style>