import s from "./Main.module.scss";
import Add from "../../img/add-btn.png";
import Battery from "../../img/car-battery.png";
// import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const Main = () => {
  const [capacity, setCapacity] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handlerSubmit(e);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    const capacityValue = capacity;
    setItem(capacityValue);
    setCapacity("");
  };
  const handlerInput = (e) => {
    setCapacity(e.target.value);
  };

  return (
    <div className={s.main_wrapper}>
      <h1 className={s.main_title}>svitLo</h1>
      <div className={s.add_wrapper}>
        <button className={s.add_btn} onClick={handlerSubmit}>
          <img src={Add} alt="button add" />
        </button>
        <input
          onChange={handlerInput}
          className={s.modal_input}
          type="text"
          name="capacity"
          value={capacity}
          placeholder="Enter battery capacity in Ah"
        />
      </div>

      <div className={s.bateries_wrapper}>
        <img src={Battery} alt="batteries" />
        <span>{item} Ah</span>
      </div>
    </div>
  );
};

export default Main;
