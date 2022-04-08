import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  project: any;
  constructor(
    private ps: ProjectsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.ps.getProjects().subscribe(data => {
      this.project = data;
    });
  }

  onDelete(id: number | string) {
    if(id) {
      const confirm = window.confirm("Bạn có muốn xóa ?");
      if(confirm) {
        this.ps.deleteProject(id).subscribe(data => {
        this.onGetList();
        });
      }
      this.toastr.success("Xóa thành công")
    }
  }

}
