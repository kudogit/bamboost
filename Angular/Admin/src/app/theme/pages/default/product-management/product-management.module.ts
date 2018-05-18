import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductManagementComponent } from './product-management.component';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import {
    AccordionModule,
    ButtonModule,
    CheckboxModule,
    ChipsModule,
    CodeHighlighterModule,
    ColorPickerModule,
    InputMaskModule,
    FieldsetModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule,
    PanelModule,
    RadioButtonModule,
    SelectButtonModule,
    SplitButtonModule,
    TabViewModule,
    DialogModule,
    DropdownModule,
    FileUploadModule
} from 'primeng/primeng';
import { ProjectCreateComponent } from '../project/project-create/project-create.component';
import { ProjectEditComponent } from '../project/project-edit/project-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../../../../_services/project.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditorModule } from 'primeng/components/editor/editor';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: ProductManagementComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        LayoutModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        DropdownModule,
        FileUploadModule,
        EditorModule
    ],
    declarations: [
        ProductManagementComponent,
    ],
    providers: [
        HttpClient,
        ProjectService
    ]
})

export class ProductManagementModule {

}