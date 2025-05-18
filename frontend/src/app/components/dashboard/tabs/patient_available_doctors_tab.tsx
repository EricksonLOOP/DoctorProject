import { Appointment, AppointmentDto } from "@/app/types/Appointment";
import { DoctorDto } from "@/app/types/Doctor";
import DoctorCard from "../cards/doctor_card";

type Props = {
    activeTab: string;
    doctors: DoctorDto[];
    selectAppointment: (a: Appointment) => void;
}
export default function AvailableDoctors({
    activeTab,
    doctors,
    selectAppointment
}:Props) {
    return (
        <div className="p-2">
        {activeTab === 'disponiveis' && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Horários Disponíveis</h2>
            </div>

            {/* No doctors available */}
            {doctors.length === 0 && (
              <div className="flex items-center justify-center py-10 bg-white sm:rounded-lg shadow">
                <b className="font-black text-gray-600">Nenhum Médico Disponível</b>
              </div>
            )}

            {/* Doctors list */}
            {doctors.length > 0 && (
              <div className="overflow-hidden sm:rounded-lg shadow bg-white">
                {doctors.map((doctor, index) => (
                    <DoctorCard doctor={doctor} index={index} selectAppointment={(a)=>selectAppointment(a)}/>
                ))}
              </div>
            )}
          </div>
        )}
        </div>
    )
}