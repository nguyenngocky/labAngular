import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: any;
  constructor(
    private ps: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.ps.getUsers().subscribe(data => {
      this.user = data;
    });
  }

  onDelete(id: number | string) {
    if(id) {
      window.confirm("Bạn có muốn xóa ?");
      this.ps.deleteUser(id).subscribe(data => {
      this.onGetList();
      });
      this.toastr.success("Xóa thành công")
    }
  }

}
