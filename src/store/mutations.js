import {BOOK_ADD, BOOK_DELETE,BOOK_UPDATE,BUY_BOOK,CANCEL_BUY} from './types'
 const  mutations ={
  [BOOK_ADD](state,book){
    if(state.bookInfo.length == 0){
      book.id=1
    }else{
      book.id= state.bookInfo[state.bookInfo.length-1].id+1
    }
    state.bookInfo.push(book)
  },
  [BOOK_DELETE](state,bid){
    state.bookInfo=state.bookInfo.filter(item=>{
      return  item.id != bid
    })
  },
  [BOOK_UPDATE](state,book){

    state.bookInfo.map(item=>{
      if(item.id == book.id){
        return book
      }
    })
  },
  [BUY_BOOK](state,book){
    console.log(book)
   if(!book.num){
      book.num =1;
     state.added.push(book)
   }else{
     state.added.find(item=>{
            if(item.id == book.id){
         item.num++
       }

     })

   }
    console.log(state.added)

   },
   [CANCEL_BUY](state,id){
    state.added = state.added.filter(item=>{
      if(item.id == id)item.num = 0
      return item.id != id
    })
     console.log(state.added)
   }
}
export default mutations
