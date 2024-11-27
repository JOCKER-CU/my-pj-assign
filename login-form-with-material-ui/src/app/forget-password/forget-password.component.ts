import { Component } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  imports: [CommonModule, ReactiveFormsModule,RouterModule]
})
export class ForgetPasswordComponent {
  forgotPasswordForm!: FormGroup;
  password!: string;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,

  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.forgotPasswordForm);
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      const date = this.forgotPasswordForm.get('date')?.value;

      this.studentService.getStudents().then(
        (students: Student[]) => {
          const student = students.find(
            s => s.email === email && s.date === date
          );

          if (student) {
            this.password = student.password;
          } else {
            alert('Invalid email or date of birth');
          }
        }
      );
    } else {
      alert('Please fill in the form correctly');
    }
  }
}