import s from "./Main.module.scss";
import Add from "../../img/add-btn.png";
import Battery from "../../img/car-battery.png";
// import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const Main = () => {
  const [capacity, setCapacity] = useState("");
  const [item, setItem] = useState("");
  const [totalPower, setTotalPower] = useState("");
  const [totalUse, setTotalUse] = useState({
    tv: "",
    light: "",
    laptop: "",
    wifi: "",
  });
  console.log(totalPower);
  console.log(totalUse);

  // const totalSpendPower = () => {
  //   setTotalUse((totalUse) => ({
  //     ...totalUse,
  //     tv: (totalPower / 50).toFixed(1),
  //     light: (totalPower / 60).toFixed(1),
  //     laptop: (totalPower / 50).toFixed(1),
  //     wifi: (totalPower / 3.5).toFixed(1),
  //   }));
  // };

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
  useEffect(() => {});

  const handlerSubmit = (e) => {
    e.preventDefault();
    const capacityValue = capacity;
    const power = capacity * 12 - capacity * 12 * 0.15;
    setItem(capacityValue);
    setCapacity("");
    setTotalPower(power);
    setTotalUse(() => ({
      tv: (totalPower / 50).toFixed(1),
      light: (totalPower / 60).toFixed(1),
      laptop: (totalPower / 50).toFixed(1),
      wifi: (totalPower / 3.5).toFixed(1),
    }));
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
      <div>
        <h2>Total power in Watt</h2>
        <span>{totalPower}</span>
      </div>
    </div>
  );
};

export default Main;
