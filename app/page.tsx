'use client'
import type {Metadata} from "next";
import {Button, Htag, Ptag, Rating, Tag} from "@/components";
import {useState} from "react";


// export const metadata: Metadata = {
//   title: "Исправленные данные",
//   description: "Описание ",
// };

// export async function generateMetadata(): Promise<Metadata> {
//     // data
//     return {
//         title: 'Computed metadata'
//     }
// }

export default function Home() {
    const [rating, setRating ] = useState<number>(4)
    return (
        <>
            <Htag tag="h1">h1</Htag>
            <Button appearance='ghost' arrow='right' >Кнопка</Button>
            <Button appearance='primary' arrow='down'>Кнопка</Button>
            <Ptag size="s">
                123123asdasd
            </Ptag>
            <Ptag size="m">
                123123asdasd
            </Ptag>
            <Ptag size="l">
                123123asdasd
            </Ptag>
            <Tag size="s">ghost</Tag>
            <Tag size="m" color="red">ghost</Tag>
            <Tag size="s" color="green">ghost</Tag>
            <Tag  color="primary" href="#">ghost</Tag>

            <Rating rating={rating} isEditable setRating={setRating}></Rating>

        </>
    );
}
