import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter:EventEmitter<string>=new EventEmitter();
  @Output() onDebaounce: EventEmitter<string>=new EventEmitter();
  @Input() placeHolder:string = ''; 

  debouncer: Subject<string>= new Subject();

  termino:string=''; 
  constructor() { }

  ngOnInit(): void {
    this.debouncer.
    pipe(
      debounceTime(300) 
    )
    .subscribe(valor =>{
      this.onDebaounce.emit(valor);  
    })
  }
  buscar(){
    this.onEnter.emit( this.termino ); 
  }
  teclaPresionada(){
    this.debouncer.next(this.termino); 
  }

}
