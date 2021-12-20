import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GlandSizeRectangularGlandExternalVacuumOnlyComponent } from "./gland-size-rectangular-gland-external-vacuum-only.component";

const routes: Routes = [
    { path: '', component: GlandSizeRectangularGlandExternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GlandSizeRectangularGlandExternalVacuumOnlyRoutingModule { }