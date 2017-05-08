import {BOOK_ADD, BOOK_DELETE,BOOK_UPDATE} from './types'
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
  }
}
export default mutations
