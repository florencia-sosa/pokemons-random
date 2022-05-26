import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokedexFacade } from './pokedex.facade';


@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, PokedexRoutingModule],
  exports: [PokedexComponent],
  providers: [PokedexFacade],
})
export class PokedexModule { }