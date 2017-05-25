import {BOOK_ADD, BOOK_DELETE,BOOK_UPDATE,BUY_BOOK,CANCEL_BUY} from './types'
 const  actions ={
  addBook:({commit},book)=>commit('BOOK_ADD',book),
  deleteBook:({commit},id)=>commit('BOOK_DELETE',id),
  updateBook:({commit},book)=>commit('BOOK_UPDATE',book),
  buyBook:({commit},book)=>commit('BUY_BOOK',book),
  cancelBook:({commit},id)=>commit('CANCEL_BUY',id),
}
export default actions
