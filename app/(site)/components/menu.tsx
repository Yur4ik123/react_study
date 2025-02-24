import {getMenu} from "@/api/menu";

export async function Menu() {
    const menu = await getMenu(0);
    return (
        <div>
            <ul>
                {menu.map(m => (
                    <li key={m._id.secondCategory}>
                        {m._id.secondCategory}
                    </li>
                ))}
            </ul>
        </div>
    );
}