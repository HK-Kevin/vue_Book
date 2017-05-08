<template>
  <Col >
  <Breadcrumb>
    <Breadcrumb-item href="/manger/add">添加图书</Breadcrumb-item>
    <Breadcrumb-item href="/manger/update">修改图书</Breadcrumb-item>
    <Breadcrumb-item href="/manger/delete">删除图书</Breadcrumb-item>
  </Breadcrumb>
  <transition :name="transitionName">
  <router-view></router-view>
  </transition>
  </Col>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default{
    name: 'Manger',
    data(){
        return{
          transitionName:''
        }

    },
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
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }
    },
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

