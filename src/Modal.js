import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // modal creates and destroys markup which needs to be
  //rendered and re-rendered. need to refer to same dom elements across renders, which
  //useRef helps with this
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    //if you return a function in useEffect it's the clean up function
    //it's the component will unmount of hooks

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); //rendered to a diff part of DOM
};

export default Modal;
