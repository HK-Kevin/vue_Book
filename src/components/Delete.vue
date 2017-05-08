<template>
  <div class="listContainer">
    <Col span="5" offset="1" v-for="(book,index) in books" :key="index"  class="text">
    <Card >
      <p slot="title">{{book.bookName}}</p>
      <img  class="bookimg" :src="book.imgUrl" alt="">
      <p>售价：{{book.price}}</p>
      <Icon type="close-round"></Icon>
      <Button type="error" @click="deleteBook(book.id)">删除</Button>
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
      deleteBook(id){
        this.$store.dispatch('deleteBook',id)
      }
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

