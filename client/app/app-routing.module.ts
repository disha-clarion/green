import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorGroup } from './shared/helpers/constants';

const routes: Routes = [
  {
    path: 'oringgland',
    data:
    {
      calculatorGroup: CalculatorGroup.ORingNGlandCalcs
    },
    loadChildren: () => import('./oring-and-gland-calc/oring-and-gland-calc.module').then(m => m.ORingAndGlandCalcModule)
  },
  {
    path: 'wrar',
    data: { calculatorGroup: CalculatorGroup.WrArCalcs }, loadChildren: () => import('./ar-wr-calc/ar-wr-calc.module').then(m => m.ArWrCalcModule)
  },
  {
    path: '',
    redirectTo: 'oringgland/evaluateglandsizecalculatorsglands/createRectangleGland',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
