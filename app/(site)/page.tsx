import styles from "./page.module.css";
import {Menu} from "@/app/(site)/components/menu";


export default async function Home() {

    return (
        <main className={styles.main}>
            <Menu/>
        </main>
    );
}
