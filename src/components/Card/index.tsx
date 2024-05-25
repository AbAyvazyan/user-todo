import {useCallback, useState} from "react";


import styles from './style.module.scss'
import mailIcon from '@assets/images/search.png'
import phoneIcon from '@assets/images/phone.png'
import Modal from "@components/Modal";
import {IUserData} from "@utils/types.ts";

const Card = (props: IUserData) => {
    const {name, email, phone} = props
    const [open, setOpen] = useState<boolean>(false)

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, [open])

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [open])

    return (
        <>
            <div className={styles.card} onClick={handleOpen}>
                <h2>{name}</h2>
                <div>
                    <img src={phoneIcon} alt="phone-icon"/>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <div>
                    <img src={mailIcon} alt="mail-icon"/>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            </div>

            <Modal open={open} handleClose={handleClose} {...props}/>
        </>
    )
}

export default Card