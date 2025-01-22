import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import styles from "./layout.module.css";
import "../../styles/globals.css";
import {Header, Sidebar, Footer} from "@/components"

const notoSans = Noto_Sans({
    preload: false,
});
export const metadata: Metadata = {
    title: "Наш проект",
    description: "Generated by create next app",
};
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={notoSans.className}>
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                body
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>

        </body>
        </html>
    );
}
