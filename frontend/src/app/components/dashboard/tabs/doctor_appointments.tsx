import { AppointmentDto } from "@/app/types/Appointment"
import AppointmentCard from "../cards/doctor_appointment_card"

type Props = {
    abaAtiva: string,
    agendamentos: AppointmentDto[]
}

export default function DoctorAppointments({ abaAtiva, agendamentos }: Props) {
    return (
        <div className={`${abaAtiva !== 'agenda' && 'hidden'} p-4`}>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Próximas Consultas</h2>
                <p className="text-gray-500 mt-1">
                    {agendamentos.length} consulta{agendamentos.length !== 1 ? 's' : ''} agendada{agendamentos.length !== 1 ? 's' : ''}
                </p>
            </div>

            {agendamentos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agendamentos.map((agendamento) => (
                        <AppointmentCard 
                            key={agendamento.appointment.id} 
                            appointment={agendamento}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-700">
                        Nenhuma consulta agendada
                    </h3>
                    <p className="mt-1 text-gray-500">
                        Quando houver novas consultas, elas aparecerão aqui
                    </p>
                </div>
            )}
        </div>
    )
}