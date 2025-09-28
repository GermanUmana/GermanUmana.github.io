import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormsModule, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  registroForm!:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.registroForm=this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(2)]],
      apellido:['',[Validators.required, Validators.minLength(2)]],
      email:['',[Validators.required, Validators.email]],
      contraseña:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit():void{
    if(this.registroForm.valid){
      alert('Registro Exitoso')
      this.registroForm.reset();
    } else{
      this.registroForm.markAllAsTouched();
      alert('Por favor completar los campos correctamente')  
    }
  }

}
