'use client'

import { Appointment, AppointmentDto } from "@/app/types/Appointment";
import axios from "axios";
import { useState } from "react";
import DoctorAddHours, { AppointmentData } from "../modals/doctor_add_hours";

type Props = {
    setAgendamentos: (appo:AppointmentDto[]) => void;
    horariosDisponiveis:AppointmentDto[]
}
export default function AvailableHoursCard({
    setAgendamentos,
    horariosDisponiveis
}: Props) {
    const [isModifying, setIsModifying] = useState<boolean>(false)
    const [editingAppointment, setEditingAppointment]= useState<AppointmentData>()
    const removerHorario = async (id: string) => {
        try {
          const deletarRes = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/appointment/delete/${id}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
          }) 
            if (deletarRes.status == 200) {
            window.location.reload()
          }
        } catch (e) {
          console.error(e)
        }
    };
    const openEditor = (app:Appointment) => {
        setEditingAppointment({
            appointmentId: app.id,
            initHour: app.initHour,
            finishHour: app.finishHour,
            schuduledDate: app.scheduledDate
        })
        setIsModifying(true)
    }
    if (isModifying) return <DoctorAddHours
        setHorariosDisponiveis={() => null}
        horariosDisponiveis={[]}
        mostrarModalHorario={isModifying}
        setMostrarModalHorario={() => setIsModifying(false)}
        appointmentData={editingAppointment}
    />
    return (
        <>
                  {horariosDisponiveis.map((horario) => (
                    <tr key={horario.appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {horario.appointment.scheduledDate ?? '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {horario.appointment.initHour}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {horario.appointment.finishHour}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => openEditor(horario.appointment)}
                          className="text-blue-600 hover:text-blue-900 cursor-pointer"
                        >
                          Modificar
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => removerHorario(horario.appointment.id)}
                          className="text-red-600 hover:text-red-900 cursor-pointer"
                        >
                          Remover
                        </button>
                      </td>
                    </tr>
                  ))}
        </>
    )
}