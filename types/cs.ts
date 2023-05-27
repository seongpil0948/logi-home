import { ICUDate } from "./common";

export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  company: string;
}
// 견적/상담문의
export interface ICounsel extends ICUDate, PersonalInfo {
  content: string;
}
// QNA
export interface IInquiry extends ICounsel {
  title: string;
}

export type ICounselForm = Omit<ICounsel, "createdAt" | "updatedAt">;
export type IInquiryForm = Omit<IInquiry, "createdAt" | "updatedAt">;
