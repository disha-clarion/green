import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent } from "./gland-size-half-dovetail-gland-internal-vacuum-only.component";

const routes: Routes = [
    { path: '', component: GlandSizeHalfDovetailGlandInternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GlandSizeHalfDovetailGlandInternalVacuumOnlyRoutingModule { }