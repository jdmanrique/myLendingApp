import { INavItems, INavItem } from './../models/navigation.model';

export const sideNavItems: INavItem[] = [
    {
        id: 'navDashboard',
        icon: 'dashboard',
        text: 'Dashboard',
        link: '/dashboard'
    },
    {
        id: 'navManage',
        icon: 'manage',
        text: 'Manage',
        submenu: [
            {
                id: 'navManageUsers',
                text: 'Users',
                link: '/manage/users'
            },
            {
                id: 'navManageBanks',
                text: 'Banks',
                link: '/manage/banks'
            },
        ],
}];
