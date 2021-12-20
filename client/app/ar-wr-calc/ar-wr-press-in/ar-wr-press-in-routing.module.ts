// core imports
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// application imports
import { ArWrPressInComponent } from "./ar-wr-press-in.component";

const routes: Routes = [
    { path: '', component: ArWrPressInComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ArWrPressInRoutingModule { }
