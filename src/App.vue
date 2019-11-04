<template>
   <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filter and Mixins</h1>
        <p >{{text | toUppercase | to-lowercase}}</p>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filterFruits"> {{fruit}}</li>
        </ul>
      </div>

    </div>
<hr>
      <app-list></app-list>
    </div>
</template>

<script>
import List from './List.vue';
import { fruitsMixin} from './fruitMixin.js';
export default {
  data (){
    return {
      text: ' This filter and Mixins',

    };
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  mixins:[fruitsMixin],
  components:{
    appList: List
  }
}
</script>

<style>

</style>
