import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam.component';
import { ExamMcqComponent } from './exam-mcq.component';



@NgModule({
  imports: [ BrowserModule, FormsModule, 
      RouterModule.forRoot([
	      {
	        path: 'exam',
	        component: ExamComponent
	      },
	      {
	      	path: 'mcq',
	      	component: ExamMcqComponent
	      }, {
	      	path: '',
	      	redirectTo: '/exam',
	      	pathMatch: 'full'
	      }
	    ]) 
      ],
  declarations: [ AppComponent, ExamComponent, ExamMcqComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
