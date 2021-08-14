import { Alternativa } from './../../../shared/models/types/alternativa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.scss']
})
export class QuestaoComponent implements OnInit {
  public titulo: string = "O que é uma API RESTFull?";

  public alternativas: Alternativa[] = [
    {
      codigo: 1,
      correta: false,
      titulo: "Application Programming Interface"
    },
    {
      codigo: 2,
      correta: true,
      titulo: "API que segue os padrões definidos pela arquitetura Rest"
    },
    {
      codigo: 3,
      correta: false,
      titulo: "Representational State Transfer"
    },
    {
      codigo: 4,
      correta: false,
      titulo: "É o caminho mais conhecido nas transferências de dados"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
