import s from './Modal.module.css'
import Battery from '../../img/car-battery.png'


const Modal = () => {
    return (
        <div className={s.backdrop}>
            <div className={s.modal_content}>
                <img src={Battery} alt="battery"/>
                <input type="text" placeholder="Enter Ah"/>
            </div>
        </div>
    );
};

export default Modal;
