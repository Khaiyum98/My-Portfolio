import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
    selector: 'app-appointment-create',
    templateUrl: './appointment-create.component.html',
    styleUrls: ['./appointment-create.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class AppointmentCreateComponent {
    patientName: string = '';
    doctorName: string = '';
    date: string = '';
    time: string = '';

    constructor(private appointmentService: AppointmentService) { }

    createAppointment(): void {
        const appointment = {
            patientName: this.patientName,
            doctorName: this.doctorName,
            date: this.date,
            time: this.time
        };

        this.appointmentService.createAppointment(appointment).subscribe(() => {
            alert('Appointment created successfully');
        });
    }
}
