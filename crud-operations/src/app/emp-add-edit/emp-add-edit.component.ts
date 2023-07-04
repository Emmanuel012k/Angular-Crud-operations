import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{
   public get data(): any {
     return this._data;
   }
   public set data(value: any) {
     this._data = value;
   }
   empForm: FormGroup;

   education: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Graduate',
    'Mca',
    'Mba',
    'Post Graduate'
   ];
   constructor(
    private _fb: FormBuilder,
     private _empService:EmployeeService,
      private _dialogRef:MatDialogRef<EmpAddEditComponent>,
      @Inject(MAT_DIALOG_DATA) public _data: any

      ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName:'',
      email: '',
      dob: '',
      gender:'',
      education: '',
      company:'',
      experience:'',
      package:''
    });
   }

   ngOnInit(): void {
     this.empForm.patchValue(this.data);
   }

   onFormSubmit(){
    if(this.empForm.valid) {
      if(this.data){
        this._empService.UpdateEmployee(this.data.id,this.empForm.value).subscribe({
        next: (val:any) => {
          alert('Employee detail Updated')
          this._dialogRef.close(true);
        },
        error : (err:any) => {
          console.error(err);
        },
      });
      }else{ 
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val:any) => {
          alert('Employee Added Successfully')
          this._dialogRef.close(true);
        },
        error : (err:any) => {
          console.error(err);
        },
      });
    }
   }
}
}
