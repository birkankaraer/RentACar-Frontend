import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactAddForm: FormGroup;

  constructor(private toastrService:ToastrService, private formBuilder:FormBuilder, private contactService:ContactService){}


  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm(){
    this.contactAddForm = this.formBuilder.group({
      ad:["",Validators.required],
      ePosta:["",Validators.required],
      konu:["",Validators.required],
      mesaj:["",Validators.required]
    });
  }

  add(){
    if(this.contactAddForm.valid){
      let contactModel = Object.assign({},this.contactAddForm.value);
      this.contactService.add(contactModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı",{
          progressBar:true
        })
      })
    }else{
      this.toastrService.error("Formunuz eksik","Hata",{
        progressBar:true
      })
    }
  }

}
