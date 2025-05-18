'use client'

import { Appointment } from "@/app/types/Appointment";
import { DoctorDto } from "@/app/types/Doctor"
import axios from "axios";
import { useState } from "react";
import Alert, { AlertProps } from "../../alert_modal";
import { useAutoHideInfo } from "@/app/hooks/useAutoHideInfo";

type Props = {
    doctors: DoctorDto[];
    selectedAppointment: Appointment;
    setShowAppointmentModal: (b:boolean)=>void

}
export default function ConfirmationModal({
    doctors,
    selectedAppointment,
    setShowAppointmentModal
}:Props) {
      const [info, setInfo] = useState<AlertProps>()
      useAutoHideInfo(info, ()=>setInfo(undefined),3000)
      const confirmAppointment = async (id: string) => {
        try {
          const appointmentRes = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/appointment/schedule/${id}`,{}, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
          })
          if (appointmentRes.status == 200) {
            setInfo({ type: 'success', message: 'Agendamento Realizado com sucesso!' })
            location.reload()
          }
        } catch (e) {
          console.log(e)
          console.log(sessionStorage.getItem('token'))
          console.log(id)
          setInfo({type:'error', message:'Erro ao confirmar agendamento'})
      }
      };
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        {info && (
          <Alert type={ info.type} onClose={()=>setInfo(undefined)}  message={info.message}/>
        )}
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Confirmar Agendamento
                </h3>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Você está prestes a agendar uma consulta com:
                  </p>
                  <p className="text-lg font-medium text-gray-900 mt-2">
                    {doctors.find(m => m.appointments.some(h => h.id === selectedAppointment?.id))?.doctor.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Médico
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedAppointment.scheduledDate?.split("-").reverse().join("/")}
                  </p>
                  <div className="mt-4 bg-gray-50 p-4 rounded-md">
                    <p className="text-sm font-medium text-gray-900">
                    {`${selectedAppointment.initHour} - ${selectedAppointment.finishHour}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="button"
                onClick={() => confirmAppointment(selectedAppointment.id)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
              >
                Confirmar Agendamento
              </button>
              <button
                type="button"
                onClick={() => setShowAppointmentModal(false)}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}