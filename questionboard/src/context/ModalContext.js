import React from "react";

const ModalContext = React.createContext({
  activeModal: null,
  setActiveModal: () => {},
  closeModal: () => {},
});

export { ModalContext };
