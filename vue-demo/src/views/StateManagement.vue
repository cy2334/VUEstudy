<template>
<div>
    <p>计数器: {{ counter.count }}</p>
    <p>双倍计数：{{ counter.doubleCount }}</p>
    <button @click="counter.increment">+1</button>
    <button @click="counter.decrement">-1</button>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
</script>