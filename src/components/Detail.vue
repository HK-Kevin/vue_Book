<template>
  <div class="listContainer">
    <Col span="5" offset="1">
    <Card class="text">
      <p slot="title" class="text">{{bookDetail.bookName}}</p>
      <img class="bookimg" :src="bookDetail.imgUrl" alt="">
      <p class="text">售价：{{bookDetail.price}}</p>
      <Button class="text" type="primary" size="small" @click="buy(bookDetail)">加入购物车</Button>
    </Card>
    </Col>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default{
    name: 'Home',
    computed: {
      ...mapGetters({
        books: 'books'
      }),
      bookDetail(){
        let bId = this.$route.params.id;
     return this.books.find(function (item) {
          return item.id == bId
        })
      }
    },
    methods:{
        buy(book){
          this.$store.dispatch('buyBook',book)
        }
    }
  }
</script>
<style>
  .bookimg {
    height: 200px;
  }
  .text{
    text-align: center;
  }
  .listContainer {
    padding-top: 30px;
  }
</style>

