import styles from './CookieClicker.module.css'
import {Dispatch, SetStateAction} from "react";
export interface CookieClickerProps {
    count: number
    setCount:  Dispatch<SetStateAction<number>>
}

export const CookieClicker = (props: CookieClickerProps) => {

    const increase = () => {
        props.setCount(props.count+1)
    }

    return (
        <>
            <img onClick={increase} className={styles.coin} src="./coin.png" alt="coin"/>
        </>
    )
}