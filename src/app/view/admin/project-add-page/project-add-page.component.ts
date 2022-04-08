import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-add-page',
  templateUrl: './project-add-page.component.html',
  styleUrls: ['./project-add-page.component.css']
})
export class ProjectAddPageComponent implements OnInit {

  projectForm: FormGroup;
  id :any;
  projectDetail:any;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private ps: ProjectsService,
    private toastr: ToastrService
  ) { 
    this.projectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', Validators.required),
      create_at: new FormControl('', [Validators.required]),
      complete_at: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.projectDetail = {
        name: "",
        image: "",
        create_at: "",
        complete_at: "",
        desc: "",
      };
      this.onGetList();
    }
  }

  onGetList(){
    this.ps.getProject(this.id).subscribe(data => {
      this.projectDetail = data;
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateProject(this.id, obj).subscribe();
      this.router.navigate(['/admin/project']);
      this.toastr.success("Cập nhật thành công")
  
    }else {
      this.ps.createProject(obj).subscribe();
      this.router.navigate(['/admin/project']);
      this.toastr.success("Thêm mới thành công")
  
    }
  }

}
