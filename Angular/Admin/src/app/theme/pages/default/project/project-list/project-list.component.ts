import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectService } from '../../../../../_services/project.service';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { Message } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: [
        './project-list.css'
    ]
})
export class ProjectListComponent implements OnInit, AfterViewInit{
    public msgs: Message[];
    public projectCategoryModel: CreateProjectCategory = {
        name: ''
    }

    public projectCategories: ProjectCategory[] = [];

    public isAddNewProjectCategory: boolean = false;
    public isAddNewProject: boolean = false;

    public isEditProjectCategory: boolean = false;

    public projects: Project[] = [];

    public editProject: Project = {
        id: 0,
        title: '',
        investor: '',
        efficiency: '',
        standard: '',
        progress: '',
        description: '',
        projectCategoryId: 0,
        projectCategoryName: ''
    };

    public isEditProject: boolean = false;

    constructor(public projectService: ProjectService , 
                private _script: ScriptLoaderService,
                private messageService: MessageService,
                private confirmationService: ConfirmationService)
                { 

                }

    ngAfterViewInit() {
        this._script.loadScripts('app-project-list',
            ['assets/demo/default/custom/components/datatables/base/data-local.js']);

    }

    ngOnInit() {
        this.getProjectCategories();
        this.getProjects();
    }

    selectEditProject(project: Project) {
        this.editProject = project;
        this.isEditProject = true;
    }

    createProjectCategery() {
        this.projectService.createProjectCategory(this.projectCategoryModel).subscribe(data => {
            if (data != undefined) {
                this.messageService.add({severity:'success', summary:'Thêm Mới Dự Án Thành Công', detail:'Thành Công'});
                this.projectCategories.push({
                    id: data,
                    name: this.projectCategoryModel.name,
                    isEdit: false
                });
                this.projectCategoryModel.name = '';
            }
        },
        err=>{
            this.messageService.add({severity:'error', summary:'Thêm Mới Dự Án Thất Bại', detail:'Thất Bại'});
        })
    }

    getProjectCategories() {
        this.projectService.getProjectCategories().subscribe(data => {
            this.projectCategories = data;
            this.projectCategories.forEach(element => {
                element.isEdit = false
            });
        });
    }

    deleteProjectCategory(id) {
        debugger;
        this.confirmationService.confirm({
            message: 'Bạn có muốn xóa thông tin này ?',
            accept: () => {
                this.projectService.deleteProjectCategory(id).subscribe(data => {
                    this.messageService.add({severity:'success', summary:'Xóa Dự Án Thành Công', detail:'Thành Công'});
                    this.getProjectCategories();
                },err=>{
                    this.messageService.add({severity:'error', summary:'Xóa Dự Án Thất Bại', detail:'Thất Bại'});
                })
            }
        });
    }

    editProjectCategory(item) {
        this.projectService.editProjectCategory(item).subscribe(data => {
            this.messageService.add({severity:'success', summary:'Chỉnh Sửa Án Thành Công', detail:'Thành Công'});
            this.getProjectCategories();
        },
        err=>{
            this.messageService.add({severity:'error', summary:'Chỉnh Sửa Án Thất Bại', detail:'Thất Bại'});
        })
    }

    getProjects() {
        this.projectService.getProjects().subscribe(data => {
            this.projects = data;
            this.isEditProject = false;
        })
    }

    deleteProject(id) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this.projectService.deleteProject(id).subscribe(data => {
                    this.getProjects();
                    this.messageService.add({severity:'success', summary:'Xóa Dự Án Thành Công', detail:'Thành Công'});
                },err=>{
                    this.messageService.add({severity:'error', summary:'Xóa Án Thất Bại', detail:'Thất Bại'});
                });
            }
        });
    }
}
