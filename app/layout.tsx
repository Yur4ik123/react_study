import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({});


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
             {children}
            </body>
        </html>
    );
}
