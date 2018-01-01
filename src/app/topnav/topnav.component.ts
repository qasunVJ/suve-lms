import { Component, OnInit } from '@angular/core';
import {MycoursesService} from "../mycourses/mycourses.service";

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    allCourses;

    constructor(private courses: MycoursesService) { }

    ngOnInit() {
        this.allCourses = this.courses.allCourses();
    }

}
