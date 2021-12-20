// core imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// application imports
import { OringAndGlandCalcComponent } from "./oring-and-gland-calc.component";

const routes: Routes = [
  {
    path: '',
    component: OringAndGlandCalcComponent,
    children: [
      { path: 'evaluateoringglands', loadChildren: () => import('./rectangular-o-ring-calc/rectangular-o-ring-calc.module').then(m => m.RectangularORingCalcModule) },
      { path: 'evaluateglandsizecalculatorsglands', loadChildren: () => import('./rectangle-gland-calc/rectangle-gland-calc.module').then(m => m.RectangleGlandCalcModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ORingAndGlandCalcRoutingModule { }
