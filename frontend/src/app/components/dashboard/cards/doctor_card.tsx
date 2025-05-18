'use client'

import { DoctorDto } from "@/app/types/Doctor"
import AvailableAppointmentButton from "../buttons/available_appointment_button";
import { Appointment } from "@/app/types/Appointment";

type Props = {
    doctor: DoctorDto;
    index: number;
    selectAppointment: (a:Appointment)=>void
}
export default function DoctorCard(
    {
        doctor,
        index,
        selectAppointment
    }:Props
) {
    return (
        <div
        key={doctor?.doctor?.id || index}
        className="border-b border-gray-200 last:border-b-0"
      >
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{doctor.doctor.name}</h3>
              <p className="text-sm text-gray-500">Médico</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <h4 className="text-sm font-medium text-gray-500 mb-3">Horários disponíveis:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctor.appointments
              .filter(h => h.available)
              .map(appointment => (
                <AvailableAppointmentButton appointment={appointment} selectAppointment={(a)=>selectAppointment(a)}/>
              ))}
          </div>
        </div>
      </div>
    )
}