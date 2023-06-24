export function handleReadSnap<T>(
  snap: QuerySnapshot<T | null>,
  arr: T[],
  getData: (data: T) => string
) {
  snap.docChanges().forEach((c) => {
    const target = c.doc.data();
    if (target) {
      if (c.type === "added") {
        arr.unshift(target);
      } else if (c.type === "modified") {
        const idx = arr.findIndex((data) => getData(target) === getData(data));
        console.assert(idx !== -1);
        arr[idx] = target;
      } else if (c.type === "removed") {
        const idx = arr.findIndex((data) => getData(target) === getData(data));
        console.assert(idx !== -1);
        arr.splice(idx, 1);
      }
    }
  });
  return arr;
}

// No Save with toFirestore directly (date will saved as timestamp object)
export const fireConverter = <T>() => ({
  toFirestore: (data: WithFieldValue<T>) => commonToJson(data),
  fromFirestore: (snap: QueryDocumentSnapshot) =>
    commonFromJson(snap.data()) as T,
});

export function dataFromSnap<T>(snap: QuerySnapshot<T | null>): T[] {
  const garments: T[] = [];

  snap.docs.forEach((d) => {
    const data = d.data();
    if (data) {
      garments.push(data);
    }
  });
  return garments;
}
