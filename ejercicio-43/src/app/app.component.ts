import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent implements OnInit{
  title = 'ejercicio-43';

  public formLogin:FormGroup;
}

Constructor(private formBuilder:FormBuilder){

}

ngOnInit(): void {
  this.form = this.formBuilder.group(controlsConfig{
    email:['', [Validators.required, Validators.email]]
  })
}