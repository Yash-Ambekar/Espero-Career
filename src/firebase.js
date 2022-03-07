import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbMLwfD0t0eQbPjVk0C03lcSFl9mf97bM",
  authDomain: "espero-high-school.firebaseapp.com",
  projectId: "espero-high-school",
  storageBucket: "espero-high-school.appspot.com",
  messagingSenderId: "908629211956",
  appId: "1:908629211956:web:7dde703b645aeca5464361",
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;
