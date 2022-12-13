import s from "./Main.module.scss";
import Add from "../../img/add-btn.png";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [add, setAdd] = useState(true);

  const handlerOpenModal = () => {
    setOpenModal(true);
    setAdd(false);
  };

  useEffect(() => {});

  return (
    <div className={s.main_wrapper}>
      <h1 className={s.main_title}>svitLo</h1>
      {openModal && <Modal setOpenModal={setOpenModal} setAdd={setAdd} />}
      {add && (
        <button className={s.add_btn} onClick={handlerOpenModal}>
          <img src={Add} alt="button add" />
        </button>
      )}
    </div>
  );
};

export default Main;
