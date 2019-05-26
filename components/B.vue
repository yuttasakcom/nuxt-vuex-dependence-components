<template>
  <div>
    B Component
    <ul>
      <li v-for="item in items" :key="item.id">{{item.name}} &nbsp; {{item.isOpen}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>
