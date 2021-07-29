import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent implements OnInit {
  termino:string = ""; 
  alerta:boolean = false; 
  paises: Country[]=[]; 
  paisesSugeridos: Country[]=[]; 
  mostrarSugerencias: boolean=false; 
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.alerta=false;
    this.termino=termino;
    this.paisService.buscarPais(this.termino).subscribe(
      resp=>{
        console.log(resp); 
        this.paises = resp; 
        
      },
      error=>{
        this.alerta=true;
        this.paises=[]; 
        console.log("error", error); 
      }
    ); 
  }
  sugerencias(termino:string){
    this.alerta=false; 
    this.termino=termino; 
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino).subscribe(paises =>{
      this.paisesSugeridos=paises.splice(0,6); //los 6 primeros
    },  (erro)=>{
      this.paisesSugeridos=[]; 
    });
  }
  buscarSugerido(termino: string){
    this.buscar(termino); 
    
  }
}
