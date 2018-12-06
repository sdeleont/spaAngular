import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  
  heroe:any={};
  imag:string;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
      if(this.heroe.casa=="Marvel"){
          this.imag="marvel.png";
      }else if (this.heroe.casa=="DC"){
        this.imag="DC.png";
      }
    } )
    
  }

  

}
