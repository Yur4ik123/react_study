import {FooterProps} from "./Footer.props";
import {JSX} from "react";
import styles from './Footer.module.css'
import cn from 'classnames';
import { format } from 'date-fns';


export const Footer = ({...props}: FooterProps): JSX.Element => {
    return (
        <footer {...props} className={cn(props.className, styles.footer)}>
            <a href="">
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </a>
            <a href="">
                Пользовательское соглашение
            </a>
            <a href="" >
                Политика конфиденциальности
            </a>

        </footer>
    )
}