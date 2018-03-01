import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../components';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {

        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Explore the trends!',
                text:
                    'Key focus on emerging technologies and trends!'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Best customer statisfaction!',
                text: 'Garenteed.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Seamless support',
                text: 'Backedup with AWS cloud ensure high availability!'
            }
        );

    }

    ngOnInit() {
    }

}
