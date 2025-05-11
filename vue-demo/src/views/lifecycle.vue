<template>
  <div class="demo">
    <h2>生命周期演示</h2>
    
    <!-- 触发更新的数据 -->
    <p>计数器: {{ count }}</p>
    <button @click="count++">+1</button>

    <!-- 触发销毁的按钮 -->
    <button v-if="showComponent" @click="showComponent = false">
      销毁组件
    </button>
  </div>
</template>

<script setup>
import { 
  ref, 
  onBeforeMount, 
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted 
} from 'vue'

// 响应式数据
const count = ref(0)
const showComponent = ref(true)

// 生命周期钩子
onBeforeMount(() => {
  console.log('1. beforeMount: 模板编译完成，DOM 尚未挂载')
  console.log('DOM 元素:', document.querySelector('.demo')) // null
})

onMounted(() => {
  console.log('2. mounted: DOM 已挂载，可以操作DOM')
  console.log('DOM 元素:', document.querySelector('.demo')) // 真实DOM
  // 示例：初始化第三方库、发起API请求
  // fetchData()
})

onBeforeUpdate(() => {
  console.log('3. beforeUpdate: 数据变化前，DOM 未更新')
  console.log('当前计数:', count.value)
  console.log('DOM 内容:', document.querySelector('p').textContent)
})

onUpdated(() => {
  console.log('4. updated: DOM 更新完成')
  console.log('更新后计数:', count.value)
  console.log('DOM 内容:', document.querySelector('p').textContent)
})

onBeforeUnmount(() => {
  console.log('5. beforeUnmount: 组件销毁前')
  // 示例：清除定时器
  // clearInterval(timer)
})

onUnmounted(() => {
  console.log('6. unmounted: 组件已销毁')
})

// 示例：需要清理的副作用
const timer = setInterval(() => {
  console.log('运行中的定时器...')
}, 1000)

// 在组件销毁时自动清除
onUnmounted(() => {
  clearInterval(timer)
  console.log('已清除定时器')
})
</script>