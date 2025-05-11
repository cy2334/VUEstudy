<template>
  <!--模板语法事例区-->
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
  <!--双向绑定-->
  <input v-model="inputText" placeholder="输入内容">
  <p>你输入了：{{ inputText }}</p>
  <!--条件渲染-->
  <button @click="toggleShow">切换显示</button>
  <p v-if="isShow">现在你看见我</p>
  <p v-else>现在你看不见我</p>
  <!--列表渲染-->
  <ul>
    <li v-for = "(item,index) in list":key="index">{{ index + 1 }}{{ item }}</li>
  </ul>
</template>
<script setup>
import { ref } from 'vue';

const title = ref('Vue3 模板语法演示')
const inputText = ref("")
const isShow = ref(true)
const list = ref(['苹果', '香蕉', '橘子'])
//方法
const toggleShow= ()=>{
  isShow.value = !isShow.value
}
</script>