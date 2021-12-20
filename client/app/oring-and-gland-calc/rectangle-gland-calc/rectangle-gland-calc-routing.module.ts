// core imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// application imports
import { RectangleGlandCalcComponent } from "./rectangle-gland-calc.component";
import { CalculatorTypes } from '../../shared/helpers/constants';

const routes: Routes = [
    {
        path: '', component: RectangleGlandCalcComponent, children: [
            { path: 'createRectangleGland', data: { calculatorType: CalculatorTypes.ORingInternalVacuumOnly }, loadChildren: () => import('./gland-size-rectangle-internal-vacuum-only/gland-size-rectangle-internal-vacuum-only.module').then(m => m.GlandSizeRectangleInternalVacuumOnlyModule) },
            { path: 'createDovetailGland', data: { calculatorType: CalculatorTypes.ORingDovetailGlandVacuumOnly }, loadChildren: () => import('./gland-size-dovetail-gland-vacuum-only/gland-size-dovetail-gland-vacuum-only.module').then(m => m.GlandSizeDovetailGlandVacuumOnlyModule) },
            { path: 'createHalfDovetailGland', data: { calculatorType: CalculatorTypes.ORingHalfDovetailGlandInternalVacuumOnly }, loadChildren: () => import('./gland-size-half-dovetail-gland-internal-vacuum-only/gland-size-half-dovetail-gland-internal-vacuum-only.module').then(m => m.GlandSizeHalfDovetailGlandInternalVacuumOnlyModule) },
            { path: 'createRectangleOdGland', data: { calculatorType: CalculatorTypes.ORingRectangularGlandExternalVacuumOnly }, loadChildren: () => import('./gland-size-rectangular-gland-external-vacuum-only/gland-size-rectangular-gland-external-vacuum-only.module').then(m => m.GlandSizeRectangularGlandExternalVacuumOnlyModule) }
        ],
    }
];

@NgModule(
    {
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    }
)
export class RectangleGlandCalcRoutingModule {
}