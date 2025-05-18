import { AppointmentDto } from "@/app/types/Appointment";
import axios from "axios";
import { useState } from "react";
import Alert, { AlertProps } from "../../alert_modal";

export default function AppointmentCard({ appointment }: { appointment: AppointmentDto }) {
    const [isManaging, setIsManaging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (isManaging) {
        return <ManageAppointment 
            appointment={appointment} 
            closeManaging={() => setIsManaging(false)}
            setIsLoading={setIsLoading}
        />;
    }

    return (
        <div 
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => setIsManaging(true)}
        >
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-100 p-1.5 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold truncate text-black">
                                {appointment.user.name}
                            </h3>
                        </div>
                        
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg
                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-sm">
                                    {formatDate(appointment.appointment.scheduledDate)} •{" "}
                                    {`${appointment.appointment.initHour} - ${appointment.appointment.finishHour}`}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-600">
                                <svg
                                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span className="text-sm truncate">{appointment.user.email}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="ml-2 flex-shrink-0">
                        <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                !appointment.appointment.available
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                            {!appointment.appointment.available ? "Confirmado" : "Pendente"}
                        </span>
                    </div>
                </div>
            </div>
            
            {isLoading && (
                <div className="bg-blue-50 h-1 w-full overflow-hidden">
                    <div className="h-full bg-blue-500 animate-pulse"></div>
                </div>
            )}
        </div>
    );
}

function ManageAppointment({
    appointment,
    closeManaging,
    setIsLoading
}: {
    appointment: AppointmentDto;
    closeManaging: () => void;
    setIsLoading: (loading: boolean) => void;
}) {
    const [info, setInfo] = useState<AlertProps>();
    
    const cancelAppointment = async () => {
        try {
            setIsLoading(true);
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/appointment/unschedule/${appointment.appointment.id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );
            
            if (res.status === 200) {
                setInfo({ type: "success", message: "Agendamento cancelado com sucesso!" });
                setTimeout(() => window.location.reload(), 1500);
            }
        } catch (e) {
            setInfo({ type: "error", message: "Erro ao cancelar agendamento. Tente novamente mais tarde!" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
            <div 
                className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Detalhes do Agendamento</h3>
                        <button
                            onClick={closeManaging}
                            className="text-gray-400 hover:text-gray-500"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
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
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-500">Paciente</h4>
                                <p className="text-lg font-semibold text-black">{appointment.user.name}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <svg
                                    className="h-6 w-6 text-purple-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-500">Data e Horário</h4>
                                <p className="text-lg font-semibold text-black">
                                    {formatDate(appointment.appointment.scheduledDate)} •{" "}
                                    {`${appointment.appointment.initHour} - ${appointment.appointment.finishHour}`}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-500">Contato</h4>
                                <p className="text-lg font-semibold text-black">{appointment.user.email}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <svg
                                    className="h-6 w-6 text-yellow-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-500">Status</h4>
                                <p className="text-lg font-semibold text-black">
                                    {!appointment.appointment.available ? "Confirmado" : "Pendente"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 flex justify-center gap-3">
             
                    <button
                        onClick={cancelAppointment}
                        className="px-4 cursor-pointer py-2 bg-red-600 rounded-md text-sm font-medium text-white hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                        Cancelar Agendamento
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </div>
                
                {info && (
                    <div className="px-6 pb-4">
                        <Alert type={info.type} message={info.message} onClose={() => setInfo(undefined)} />
                    </div>
                )}
            </div>
        </div>
    );
}


function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
}