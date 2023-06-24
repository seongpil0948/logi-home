import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const uploadFile = (blob: Blob, parentPath: string) => {
  const storage = getStorage();
  const fileRef = ref(storage, `${parentPath}/${v4() + blob.name}`);

  return uploadBytes(fileRef, blob).then((snapshot) => {
    return getDownloadURL(snapshot.ref).then((downloadURL) => {
      return { downloadURL, refer: snapshot.ref };
    });
  });
};
