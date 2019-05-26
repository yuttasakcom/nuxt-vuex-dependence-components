<template>
  <div>
    A Component
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.name}} {{item.isOpen}}
        <button @click="setIsOpen(item.id)">click</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['items'],
  methods: {
    ...mapActions(['setIsOpen'])
  }
}
</script>
