import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYwL4lCWZXH1sjWRvruIbcyp-t5iHLNIg",
  authDomain: "insightai-42860.firebaseapp.com",
  projectId: "insightai-42860",
  storageBucket: "insightai-42860.appspot.com",
  messagingSenderId: "546306341226",
  appId: "1:546306341226:web:65d781038cebaaaedc8d13",
  measurementId: "G-ZG9K7736TG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);