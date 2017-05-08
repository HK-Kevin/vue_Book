<template>
  <div class="listContainer">
    <Col span="5" offset="1" v-for="book in books" class="text">
    <Card>
      <p slot="title" v-if="!flag">{{book.bookName}}</p>
      <p slot="title" v-if="flag"><input type="text" v-model="book.bookName"></p>
      <img class="bookimg" :src="book.imgUrl" alt="">
      <p v-if="!flag">售价：{{book.price}}</p>
      <p v-if="flag">售价：<input type="text" v-model="book.price"></p>
      <Button v-if="!flag" type="info" @click="update()">修改</Button>
      <Button v-if="flag" type="success" @click="confirm(book)">确定</Button>
    </Card>
    </Col>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {
        flag: false,
      }
    },
    name: 'Home',
    computed: {
      ...mapGetters({
        books: 'books'
      })
    },
    methods: {
      update(){
        this.flag = true
      },
      confirm(book){
        this.$store.dispatch('updateBook',book)
        this.flag = false
      },
      cancel(){

        this.flag = false
      }
    }
  }
</script>
<style>
  .bookimg {
    height: 200px;
  }

  .listContainer {
    padding-top: 30px;
  }
</style>

