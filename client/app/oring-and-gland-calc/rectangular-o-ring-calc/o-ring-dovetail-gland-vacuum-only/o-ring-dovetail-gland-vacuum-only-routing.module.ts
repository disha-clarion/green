import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ORingDovetailGlandVacuumOnlyComponent } from "./o-ring-dovetail-gland-vacuum-only.component";

const routes: Routes = [
    {
        path: '', component: ORingDovetailGlandVacuumOnlyComponent, pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ORingDovetailGlandVacuumOnlyRoutingModule { }