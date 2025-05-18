'use client'
import { AppointmentDto } from "@/app/types/Appointment";
import axios from "axios";
import { useState } from "react";
import Alert from "../../alert_modal";
type Props = {
    setHorariosDisponiveis: (appo: AppointmentDto[]) => void,
    horariosDisponiveis: AppointmentDto[],
    mostrarModalHorario: boolean,
  setMostrarModalHorario: (b: boolean) => void,
  appointmentData?:AppointmentData
    
}
export type AppointmentData = {
  appointmentId?: string;
  schuduledDate: string;
  initHour: string;
  finishHour:string;
}
export default function DoctorAddHours({
    setHorariosDisponiveis,
    horariosDisponiveis,
    setMostrarModalHorario,
  mostrarModalHorario,
  appointmentData
    
}:Props) {
    const [data, setData] = useState<string>(appointmentData?.schuduledDate ?? '')
    const [initHour, setInitHour] = useState<string>(appointmentData?.initHour ?? '')
    const [finishHour, setFinishHour] = useState<string>(appointmentData?.finishHour ?? '')
    const [info, setInfo] = useState<{type:"success" | "error" | "warning" | "info", message:string}>()
    
  const adicionarHorario = async () => {
    try {
      const dataToSend = {
        initHour: initHour,
        finishHour: finishHour,
        schuduledDate: data
      }
      if (initHour === '' || finishHour === '' || data === '') {
        setInfo({type: 'error', message: `Selecione data, hora de inicio e hora de fim válidos.`})
        return
      }
      console.log(dataToSend)
      const addHour = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/appointment/create`, dataToSend, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      if (addHour.status == 201) {
        window.location.reload()
        setInfo({type:"success", message:"Horario adicionado com sucesso!"})  
      }
    } catch (e) {
      setInfo({type:"error", message:"Erro ao adicionar horário"})
      console.log(e)
    }

  };
  const atualizarHorario = async () => {
    try {
      const dataToSend = {
        initHour: initHour,
        finishHour: finishHour,
        scheduledDate: data,
        isAvailable:true
      }
      console.log(dataToSend)
      const addHour = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/appointment/update/${appointmentData?.appointmentId}`,
        dataToSend, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      if (addHour.status == 200) {
        setInfo({ type: "success", message: "Horario atualizado com sucesso!" })
        window.location.reload()
      }
    } catch (e) {
      setInfo({type:"error", message:"Erro ao adicionar horário"})
      console.log(e)
    }

  };
    return (
        <>
            {info && (<Alert type={ info.type} onClose={()=>setInfo(undefined)} message={info.message}/>)}
        {mostrarModalHorario && (
        <div className=" absolute top-[-150px] md:top-[-50px] z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {appointmentData ? 'Atualizando Horário': 'Adicionar Novo Horário'}
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="data" className="block text-sm font-medium text-gray-700 text-left">Data</label>
                      <input
                        type="date"
                        id="data"
                        value={data}
                        onChange={(e)=>setData(e.target.value)}
                        className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="horaInicio" className="block text-sm font-medium text-gray-700 text-left">Hora Início</label>
                        <input
                          type="time"
                          id="horaInicio"
                          value={initHour}
                          onChange={(e)=>setInitHour(e.target.value)}
                          className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="horaFim" className="block text-sm font-medium text-gray-700 text-left">Hora Fim</label>
                        <input
                          type="time"
                          id="horaFim"
                          value={finishHour}
                          onChange={(e)=>setFinishHour(e.target.value)}
                          className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  onClick={()=> appointmentData ? atualizarHorario() :  adicionarHorario()}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setMostrarModalHorario(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}