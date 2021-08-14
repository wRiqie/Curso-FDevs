import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { QuestaoComponent } from "./questao/questao.component";

export const routes = [
    {
       path:'',
       component: QuestaoComponent,
    }
 ]
 
 @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],
  })
 export class QuestaoRoutingModule {}