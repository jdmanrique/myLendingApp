export interface INavItem {
    id: string;
    iconclass?: string;
    text: string;
    link?: string;
    submenu?: INavItem[];
    isCollapsed?: boolean;
}

export interface INavItems {
    [index: string]: INavItem;

}
