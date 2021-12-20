import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ORingHalfDovetailGlandInternalVacuumOnlyComponent } from "./o-ring-half-dovetail-gland-internal-vacuum-only.component";

const routes: Routes = [
    { path: '', component: ORingHalfDovetailGlandInternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ORingHalfDovetailGlandInternalVacuumOnlyRoutingModule { }