<template>
  <div class="listContainer">
    <Col span="5" offset="1" v-for="book in books" class="text">
    <Card >
      <p slot="title">{{book.bookName}}</p>
      <img  class="bookimg" :src="book.imgUrl" alt="">
      <p>售价：{{book.price}}</p><router-link :to="{ name:'detail',params:{id:book.id}}">详情</router-link>
    </Card>
    </Col>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
      name: 'Home',
    computed:{
      ...mapGetters({
        books:'books'
      })
    },
    methods:{

    }
  }
</script>
<style>
  .bookimg{
    height: 200px;
  }
  .listContainer{
    padding-top: 30px;
  }
</style>

