import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Student } from './../student';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  todaydate:any;
  newcomponentproperty:any;
  newcomponent = "Entered in newcomponent";
  url = `http://localhost:8060/students`;
  students= new Array<Student>();
  items : any;
  
  
  constructor(private myservice: MyserviceService,private http: HttpClient) {
  this.http.get(this.url).toPromise().then(data => {
  //  this.items.push(data);
     console.log(data);
      this.items = JSON.parse(JSON.stringify(data));
    //this.students = data;
   });

  //    this.http
   //  .get(this.url)
   //   .subscribe(response => this.items = response.data); 
 // MyserviceService.getStudents().subscribe(response=> 
   // {
   //   this.students = response.map(item => 
    //  {
    //    return new Student( 
      //      item.id,
      //      item.name,
      //      item.status
      //  );
     // });
    //});
    //this.http.get(this.url).subscribe(data => {
  
   // this.items.push(data); // Pushing data to declared array variable

   
    
   // }, error => console.error(error));


    this.myservice.getStudents().subscribe((data)=>{
      console.log(data);
      this.students = data;
     
    });  
    this.myservice.getStudents().
    subscribe(
      (data)=>
      {
        //this.items = JSON.parse(JSON.stringify(data));
     }
   );
  }
  ngOnInit() {
     this.todaydate = this.myservice.showTodayDate();
     this.newcomponentproperty = this.myservice.serviceproperty;
   
  }

}
