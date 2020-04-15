export interface INavItem {
    id: string;
    icon?: string;
    text: string;
    link?: string;
    submenu?: INavItem[];
    isCollapsed?: boolean;
}

export interface INavItems {
    [index: string]: INavItem;

}
