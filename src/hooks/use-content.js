import { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const db = getFirestore(firebase);

  useEffect(() => {
    getDocs(collection(db, target))
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docID: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
