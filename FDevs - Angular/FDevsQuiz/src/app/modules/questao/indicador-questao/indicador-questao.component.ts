import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indicador-questao',
  templateUrl: './indicador-questao.component.html',
  styleUrls: ['./indicador-questao.component.scss']
})
export class IndicadorQuestaoComponent implements OnInit {
  public questao: string = "01";

  constructor() { }

  ngOnInit(): void {
  }

}
