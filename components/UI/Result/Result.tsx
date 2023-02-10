import styles from './Result.module.css'
export interface IResultProps{
    count: number
}

export const Result = (props: IResultProps) => {
    return (
        <>
            <div className={styles.result}>{props.count}</div>
        </>
    )
}