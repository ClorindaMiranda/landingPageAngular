import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy{

  formularioContacto: FormGroup
  //activeUser: string='';
  roleUser: string='Administrator'
  typeUser: any;
 

  constructor( private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', Validators.required],
      password:['', Validators.required],
      typeUser:['']
    })
  }
  ngOnInit(): void {
    this.formularioContacto.get('typeUser')?.valueChanges.subscribe(value => {
      this.typeUser = value
    })
    //this.formularioContacto.get('name')?.setValue(this.activeUser)
    //this.formularioContacto.get('name')?.disable()
  }

  ngOnDestroy(): void {
    console.log('se destruyó el componente');
  }
  hasError(controlName: string , errorType: string ){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }
  enviar(){
    console.log(this.formularioContacto)
  }
}
