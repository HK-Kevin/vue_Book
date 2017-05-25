<template>
  <div class="tab">
    <Table border :columns="columns7" :data="allbooks"></Table>
    <p class="money">总计：{{sum}}元</p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'Cart',
    data () {
      return {
        columns7: [
          {
            title: '商品',
            key: 'bookName',
            align: 'center',
          },
          {
            title: '价格',
            key: 'price',
            align: 'center',
          },
          {
            title: '数量',
            key: 'num',
            align: 'center',
          },
          {
            title: '合计',
            key: 'sum1',
            width: 150,
            align: 'center',
            render: (h, params) => {
             return h('span', {
               }, (params.row.price*params.row.num))
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.removeBook(params.row.id,params.row.num,params.row.price)
                  }
                }
              }, '删除')
            }
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        buyBooks: 'buyBooks'
      }),
      allbooks(){
        return this.buyBooks
      },
      sum(){
          let allMoney =0;
          this.buyBooks.map(item=>{
              allMoney+=item.num*item.price
          })
        return allMoney
      }
    },
    methods: {
      removeBook(id, num, price){
        this.sum = this.sum - num * price;
        this.$store.dispatch('cancelBook', id)
      }
    }
  }
</script>
<style>
 .tab{
   margin:40px 0;
 }
  .money{
    margin:40px 0;
  }
</style>

