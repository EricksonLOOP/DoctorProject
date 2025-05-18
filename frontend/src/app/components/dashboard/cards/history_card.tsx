'use client'
import { HistoryDto } from "@/app/types/History"

type Props = {
    history: HistoryDto
}

export default function HistoryCard({
    history
}: Props) {
    // Formatar a data para um formato mais legível
    const formattedDate = new Date(history.history.scheduledDate).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="bg-white w-full max-w-[300px] min-h-[200px] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                <h3 className="font-bold text-lg">Consulta Médica</h3>
                <p className="text-sm opacity-90">{formattedDate}</p>
            </div>
            
            <div className="p-4 space-y-4">
                <div className="space-y-2">
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Horário</h4>
                        <p className="text-sm text-black">
                            {history.history.initHour} - {history.history.finishHour}
                        </p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Paciente</h4>
                        <p className="text-sm font-medium text-black">{history.patient.name}</p>
                        <p className="text-xs text-gray-500">{history.patient.email}</p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-2">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Médico</h4>
                        <p className="text-sm font-medium text-black">{history.doctor.name}</p>
                        <p className="text-xs text-gray-500">{history.doctor.email}</p>
                    </div>
                </div>
            </div>
            
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-right">
               
            </div>
        </div>
    )
}