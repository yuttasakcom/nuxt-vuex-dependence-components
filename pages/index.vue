<template>
  <div class="container">
    <h1>App</h1>
    <div class="container__components">
      <div><a-component :items='items'></a-component></div>
      <div><b-component :items='items'></b-component></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import A from '@/components/A'
import B from '@/components/B'

export default {
  components: {
    aComponent: A,
    bComponent: B,
  },
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.container__components{
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
