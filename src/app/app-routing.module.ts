import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '@component/main-page/main-page.component';
import { PortfolioPageComponent } from '@component/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'portfolio',
        component: PortfolioPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
