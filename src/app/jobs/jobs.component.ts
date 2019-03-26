//import DataService to use  data returned by api here
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'; 
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"]
})
export class JobsComponent implements OnInit {
  jobDetails: Object;
  jobDescription = "";
  jobLocation = "";
  jobFullTime = false;
  error = "";

  constructor(private data: DataService, private http: HttpClient) {}

  ngOnInit() {
    console.log('Init done');
    this.data.getJobDetails().subscribe(data => {
      debugger;
      this.jobDetails = data;
      console.log(this.jobDetails);
    });
  }

  fetchJobData = function() {
    let url = "https://damp-caverns-43990.herokuapp.com/jobs?" +
      "description=" + this.jobDescription +
      "&location=" + this.jobLocation +
      (this.jobFullTime ? "&full_time=" + this.jobFullTime : "");
      
      console.log(url);

    this.http.get(url).subscribe(data => {
      debugger;
      this.jobDetails = data;
      console.log(this.jobDetails);
    });

    // this.http.get(url).then(
    //   function (response) {
    //     console.log(response.data);
    //     if (!response.data.length) {
    //       $scope.error =
    //         "Job Not Found" +
    //         ($scope.jobLocation ? " Near " + $scope.jobLocation : "");
    //     }
    //     $scope.jobDetails = response.data;
    //   },
    //   function (response) {
    //     console.log("Error " + response.status);
    //   }
    // );

    
  };
}
