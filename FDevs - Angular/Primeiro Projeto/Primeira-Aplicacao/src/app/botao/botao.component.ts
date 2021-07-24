import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  // DATA - BINDING
  public textoBotao: string = "Meu Componente Botao";
  public textoInput: string = "";

  constructor() {
   }

  ngOnInit(): void {
    this.textoBotao = "No! Noooo!";
  }

  public AddTexto(): void {
    if(this.textoInput == ""){
      this.textoInput = "Olá Mundo";
    }else{
      this.textoInput = ""; 
    }
  }

}
