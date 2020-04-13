export interface INavItem {
    id: string;
    icon?: string;
    text: string;
    link?: string;
    submenu?: INavItem[];
}

export interface INavItems {
    [index: string]: INavItem;

}
