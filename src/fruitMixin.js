export const fruitsMixin = {
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

};
