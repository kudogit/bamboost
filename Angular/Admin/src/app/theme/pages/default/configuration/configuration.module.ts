import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationComponent } from './configuration.component';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { ConfigurationService } from '../../../../_services/configuration.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditorModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfigurationDisplayComponent } from './configuration-display/configuration-display.component';
const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: ConfigurationComponent,
                children: [
                    { path: 'add', component: ConfigurationDisplayComponent },
                   
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        LayoutModule,
        HttpClientModule,
        EditorModule,
        GrowlModule
    ],
    declarations: [
        ConfigurationComponent,
    ],
    providers: [
        HttpClient,
        ConfigurationService,
        MessageService
    ]
})

export class ConfigurationModule {

}