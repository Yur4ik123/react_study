import {Metadata} from "next";
import {getPage} from '@/api/page'
import {notFound} from "next/navigation";
import {getMenu} from "@/api/menu";
import {getProducts} from "@/api/product";

export const metadata: Metadata = {
    title: 'Сраница'
}

// TODO: ЗАРЕЗЕРВИРОВАНАЯ ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ СТАТИЧЕСКИХ СТРАНИЦ
export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})))
}

export default async function PageProducts({params}:{ params: Promise<{ alias: string }> } ) {
    const {alias} = await params;
    const page = await getPage(alias);
    if (!page) {
        notFound();
    }
    const products = await getProducts(page.category);
    console.log(products)
    return (
        <div>
            {page.title}
        </div>
    );
}
