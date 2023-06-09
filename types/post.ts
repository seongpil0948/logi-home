export enum PostPart {
  CS = "cs",
  SERVICE = "service",
  GALLERY = "gallery",
}
export interface IPost {
  id: string;
  part: PostPart;
  category?: string;
  title: string;
  content: string;
  order: number;
  createDate: Date;
  updateDate: Date;
}

export type IPostForm = Partial<IPost>;
