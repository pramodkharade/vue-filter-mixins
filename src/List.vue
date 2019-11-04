<template>
      <div>
        <h1>Filter and Mixins</h1>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filterFruits"> {{fruit}}</li>

        </ul>

    </div>
</template>

<script>
export default {
  data (){
    return {
      fruits:['Apple','Banna','custruardApple','Chilly'],
      filterText:''
    };
  },
  computed:{
      filterFruits(){
        return this.fruits.filter((element)=>{
          return element.match(this.filterText);
        });
      }
  }
}
</script>

<style>

</style>
