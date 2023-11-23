import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { LOGIN_USER } from 'src/assets/graphql/queries';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  public loginForm!: FormGroup;
  public error:string='';
  constructor(private apollo: Apollo,private fb: FormBuilder,private _router: Router, private modalController: ModalController) { 
      this.loginForm       = this.fb.group({
      email    : ['', [Validators.required]],
      password    : ['', [Validators.required]]
      });
  }


  ngOnInit() {
    const fromModal = this._router.getCurrentNavigation()?.extras.state?.['fromModal'];
  
    if (fromModal) {
      this.closeModal();
    }
  }

  async closeModal() {
    const modal = await this.modalController.getTop();
    if (modal) {
      modal.dismiss();
    }
  }

onLogin(){    
  this.apollo.mutate({
    mutation: LOGIN_USER,
    variables: {
      email  : this.loginForm.value.email,
      password  : this.loginForm.value.password
    },
  })
  .subscribe((data: any) => {
    this.loginForm.reset();
    localStorage.setItem('token',data.data.login.accessToken);
    this._router.navigate([''])
  },
  (error: any) => {
    this.error = 'Identifiants incorrects veuillez reessayer'
  })
}

}
