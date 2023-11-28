import { Component, OnInit } from '@angular/core';
import { REGISTER_USER } from 'src/assets/graphql/queries';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  public registerForm!: FormGroup;
 
  constructor(private apollo: Apollo,private fb: FormBuilder,private _router: Router) { 
      this.registerForm       = this.fb.group({
      firstName              : ['', [Validators.required]],
      lastName   : ['', [Validators.required]],
      email    : ['', [Validators.required]],
      password    : ['', [Validators.required]]
      });
  }


  ngOnInit() {}

onRegister(){    
  this.apollo.mutate({
    mutation: REGISTER_USER,
    variables: {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email  : this.registerForm.value.email,
      password  : this.registerForm.value.password
    },
  })
  .subscribe((data: any) => {
    this.registerForm.reset();
    this._router.navigate(['login']);
  },
  (error: any) => {
    console.log(error)
  })
}
}
   


