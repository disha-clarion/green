import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ORingInternalVacuumOnlyComponent } from "./o-ring-internal-vacuum-only.component";

const routes: Routes = [
    { path: '', component: ORingInternalVacuumOnlyComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ORingInternalVacuumOnlyRoutingModule { }