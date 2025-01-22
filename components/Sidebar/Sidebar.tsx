import {SidebarProps} from "./Sidebar.props";
import {JSX} from "react";
export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}