import type { Appointment, AppointmentDto } from "./Appointment";

export type UserDto = {
    id: string;
    name: string;
    email: string;
    appointments?: Appointment[]
}

export type UserDtoWithAppointmentDto = {
    id: string;
    name: string;
    email: string;
    appointments?: AppointmentDto[]

}