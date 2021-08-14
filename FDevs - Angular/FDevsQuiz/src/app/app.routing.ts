import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes = [
   {
     path: '',
     Component: AppComponent,
     children: [
       {
         path: '',
         pathMatch: 'full',
         redirectTo: 'home'
       },
       {
         path: 'home',
         loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'quizzes/:id',
          loadChildren: () => import('./modules/questao/questao.module').then(m => m.QuestaoModule)
        }
     ]
   }
 ]

 @NgModule({
   declarations: [ ],
   imports: [
     RouterModule.forRoot(routes),
     CommonModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppRoutingModule { }
 