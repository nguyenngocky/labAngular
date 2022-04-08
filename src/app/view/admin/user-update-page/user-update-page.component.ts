import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-update-page',
  templateUrl: './user-update-page.component.html',
  styleUrls: ['./user-update-page.component.css']
})
export class UserUpdatePageComponent implements OnInit {
  userForm: FormGroup;
  id :any;
  userDetail:any;
  constructor(
    private activRoute: ActivatedRoute,
    private router: Router,
    private ps: UserService,
    private toastr: ToastrService
  ) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      profile__work: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      git: new FormControl('', [Validators.required]),
      facebook: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      resume: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit(): void {
    this.id = this.activRoute.snapshot.params['id'];

    if(this.id){
      this.onGetList();
    }else {
      this.userDetail = {
        name: "",
        profile__work: "",
        age: 0,
        birthday: "",
        phone: "",
        email: "",
        address: "",
        image: "",
        git: "",
        facebook: "",
        desc: "",
        resume: ""
      };
      this.onGetList();
    }
  }

  onGetList(){
    this.ps.getUser(this.id).subscribe(data => {
      this.userDetail = data;
    })
  }

  OnUpdate(obj :any) {
    if(this.id){
      this.ps.updateUser(this.id, obj).subscribe();
      this.router.navigate(['/admin/user']);
      this.toastr.success("Cập nhật thành công")
  
    }else {
      this.ps.createUser(obj).subscribe();
      this.router.navigate(['/admin/user']);
      this.toastr.success("Thêm mới thành công")
  
    }
  }

}
