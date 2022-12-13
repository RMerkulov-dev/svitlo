import s from './Main.module.scss'
import Modal from "../Modal/Modal";



const Main = () => {
    return (
        <div className={s.main_wrapper}>
<h1 className={s.main_title}>svitLo</h1>
            <Modal/>
        </div>
    );
};

export default Main;
