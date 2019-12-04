
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAq_rIHFkUkGufSuZKIXdXr5e1SaR5-QRs",
  authDomain: "tally-c5d74.firebaseapp.com",
  databaseURL: "https://tally-c5d74.firebaseio.com",
  projectId: "tally-c5d74",
  storageBucket: "tally-c5d74.appspot.com",
  messagingSenderId: "522940958190",
  appId: "1:522940958190:web:6cd9ffeb7e0953c9f57aff",
  measurementId: "G-HWQFYXSZRQ"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;
