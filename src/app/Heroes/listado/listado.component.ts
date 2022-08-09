import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../Heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string []= ['Santa Fe','Colombia'];

  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
