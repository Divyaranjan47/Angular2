import { Component } from '@angular/core';
import { Exam } from './exam';

@Component ({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<p>{{exam.name}} Details</p>
				<label>{{exam.id}}</label>
				<input type="text" [(ngModel)]="exam.name" placeholder="Enter name"/>
				<ul>
					<li *ngFor="let notification of notifications">{{notification.name}}</li>
				</ul>`
})
export class ExamComponent {
	title = 'Exam Portal';
	exam: Exam = {
		id: 2,
		name: 'LAQ'
	}
	notifications = [
		{
			id:1,
			name: "Class1 exam result is out"
		},
		{
			id:2,
			name: "Class1 exam result is out"
		},
		{
			id:3,
			name: "Class1 exam result is out"
		},
		{
			id:4,
			name: "Class1 exam result is out"
		}

	]

}