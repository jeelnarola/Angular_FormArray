import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_FormArray';
  @ViewChild('emailinputsub') emailinputsub:any
  myForm!:FormGroup;
  fild=['Frontend Coding','Backend Coding']
  constructor(private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      emails:this.fb.array([]),
      developer:new FormControl('',[Validators.required]),
      skills:this.fb.array([])
    })
  }

  get emails(){
    return this.myForm.get('emails') as FormArray
  }
  get skills():FormArray{
    return this.myForm.get('skills') as FormArray
  }

  emailcontroler(): FormControl {
    return this.fb.control('', [Validators.required, Validators.email]); // Add email validator here
  }
 addEmail(){
  const email=this.fb.group({
    emailname:new FormControl('',[Validators.required,Validators.email])
  })
  this.emails.push(email)
 }

 addSkill(){
  const skill=this.fb.group({
    skillname:new FormControl('')
  })
  this.skills.push(skill)
 }
 removeEmail(i:any){
  this.emails.removeAt(i)
 }
 removeSkill(i:any){
  this.skills.removeAt(i)
 }
 postFromArray(){
  console.log("done",this.myForm.value);
 }

 get emailvalidation(){return this.myForm.get('email')}
 get developervalidation(){return this.myForm.get('developer')}
 get namevalidation(){return this.myForm.get('name')}
}
