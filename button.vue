<template>
    <div 
    class="button-container"
    :type="type"
    :class="[
      type ? 'low-' + type : '',
      size ? 'low-' + size : '',
      radius? 'low-radius-' + radius : ''
    ]"
    @click="handleClick">
        {{ text }}
    </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String,
      default: 'middle'
    },
    radius: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: 'Press'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>
<style scoped>
.button-container {
    display: inline-block;
    text-align: center;
    border: 1px solid #d7d7d7;
    color: #666;
    cursor: pointer;
    transition: backGround 0.4s;
}
.button-container:hover{
    background: #ecf0f1;
}
/* radius */
.low-radius-small {
    border-radius: 6px;
}
.low-radius-middle {
    border-radius: 12px;
}
.low-radius-large {
    border-radius: 18px;
}
/* size */
.low-small{
    width: 60px;
    height:20px;
    line-height: 20px;
    font-size: 12px;
}
.low-middle{
    width: 90px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}
.low-large{
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}
/* type */
.low-default {
    background: #bdc3c7;
}
.low-default:hover {
    background: #ecf0f1;
}
.low-info {
    background: #2980b9;
    color: #fff;
}
.low-info:hover {
    background: #3498db;
}
.low-danger {
    background: #c0392b;
    color: #fff;
}
.low-danger:hover{
    background: #e74c3c;
}
.low-success {
    background: #27ae60;
    color:#fff;
}
.low-success:hover{
    background: #2ecc71;
}
.low-warning{
    background: #d35400;
    color: #fff;
}
.low-warning:hover {
    background: #e67e22;
}
</style>