import s from "./Main.module.scss";
import Add from "../../img/add-btn.png";
import Battery from "../../img/car-battery.png";
import Tv from "../../img/television.png";
import Light from "../../img/light-bulb.png";
import Laptop from "../../img/laptop-screen.png";
import Wifi from "../../img/wifi.png";
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
  useEffect(() => {
    setTotalUse(() => ({
      tv: (totalPower / 50).toFixed(1),
      light: (totalPower / 60).toFixed(1),
      laptop: (totalPower / 50).toFixed(1),
      wifi: (totalPower / 3.5).toFixed(1),
    }));
  }, [totalPower]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const capacityValue = capacity;
    const power = capacity * 12 - capacity * 12 * 0.15;
    setItem(capacityValue);
    setCapacity("");
    setTotalPower(power);
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
      <div className={s.totpower_wrapper}>
        <h2 className={s.totpower_text}>Total power in Watt</h2>
        <span className={s.totpower_value}>{totalPower} v</span>
      </div>
      <ul className={s.devices}>
        <li>
          <img src={Tv} alt="tv" width="30" />
          <span>{totalUse.tv} ~ hours</span>
        </li>
        <li>
          <img src={Light} alt="tv" width="30" />
          <span>{totalUse.light} ~ hours</span>
        </li>
        <li>
          <img src={Laptop} alt="tv" width="30" />
          <span>{totalUse.laptop} ~ hours</span>
        </li>
        <li className={s.update}>
          <img src={Wifi} alt="tv" width="30" />
          <span>{totalUse.wifi} ~ hours</span>
        </li>
      </ul>
    </div>
  );
};

export default Main;

// const [totalUse, setTotalUse] = useState({
//   tv: "",
//   light: "",
//   laptop: "",
//   wifi: "",
// });
