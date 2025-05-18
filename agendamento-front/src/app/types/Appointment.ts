import { UserDto } from "./User";

export type Appointment = {
    id: string;
    scheduledDate: string;
    initHour: string;
    finishHour:string
    available: boolean;
    user:UserDto
}

export type AppointmentDto = {
    appointment: Appointment,
    user:UserDto
}