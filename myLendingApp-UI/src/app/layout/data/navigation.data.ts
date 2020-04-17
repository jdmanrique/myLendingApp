import { INavItem } from './../models/navigation.model';

export const sideNavItems: INavItem[] = [
    {
        id: 'navDashboard',
        icon: 'dashboard',
        text: 'Dashboard',
        link: '/dashboard',
        isCollapsed: true
    },
    {
        id: 'navAdmin',
        icon: 'admin',
        text: 'Admin',
        submenu: [
            {
                id: 'navAdminUsers',
                text: 'Users',
                link: '/admin/users'
            },
            {
                id: 'navAdminBanks',
                text: 'Banks',
                link: '/admin/banks'
            },
        ],
        isCollapsed: true 
    },
    {
      id: 'navWorkspace',
      icon: 'workspace',
      text: 'Workspace',
      submenu: [
          {
              id: 'navCollections',
              text: 'Collections',
              link: '/workspace/collections'
          },
          {
              id: 'navLoanPenalty',
              text: 'Loan Penalty',
              link: '/workspace/loanpenalty'
          },
      ],
      isCollapsed: true
    },
    {
      id: 'navMasterfile',
      icon: 'masterfile',
      text: 'Masterfile',
      isCollapsed: true
    },
    {
      id: 'navFunding',
      icon: 'funding',
      text: 'Funding',
      isCollapsed: true
    },
    {
      id: 'navReports',
      icon: 'reports',
      text: 'Reports',
      isCollapsed: true
    }     
];
