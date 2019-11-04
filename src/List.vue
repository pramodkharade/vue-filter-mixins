<template>
      <div class="row">
        <h1>Filter and Mixins</h1>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filterFruits"> {{fruit}}</li>

        </ul>

    </div>
</template>

<script>
import {fruitsMixin} from './fruitMixin.js';
export default {
  mixins:[fruitsMixin]
}
</script>

<style>

</style>
