import { Component } from '@angular/core';
import { Student } from './student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prescilla Angular Project';
  isAddStudent=false;
  studentList: Student[] = [
    {
      id: 0,
      firstName: "Prescilla",
      lastName: "Pable",
      age: 21,
      nationality: "Filipino",
      degree: "Student",
      gender: "Female",
      homeAddress: "Medellin, Cebu",
      status: "Single",
      elementarySchool: "Daanlungsod Elementary School",
      highSchool: "Medellin National HighSchool",
      collegeSchool: "USC"
    },
    {
      id: 1,
      firstName: "Rhev Anthony",
      lastName: "Auman",
      age: 21,
      nationality: "Filipino",
      degree: "Student",
      gender: "Male",
      homeAddress: "Oslob, Cebu",
      status: "Single",
      elementarySchool: "Boystown Elementary School",
      highSchool: "Boystown HighSchool",
      collegeSchool: "UC"
    },
    {
      id: 2,
      firstName: "Brian ",
      lastName: "Pable",
      age: 18,
      nationality: "Filipino",
      degree: "Student",
      gender: "Male",
      homeAddress: "Medellin, Cebu",
      status: "Single",
      elementarySchool: "Daanlungsod Elementary School",
      highSchool: "Medellin National HighSchool",
      collegeSchool: "USC"
    }
  ]
  addStudent(student: Student){

    this.studentList.push(student)
    this.isAddStudent=false;

  }

  addNewStudent(){
    this.isAddStudent=true;

  }
}
