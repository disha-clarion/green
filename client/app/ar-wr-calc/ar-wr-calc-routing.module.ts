// core imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalculatorTypes } from '../shared/helpers/constants';

// application imports
import { ArWrCalcComponent } from "./ar-wr-calc.component";

const routes: Routes = [
    {
        path: '', component: ArWrCalcComponent, children: [
            {
                path: 'pressin',
                data: {
                    calculatorType: CalculatorTypes.WrArPressIn
                },
                loadChildren: () => import('./ar-wr-press-in/ar-wr-press-in.module').then(m => m.ArWrPressInModule)
            },
            {
                path: 'floating',
                data: {
                    calculatorType: CalculatorTypes.WrArFloating
                },
                loadChildren: () => import('./ar-wr-floating/ar-wr-floating.module').then(m => m.ArWrFloatingModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ArWrCalcRoutingModule { }
