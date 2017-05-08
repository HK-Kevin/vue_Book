import {BOOK_ADD, BOOK_DELETE,BOOK_UPDATE} from './types'
 const  actions ={
  addBook:({commit},book)=>commit('BOOK_ADD',book),
  deleteBook:({commit},id)=>commit('BOOK_DELETE',id),
  updateBook:({commit},book)=>commit('BOOK_UPDATE',book),
}
export default actions
