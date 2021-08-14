import { QuestaoRoutingModule } from './questao.routing';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { QuestaoComponent } from "./questao/questao.component";
import { IndicadorQuestaoComponent } from './indicador-questao/indicador-questao.component';

@NgModule({
    declarations: [
     QuestaoComponent,
     IndicadorQuestaoComponent,
   ],
    imports: [
      CommonModule,
      QuestaoRoutingModule,
    ],
  })
 export class QuestaoModule {}