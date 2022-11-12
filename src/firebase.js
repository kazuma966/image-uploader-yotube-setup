
//アプリケーションの初期化

// Import the functions you need from the SDKs you need
//Firebase ver.9になり書き方が下記のようになっていた
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNIusEwp4VbOVphyvqtvtVrzEeAkTXD4M",
  authDomain: "wakaba-random-call.firebaseapp.com",
  databaseURL: "https://wakaba-random-call-default-rtdb.firebaseio.com",
  projectId: "wakaba-random-call",
  storageBucket: "wakaba-random-call.appspot.com",
  messagingSenderId: "225806253989",
  appId: "1:225806253989:web:74e094afc149654a71f24c",
  measurementId: "G-TZEELY0TQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

//exportで他のファイルでstorageを呼び出せるようになった
export default storage;

//Firebaseでアナリティクスを選択した人は出力されると思うのでコメントアウト
//const analytics = getAnalytics(app);



