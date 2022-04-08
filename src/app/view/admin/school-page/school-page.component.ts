import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-school-page',
  templateUrl: './school-page.component.html',
  styleUrls: ['./school-page.component.css']
})
export class SchoolPageComponent implements OnInit {
  school: any;
  constructor(
    private ps: SchoolService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.ps.getSchools().subscribe(data => {
      this.school = data;
    });
  }

  onDelete(id: number | string) {
    if(id) {
      const confirm = window.confirm("Bạn có muốn xóa ?");
      if(confirm) {
        this.ps.deleteSchool(id).subscribe(data => {
        this.onGetList();
        });
      }
      this.toastr.success("Xóa thành công")
    }
  }

}
