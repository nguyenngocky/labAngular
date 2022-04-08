import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-school-add-page',
  templateUrl: './school-add-page.component.html',
  styleUrls: ['./school-add-page.component.css']
})
export class SchoolAddPageComponent implements OnInit {

  schoolForm: FormGroup;
  id :any;
  schoolDetail:any;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private ps: SchoolService,
    private toastr: ToastrService
  ) { 
    this.schoolForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      start_at: new FormControl('', [Validators.required]),
      complete_at: new FormControl('', [Validators.required]),
      achievement: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.schoolDetail = {
        name: "",
        start_at: "",
        complete_at: "",
        achievement: "",
      };
      this.onGetList();
    }
  }

  onGetList(){
    this.ps.getSchool(this.id).subscribe(data => {
      this.schoolDetail = data;
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateSchool(this.id, obj).subscribe();
      this.router.navigate(['/admin/school']);
      this.toastr.success("Cập nhật thành công")
  
    }else {
      this.ps.createSchool(obj).subscribe();
      this.router.navigate(['/admin/school']);
      this.toastr.success("Thêm mới thành công")
  
    }
  }

}
