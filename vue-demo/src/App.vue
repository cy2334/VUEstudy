<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">首页</router-link> |
    <router-link to="/lifecycle">查看生命周期演示</router-link>|
    <router-link to="/StateManagement">状态管理</router-link>
  </nav>

  <router-view />
</template>
