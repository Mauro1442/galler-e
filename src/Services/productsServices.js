import firebase from "../Config/firebase";

export async function getAllProducts(buscar) {
  const querySnapshot = await firebase.db
    .collection("products")
    .orderBy("name")
    .startAt(buscar)
    .endAt(buscar + "\uf8ff")
    .get();
  return querySnapshot.docs;
}
export async function getByIdProducts(id) {
  return await firebase.db.doc("products/" + id).get();
}
export async function update(id, data) {
  return await firebase.db.doc("products/" + id).set(data);
}
