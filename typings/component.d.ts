import * as components from "../utils/index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    NsButton: typeof components.default.NsButton
  }
}
export {};