import store from '../store'
// import * as fb from 'firebase'

export default function (to, from, next) {
  
  // fb.auth().onAuthStateChanged(user => {
  //   if (user) {
  //     next()
  //   } else {
  //     next('/login?loginError=true')
  //   }
  // })


  if (store.getters.isUserLoggedIn) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
