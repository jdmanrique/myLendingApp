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
        isCollapsed: true 
    },
    {
      id: 'navWorkspace',
      icon: 'workspace',
      text: 'Workspace',
      link: '/workspace',
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
      link: '/masterfile',
      isCollapsed: true
    },
    {
      id: 'navFunding',
      icon: 'funding',
      text: 'Funding',
      link: '/funding',
      isCollapsed: true
    },
    {
      id: 'navReports',
      icon: 'reports',
      text: 'Reports',
      link: '/reports',
      isCollapsed: true
    }     
];
