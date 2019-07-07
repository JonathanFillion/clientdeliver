import { Component , ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations:[

	trigger('changeDivSize', [
		state('initial', style({
			backgroundColor: 'green',
			width: '100px',
			height: '100px'
		})),
		state('final', style({
			backgroundColor: 'red',
			width: '200px',
			height: '200px'
		})),
		transition('initial=>final', animate('1500ms')),
		transition('final=>initial', animate('1000ms'))
		]),
	]
})
export class AppComponent {
	title = 'deliverclient';

	constructor(private router: Router,private elementRef: ElementRef) {

	}

	ngOnInit() {
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'url("assets/background/thirdBackground.jpg")';
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "100% 100%";
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundRepeat = "no-repeat";
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundAttachment = "fixed";
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosidtion = "center";
		this.elementRef.nativeElement.ownerDocument.body.style.height = "100%";
		this.elementRef.nativeElement.ownerDocument.body.style.width = "100%";
		console.log(this.elementRef.nativeElement.ownerDocument.body.style)

	}


	currentState = 'initial';

	changeState() {
  	this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
	}

}
