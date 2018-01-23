<template>
  <div class='list-box'>
    <div class='num-box'>
      <label class='reduce' @click='reduceAction'>-</label>
      <input type="number" v-model.number="numVal" class='numText' />
      <label class='add' @click="addAction">+</label>
    </div>
    <h3>{{this.$store.state.num}}</h3>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  data () {
    return {
      numVal: 0
    }
  },
  methods: {
    addAction () {
      this.numVal++;
      console.log(this.$store.state)
      this.$store.dispatch('addNum', { num: this.numVal })
    },
    reduceAction () {
      if (this.numVal <= 0) {
        this.numVal = 0;
        return;
      }
      this.numVal--;
    }
  }
}
</script>
<style scoped>
label {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #eee;
  text-align: center;
  line-height: 30px;
}
.numText {
  width: 70px;
  outline: none;
  border: 1px solid #eee;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
</style>