import { UserDtoWithAppointmentDto } from "@/app/types/User";
import { format } from 'date-fns';
  import {ptBR} from 'date-fns/locale/pt-BR';

type Props = {
  activeTab: string;
  user: UserDtoWithAppointmentDto | undefined;
};

export default function MyAppointmentsTabContent({ activeTab, user }: Props) {
  const formatDate = (dateString: string) => {
    return  new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
  });
  };

  return (
    <div className={`p-4 ${activeTab !== "meus-agendamentos" && 'hidden'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Meus Agendamentos</h2>
        
        {user?.appointments?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.appointments.map((appointment) => (
              <div 
                key={appointment.appointment.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {formatDate(appointment.appointment.scheduledDate)}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Horário</p>
                        <p className="font-medium text-black">
                          {appointment.appointment.initHour} - {appointment.appointment.finishHour}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Médico</p>
                        <p className="font-medium text-black">{appointment.user.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                  
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
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
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-700">Nenhum agendamento encontrado</h3>
            <p className="mt-2 text-gray-500">Você ainda não possui agendamentos marcados</p>
          </div>
        )}
      </div>
    </div>
  );
}