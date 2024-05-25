import styles from './style.module.scss'
import {Modal as ModalMui} from "@mui/material";
import {FC} from "react";
import {IUserData} from "@utils/types.ts";
import closeIcon from '@assets/images/close.png'

interface IModalProps extends IUserData {
    open: boolean,
    handleClose: () => void
}

const Modal: FC<IModalProps> = (
    {
        open,
        handleClose,
        // address,
        email,
        name,
        position_name,
        phone,
        hire_date,
        department
    }
) => {
    return (
        <ModalMui
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.modalContent}>
                <div className={styles.topPart}>
                    <h3>{name}</h3>
                    <span>
                        <img src={closeIcon} onClick={handleClose} alt="close-icon"/>
                    </span>
                </div>

                <div className={styles.contactPart}>
                    <div className={styles.contactLine}>
                        <div>Телефон:</div>
                        <div>{phone}</div>
                    </div>
                    <div className={styles.contactLine}>
                        <div>Почта:</div>
                        <div>{email}</div>
                    </div>
                    <div className={styles.contactLine}>
                        <div>Дата приема:</div>
                        <div>{hire_date}</div>
                    </div>
                    <div className={styles.contactLine}>
                        <div>Должность:</div>
                        <div>{position_name}</div>
                    </div>
                    <div className={styles.contactLine}>
                        <div>Подразделение:</div>
                        <div>{department}</div>
                    </div>
                </div>

                <div className={styles.additional}>
                    <h4>Дополнительная информация:</h4>
                    <p>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют
                        текст в качестве заполнителя макта страницы.</p>
                </div>
            </div>
        </ModalMui>
    )
}

export default Modal