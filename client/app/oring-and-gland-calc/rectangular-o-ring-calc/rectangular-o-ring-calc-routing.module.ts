// core imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// application imports
import { RectangularORingCalcComponent } from "./rectangular-o-ring-calc.component";
import { CalculatorTypes } from '../../shared/helpers/constants';

const routes: Routes = [
    {
        path: '', component: RectangularORingCalcComponent, children: [
            { path: 'createRectangularORing', data: { calculatorType: CalculatorTypes.ORingInternalVacuumOnly }, loadChildren: () => import('./o-ring-internal-vacuum-only/o-ring-internal-vacuum-only.module').then(m => m.ORingInternalVacuumOnlyModule) },
            { path: 'createDovetailORing', data: { calculatorType: CalculatorTypes.ORingDovetailGlandVacuumOnly }, loadChildren: () => import('./o-ring-dovetail-gland-vacuum-only/o-ring-dovetail-gland-vacuum-only.module').then(m => m.ORingDovetailGlandVacuumOnlyModule) },
            { path: 'createHalfDovetailGland', data: { calculatorType: CalculatorTypes.ORingHalfDovetailGlandInternalVacuumOnly }, loadChildren: () => import('./o-ring-half-dovetail-gland-internal-vacuum-only/o-ring-half-dovetail-gland-internal-vacuum-only.module').then(m => m.ORingHalfDovetailGlandInternalVacuumOnlyModule) },
            { path: 'createRectangleOdGland', data: { calculatorType: CalculatorTypes.ORingRectangularGlandExternalVacuumOnly }, loadChildren: () => import('./o-ring-rectangular-gland-external-vacuum-only/o-ring-rectangular-gland-external-vacuum-only.module').then(m => m.ORingRectangularGlandExternalVacuumOnlyModule) }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RectangularORingCalcRoutingModule { }