import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

    {
        path: 'pokedex',
        loadChildren: () => import('../views/pokedex/pokedex.module').then(m => m.PokedexModule),
    },
    {
        path: '',
        loadChildren: () => import('../views/home/home.module').then(m => m.HomeModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
