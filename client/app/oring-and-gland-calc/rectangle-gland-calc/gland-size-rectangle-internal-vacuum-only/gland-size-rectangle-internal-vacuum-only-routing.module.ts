import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GlandSizeRectangleInternalVacuumOnlyComponent } from "./gland-size-rectangle-internal-vacuum-only.component";

const routes: Routes = [
    { path: '', component: GlandSizeRectangleInternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GlandSizeRectangleInternalVacuumOnlyRoutingModule { }