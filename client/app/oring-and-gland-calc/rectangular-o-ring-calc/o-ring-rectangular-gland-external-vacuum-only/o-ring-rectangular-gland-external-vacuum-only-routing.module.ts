import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ORingRectangularGlandExternalVacuumOnlyComponent } from "./o-ring-rectangular-gland-external-vacuum-only.component";

const routes: Routes = [
    { path: '', component: ORingRectangularGlandExternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ORingRectangularGlandExternalVacuumOnlyRoutingModule { }