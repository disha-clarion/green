// core imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// application imports
import { ArWrFloatingComponent } from "./ar-wr-floating.component";

const routes: Routes = [
    { path: '', component: ArWrFloatingComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ArWrFloatingRoutingModule { }
