import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
  {
    path: 'loan-applications',
    loadChildren: () =>
      import('./loan-applications/loan-applications.module').then((m) => m.LoanApplicationsModule),
  },

  {
    path: 'employees',
    loadChildren: () =>
      import('./employee-management/employee-management.module').then((m) => m.EmployeeManagementModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user-management/user-management.module').then((m) => m.UserManagementModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product-management/product-management.module').then((m) => m.ProductManagementModule),
  },
  {
    path: 'corporates',
    loadChildren: () =>
      import('./corporates-management/corporates-management.module').then((m) => m.CorporatesManagementModule),
  }
  // {
  //   path: 'loan-applications',
  //   loadChildren: () =>
  //     import('./loan-applications/loan-applications.module').then((m) => m.LoanApplicationsModule),
  // },
]
export { Routing };
