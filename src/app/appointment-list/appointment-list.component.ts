import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../appointment.service';

@Component({
    selector: 'app-appointment-list',
    templateUrl: './appointment-list.component.html',
    styleUrls: ['./appointment-list.component.css'],
    standalone: true,
    imports: [
        CommonModule
    ]
})
export class AppointmentListComponent implements OnInit {
    appointments: any[] = [];

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit(): void {
        this.appointmentService.getAppointments().subscribe((data: any[]) => {
            this.appointments = data;
        });
    }

    deleteAppointment(id: string): void {
        this.appointmentService.deleteAppointment(id).subscribe(() => {
            this.appointments = this.appointments.filter(appointment => appointment._id !== id);
        });
    }
}
