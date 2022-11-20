import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { StepsModule } from 'primeng/steps';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { GeneralComponent } from './general/general.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ImageModule } from 'primeng/image';
import { PeopleComponent } from './people/people.component';
import { TableModule } from 'primeng/table';
import { SummaryComponent } from './summary/summary.component';
import { RegisterService } from '../services/register.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    LayoutComponent,
    UploadImageComponent,
    GeneralComponent,
    PeopleComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    StepsModule,
    CardModule,
    FileUploadModule,
    AvatarModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    KeyFilterModule,
    TableModule,
    InputNumberModule,
    ImageModule,
    ToastModule,
    ConfirmDialogModule

  ],
  providers: [RegisterService, MessageService, ConfirmationService]
})
export class RegisterModule { }
