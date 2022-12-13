import s from "./Modal.module.scss";
import Battery from "../../img/car-battery.png";
import { useEffect, useState } from "react";

const Modal = ({ setOpenModal, setAdd }) => {
  const [capacity, setCapacity] = useState("");

  const handlerInput = (e) => {
    setCapacity(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const capacityValue = capacity;
    console.log(capacityValue);
    setCapacity("");
    setOpenModal(false);
    setAdd(true);
  };

  useEffect(() => {
    localStorage.setItem("batteries", JSON.stringify(capacity));
  });

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handlerSubmit(e);
        setOpenModal(false);
        setAdd(true);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div className={s.backdrop}>
      <div className={s.modal_content}>
        <img src={Battery} alt="battery" />
        <input
          onChange={handlerInput}
          className={s.modal_input}
          type="text"
          name="capacity"
          value={capacity}
          placeholder="Enter battery capacity in Ah"
        />
        <button onClick={handlerSubmit}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
