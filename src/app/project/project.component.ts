import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[];

  createProject: Boolean;

  projectNew: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe(projects => this.projects = projects);
  }

  createProjectClick() {
    this.projectNew = new Project();
    this.createProject = true;
  }

  cancelCreateProject() {
    this.createProject = false;
  }

  createProjectSubmit() {
    this.projectService.createProject(this.projectNew).subscribe(project => {
      this.projectNew = null;
      this.getAllProjects();
      this.createProject = false;
    });
  }

}
