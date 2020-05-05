/**
 * @file: firebase.js
 * @author: Paulo Alves
 * @description: responsável pelas configurações de conexão com o banco de dados.
 * @version 1.0.1(05/05/2020)
 */

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBspkaFBX4RautuHYR_EPuXMM6_UJTjSYM',
  authDomain: 'lista-de-series-30049.firebaseapp.com',
  databaseURL: 'https://lista-de-series-30049.firebaseio.com',
  projectId: 'lista-de-series-30049',
  storageBucket: 'lista-de-series-30049.appspot.com',
  messagingSenderId: '239523517163',
  appId: '1:239523517163:web:976a783cf41e5c2e76e4ae'
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
export const db = firebaseapp.firestore()

