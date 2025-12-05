import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function fetchProducts(categoryId) {
  let q = collection(db, "products");
  if (categoryId) {
    q = query(q, where("category", "==", categoryId));
  }
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function fetchProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
}
