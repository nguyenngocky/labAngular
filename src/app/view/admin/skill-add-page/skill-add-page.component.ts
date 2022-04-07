import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-add-page',
  templateUrl: './skill-add-page.component.html',
  styleUrls: ['./skill-add-page.component.css']
})
export class SkillAddPageComponent implements OnInit {

  skillForm: FormGroup;
  id :any;
  skillDetail:any;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private ps: SkillService,
    private toastr: ToastrService
  ) { 
    this.skillForm = new FormGroup({
      name_skill: new FormControl('', [Validators.required]),
      image: new FormControl('', Validators.required),
      point: new FormControl('', [Validators.required, Validators.max(100)]),
    });
  }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.skillDetail = {
        name_skill: "",
        image: "",
        point: 0,
      };
      this.onGetList();
    }
  }

  onGetList(){
    this.ps.getSkill(this.id).subscribe(data => {
      this.skillDetail = data;
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateSkill(this.id, obj).subscribe();
      this.router.navigate(['/admin/skill']);
      this.toastr.success("Cập nhật thành công")
  
    }else {
      this.ps.createSkill(obj).subscribe();
      this.router.navigate(['/admin/skill']);
      this.toastr.success("Thêm mới thành công")
  
    }
  }

}
