import type { Appointment } from "./Appointment"
import type { UserDto } from "./User"

export type DoctorDto = {
    doctor: UserDto
    appointments: Appointment[]
}

export type DoctorsData = {
    doctors: DoctorDto[];
    currentPage: number;
    totalPages: number;
    pageSize: number;
    isLast: boolean;
}