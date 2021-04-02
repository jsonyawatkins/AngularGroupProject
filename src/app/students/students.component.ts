import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../mo-students';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  students = STUDENTS;

  selectedStudent?: Student;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

}
