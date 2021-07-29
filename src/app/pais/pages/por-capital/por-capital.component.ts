import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino:string = ""; 
  alerta:boolean = false; 
  paises: Country[]=[]; 
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.alerta=false;
    this.termino=termino;
    this.paisService.buscarCapital(this.termino).subscribe(
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


}
