import {Metadata} from "next";
import {getPage} from '@/api/pages'
import {notFound} from "next/navigation";

export const metadata: Metadata = {
    title: 'Сраница'
}
export default async function PageProducts({params}: { params: { alias: string } }) {
    const {alias} = await params;
    const page = await getPage(alias);
    if (!page) {
        notFound();
    }
    return (
        <div>
            {page.title}
        </div>
    );
}
