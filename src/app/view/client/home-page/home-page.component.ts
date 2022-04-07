import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/project.service';
import { SchoolService } from 'src/app/service/school.service';
import { SkillService } from 'src/app/service/skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  skill: any;
  project: any;
  school: any;
  constructor(
    private us: UserService,
    private sk: SkillService,
    private pr: ProjectsService,
    private sc: SchoolService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getSkill();
    this.getProject();
    this.getSchool();
  }

  getUser(){
    this.us.getUsers().subscribe(data => {
      this.user = data;
    });
  }

  getSkill(){
    this.sk.getSkills().subscribe(data => {
      this.skill = data;
      console.log(data);
      
    });
  }

  getProject(){
    this.pr.getProjects().subscribe(data => {
      this.project = data;
    });
  }

  getSchool(){
    this.sc.getSchools().subscribe(data => {
      this.school = data;
    });
  }

}
