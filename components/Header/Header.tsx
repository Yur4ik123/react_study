import {HeaderProps} from "./Header.props";
import {JSX} from "react";
import styles from './Header.module.css'
import cn from 'classnames';


export const Header = ({...props}: HeaderProps): JSX.Element => {
    return (
        <header {...props}>
                Header
        </header>
    )
}