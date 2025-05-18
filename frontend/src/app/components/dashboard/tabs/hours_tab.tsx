import { AppointmentDto } from "@/app/types/Appointment";
import AvailableHoursCard from "../cards/available_hours_card";

type Props = {
    abaAtiva: string;
    setMostrarModalHorario: (value: boolean) => void
    horariosDisponiveis: AppointmentDto[]
    setAgendamentos:(a:AppointmentDto[])=>void

}
export default function HoursTab({
    abaAtiva,
    setMostrarModalHorario,
  horariosDisponiveis,
    setAgendamentos
}:Props) {

    return (
        <>
        {abaAtiva === 'horarios' && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Meus Horários Disponíveis</h2>
              <button
                onClick={() => setMostrarModalHorario(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Adicionar Horário
              </button>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hora Início
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hora Fim
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <AvailableHoursCard
                    setAgendamentos={(appo: AppointmentDto[]) => setAgendamentos(appo)}
                    horariosDisponiveis={horariosDisponiveis} />
                </tbody>
              </table>
            </div>
          </div>
        )}
        </>
    )
}