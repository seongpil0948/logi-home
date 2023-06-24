import { defineStore, acceptHMRUpdate } from "pinia";
import { IPost, PostPart } from "@/types";

const cvt = fireConverter<IPost>();
export const usePostStore = () => {
  const innerStore = defineStore("post", () => {
    const postAll = shallowRef<IPost[]>([]);

    const filteredPosts = (part: PostPart, ctgr?: string) =>
      postAll.value.filter(
        (x) => x.part === part && (!ctgr || x.category === ctgr)
      );
    const fillPosts = async () => {
      const snap = await getDocs(
        collection(getFirestore(), "posts").withConverter(cvt)
      );
      postAll.value = [...snap.docs.map((d) => d.data()), ...mockPosts(100)];
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
      filteredPosts,
    };
  });

  const s = innerStore();
  if (s.postAll.length < 1) {
    s.fillPosts();
  }
  return s;
};

const mockPosts = (length: number): IPost[] =>
  Array.from({ length }, (_, i) => {
    const id = i.toString();
    return {
      id,
      part: fk.helpers.arrayElement(enumToArr(PostPart)),
      category: fk.word.sample(),
      title: fk.lorem.text(),
      content:
        fk.lorem.lines({ min: 1, max: 25 }) +
        "<br />" +
        fk.lorem.paragraph({ min: 1, max: 20 }) +
        fk.lorem.slug({ min: 1, max: 3 }),
      order: fk.number.int({ min: 1, max: 100 }),
      createDate: fk.date.anytime(),
      updateDate: fk.date.anytime(),
    };
  });
