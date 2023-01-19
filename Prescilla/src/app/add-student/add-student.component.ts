import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  ngOnInit(){
    this.studentForm.reset();

  }
  @Output() studentOut = new EventEmitter();
  studentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    homeAddress: new FormControl(''),
    status: new FormControl(''),
    nationality: new FormControl(''),
    degree: new FormControl(''),
    elementarySchool:new FormControl(''),
    highSchool:new FormControl(''),
    collegeSchool:new FormControl(''),
  });
  addStudent() {
    // console.log(this.studentForm.value);
    this.studentOut.emit(this.studentForm.value)

  }
}
