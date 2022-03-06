import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// seed the database

// Config
const config = {
  apiKey: 'AIzaSyC3g7LUjmZ6LuaZMpx2HwNMKQHcIdSGYcE',
  authDomain: 'netflix-clone-2bbd8.firebaseapp.com',
  projectId: 'netflix-clone-2bbd8',
  storageBucket: 'netflix-clone-2bbd8.appspot.com',
  messagingSenderId: '882498261880',
  appId: '1:882498261880:web:9c1fb52b0128f15416ee8d',
};

const firebase = initializeApp(config);

// seedDatabase(firebase);

export { firebase };
