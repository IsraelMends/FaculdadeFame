import {ReactNode} from "react";

export interface HeaderNavBottomListItemProps {
    title: string,
    img: ReactNode,
    href: string,
}

export function HeaderNavBottomListItem({img, title, href}: HeaderNavBottomListItemProps) {
    return (
        // text-(var(--black-green))
        <a className="font-medium  text-white cursor-pointer hover:text-white/90  flex gap-2 justify-center" href={`#${href}`}>
            {img}
            {title}
        </a>
    )
}