import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        AppointmentCreateComponent,
        AppointmentListComponent
    ]
})
export class AppComponent {
    title = 'Clinic Appointment System';
}
