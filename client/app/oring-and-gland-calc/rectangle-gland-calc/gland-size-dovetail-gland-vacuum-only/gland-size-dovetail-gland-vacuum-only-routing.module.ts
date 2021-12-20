import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GlandSizeDovetailGlandVacuumOnlyComponent } from "./gland-size-dovetail-gland-vacuum-only.component";

const routes: Routes = [
    {
        path: '', component: GlandSizeDovetailGlandVacuumOnlyComponent, pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GlandSizeDovetailGlandVacuumOnlyRoutingModule { }