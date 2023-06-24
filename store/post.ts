import { defineStore, acceptHMRUpdate } from "pinia";
import { IPost } from "types";

const cvt = fireConverter<IPost>();
export const usePostStore = () => {
  const innerStore = defineStore("post", () => {
    const postAll = shallowRef<IPost[]>([]);
    const fillPosts = async () => {
      const snap = await getDocs(
        collection(getFirestore(), "posts").withConverter(cvt)
      );
      postAll.value = snap.docs.map((d) => d.data());
    };
    // let unsubscribe: Unsubscribe | null = null;
    // const subscribe = () => {
    //   unsubscribe = onSnapshot(
    //     query(collection(getFirestore(), "posts")).withConverter(cvt),
    //     (snap: any) => handleReadSnap<IPost>(snap, postAll.value, (x) => x.id),
    //     async (err) => {
    //       // FIXME await onFirestoreErr(name, err);
    //       throw err;
    //     },
    //     () => console.log(`snapshot post completion `)
    //   );
    // };
    return {
      postAll,
      fillPosts,
    };
  });

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(innerStore, import.meta.hot));
  }

  const s = innerStore();
  if (s.postAll.length < 1) {
    s.fillPosts();
  }
  return s;
};

// make sure to pass the right store definition, `useAuth` in this case.
