import { ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { ReactComponent as Blogger} from './../icons/search.svg'

export interface IMenuItem {
    to: string;
    icon: any;
    title: string;
    fontIcon: string;
    styles?: any;
    rights?: any[],
    iconStyles?: any;
    isProjectMenu?: boolean;
    hasBullet?: string;
    children?: IMenuItem[];
    showTextThumb?: boolean;
    thumbColor?: string;
}


export const listMenuItem = () => {
    return [
        {
            to: '/home',
            icon: '/img/menuIcons/home_clone.svg',
            title: 'Home',
            fontIcon: 'bi-app-indicator',
        },
        {
            to: '/blog',
            icon: '/img/menuIcons/blogger.svg',
            title: 'Blog',
            fontIcon: 'bi-app-indicator',
        },
        {
            to: '/todo',
            icon: '/img/menuIcons/todo.svg',
            title: 'Todo',
            fontIcon: 'bi-app-indicator',
        },
        {
            to: '/funny',
            icon: '/img/menuIcons/funny.svg',
            title: 'Funny',
            fontIcon: 'bi-app-indicator',
        }
    ]
}