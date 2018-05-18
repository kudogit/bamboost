import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../../../../_services/project.service';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: [
        './project-edit.css'
    ]
})
export class ProjectEditComponent implements OnInit {
    public selectedProjectCategory: ProjectCategory = {
        id: 0,
        name: '',
        isEdit: false
    };

    @Input() editProject: Project;
    @Input() projectCategories: any[];
    @Output() reloadProjects = new EventEmitter<any>();
    @ViewChild('cancelBtn') cancelBtn: ElementRef;

    public projectForm: FormGroup;

    constructor(public projectService: ProjectService) { }

    ngOnInit() {
        this.projectForm = new FormGroup({
            title: new FormControl(this.editProject.title, [Validators.required]),
            investor: new FormControl(this.editProject.investor, [Validators.required]),
            efficiency: new FormControl(this.editProject.efficiency, [Validators.required]),
            standard: new FormControl(this.editProject.standard, [Validators.required]),
            progress: new FormControl(this.editProject.progress, [Validators.required]),
            projectCategoryId: new FormControl(this.editProject.projectCategoryId, [Validators.required]),
            description: new FormControl(this.editProject.description),
        });
    }

    public resetForm(){
        
    }

    save() {
        if (!this.projectForm.valid)
            return;
        this.projectService.editProject(this.editProject).subscribe(data => {
            this.projectForm.reset();
            this.reloadProjects.emit(null);
            this.cancelBtn.nativeElement.click();
        });
    }

    selectProjectCategory(projectCategory) {
        this.editProject.projectCategoryId = projectCategory.id;
        this.editProject.projectCategoryName = projectCategory.name;
    }

}
