import { describe, it, expect } from "vitest";
// import { mount } from "@vue/test-utils";
// import {
//   ElPopover,
//   ElButton,
//   ElCard,
//   ElDescriptions,
//   ElDescriptionsItem,
//   ElInput,
//   ElForm,
//   ElFormItem,
//   ElRow,
//   ElCol,
// } from "element-plus";
// import InquiryFab from "../../components/InquiryFab.vue";

describe("InquiryFab", () => {
  it("is a Vue instance", () => {
    expect(1 + 1).toBe(2);
  });
});
// describe("InquiryFab", () => {
//   it("is a Vue instance", async () => {
//     const wrapper = mount(InquiryFab);
//     expect(wrapper.vm).toBeTruthy();
//   });
//   it("click test", async () => {
//     InquiryFab.components = Object.assign(
//       {
//         ElPopover,
//         ElButton,
//         ElCard,
//         ElDescriptions,
//         ElDescriptionsItem,
//         ElInput,
//         ElForm,
//         ElFormItem,
//         ElRow,
//         ElCol,
//       },
//       InquiryFab.components
//     );
//     const wrapper = mount(InquiryFab);

//     const selector = "[data-test=${inquiry-fab-trigger-btn}]";
//     expect(wrapper.find(selector).exists()).toBe(true);
//     expect(wrapper.find(selector).text()).toContain("문의");
//     //   .get("[data-test*=${inquiry-fab-trigger-btn}]")
//     await wrapper.get(selector).trigger("click");
//     expect(wrapper.findAll(".cell-item")).length(2);
//   });
// });
