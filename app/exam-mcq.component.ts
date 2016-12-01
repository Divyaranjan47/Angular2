import { Component } from '@angular/core';

@Component ({
	selector: 'my-ques',
	template: `<p>I AM MCQ</p>
				<p>Test a new Component {{name}}</p>
				 `
})
export class ExamMcqComponent {
	name = 'MCQ';
 }
