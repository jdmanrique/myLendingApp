import { INavItem } from './../models/navigation.model';

export const sideNavItems: INavItem[] = [
    {
        id: 'navDashboard',
        iconclass: 'home',
        text: 'Dashboard',
        link: '/dashboard',
        isCollapsed: true
    },
    {
        id: 'navAdmin',
        text: 'Admin',
        iconclass: 'cog',
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
            {
              id: 'navChargeTypes',
              text: 'Charge Types',
              link: '/admin/chargetypes'
            },
            {
              id: 'navLoanTypes',
              text: 'Loan Types',
              link: '/admin/loantypes'
            },
            {
              id: 'navAgents',
              text: 'Agents',
              link: '/admin/agents'
            }
        ],
        isCollapsed: true 
    },
    {
      id: 'navWorkspace',
      text: 'Workspace',
      iconclass: 'laptop',
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
      text: 'Masterfile',
      iconclass:'address-book',
      isCollapsed: true
    },
    {
      id: 'navFunding',
      iconclass: 'coins',
      text: 'Funding',
      isCollapsed: true
    },
    {
      id: 'navReports',
      iconclass: 'file-invoice',
      text: 'Reports',
      isCollapsed: true
    }     
];
