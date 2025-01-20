import {PtagProps} from "@/components/UI/Ptag/Ptag.props";
import {JSX} from "react";
import styles from './Ptag.module.css'
import cn from 'classnames';


export const Ptag = ({size = 'm', children, className, ...props}: PtagProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
        })}
           {...props}
        >
            {children}
        </p>
    )
}