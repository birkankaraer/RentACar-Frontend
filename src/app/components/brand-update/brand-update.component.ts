import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandUpdateForm : FormGroup

  constructor(private formBuilder:FormBuilder, private brandService:BrandService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }

  update(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      this.brandService.update(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message, "Başarılı", {
          progressBar:true
        })
      })
    }else{
      this.toastrService.error("Formunuz eksik", "Hata",{
        progressBar:true
      })
    }
  }

}
