import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
import {MycoursesService} from "./mycourses.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

    allCourses;
    enrolledCourses;

    constructor(private mycourses: MycoursesService) { }

    ngOnInit() {
        // this.home.myCourses(null).subscribe(data => {
        //     this.dashCounts = data
        // });

        this.allCourses = this.mycourses.allCourses();
        this.enrolledCourses = this.mycourses.myCourses(null);
    }

}
