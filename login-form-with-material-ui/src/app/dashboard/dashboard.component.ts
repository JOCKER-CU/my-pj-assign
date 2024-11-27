import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private studentService: StudentService, private authService: AuthService) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
    })
  }



  // onSubmit() {
  //   console.log(this.userForm)
  //   if (this.userForm.valid) {
  //     // alert(email+ " and "+ password);
  //     let student = this.studentService.getStudents().subscribe(
  //         (students: Student[]) => {
  //        students.find(
  //          std => std.email === this.userForm.get('email')?.value &&
  //            std.password === this.userForm.get('password')?.value &&
  //            std.status == 'active'

  //       );
  //         if (student) {

  //           this.router.navigate(['/studentComponent'])
  //         } else {
  //           console.log(this.authService.getToken());
  //           this.router.navigate(['**']);
  //         } 

  //       });


  //   } else {
  //     this.router.navigate(['**'])
  //   }
  // }

  // onSubmit() {
  //   if (this.userForm.valid) {
  //     const { email, password } = this.userForm.value;
  //     this.authService.login(email, password).subscribe(
  //       success => {
  //         if (success) {
  //           this.router.navigate(['/studentComponent']);
  //         } else {
  //           alert('Login failed');
  //           this.router.navigate(['**'])
  //         }
  //       }
  //     );
  //   } else {
  //     alert('Form is invalid');
  //     this.router.navigate(['**'])
  //   }
  // }

  // async onSubmit() {
  //   if (this.userForm.valid) {
  //     const { email, password } = this.userForm.value;
  //     try {
  //       const success = await this.authService.login(email, password);
  //       if (success) {
  //         this.router.navigate(['/studentComponent']);
  //       } else {
  //         alert('Login failed');
  //         this.router.navigate(['**']);
  //       }
  //     } catch (error) {
  //       console.error('Login error', error);
  //       alert('An error occurred during login');
  //       this.router.navigate(['**']);
  //     }
  //   } else {
  //     alert('Form is invalid');
  //     this.router.navigate(['**']);
  //   }
  // }

  onSubmit() {
    if (this.userForm.valid) {
      const { email, password } = this.userForm.value;
      this.authService.login(email, password).then(success => {
        if (success) {
          this.router.navigate(['/studentComponent']);
        } else {
          alert('Login failed');
          this.router.navigate(['**']);
        }
      }).catch(error => {
        console.error('Login error', error);
        alert('An error occurred during login');
        this.router.navigate(['**']);
      });
    } else {
      alert('Form is invalid');
      this.router.navigate(['**']);
    }
  }





  forgetPassword() {

    this.router.navigate(['/forgetPassword']);
    console.log("forget Password is worked!")
  }


  // loadStudents() {
  //   this.studentService.getStudents().subscribe(
  //     (data: Student[]) => {
  //       this.students = data;
  //       console.log(this.students + "is data")
  //     },
  //     (error) => {
  //       console.error('Error fetching students', error);
  //     }
  //   );
  // }
}
