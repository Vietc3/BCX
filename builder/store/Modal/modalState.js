import { atom } from "recoil";

export const ModalState = atom({
  key: 'ModalState',
  default: {
      textEditModal:false,
      content:''
  }});