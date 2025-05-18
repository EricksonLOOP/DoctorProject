'use client'

import DoctorAddHours from '@/app/components/dashboard/modals/doctor_add_hours';
import DoctorAppointments from '@/app/components/dashboard/tabs/doctor_appointments';
import DashboardHeader from '@/app/components/dashboard/header';
import HoursTab from '@/app/components/dashboard/tabs/hours_tab';
import Nav from '@/app/components/dashboard/nav';
import { useDoctorDashboardData } from '@/app/hooks/useDoctorDashboardData';
import { useState } from 'react';

export default function DashboardMedico() {
  const [abaAtiva, setAbaAtiva] = useState<string>('agenda');
  const [mostrarModalHorario, setMostrarModalHorario] = useState(false);

  const {
    user,
    horariosDisponiveis,
    agendamentos,
    setHorariosDisponiveis,
    setAgendamentos,
  } = useDoctorDashboardData();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader headerName="Dashboard Médicos" userName={user?.name} />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Nav
          setAbaAtiva={setAbaAtiva}
          abaAtiva={abaAtiva}
          options={[
            { name: 'Meu Compromissos', value: 'agenda' },
            { name: 'Meus Horários', value: 'horarios' },
          ]}
        />

        <DoctorAppointments abaAtiva={abaAtiva} agendamentos={agendamentos} />

        <HoursTab
          abaAtiva={abaAtiva}
          setMostrarModalHorario={setMostrarModalHorario}
          horariosDisponiveis={horariosDisponiveis}
          setAgendamentos={setAgendamentos}
        />
      </main>

      <DoctorAddHours
        setHorariosDisponiveis={setHorariosDisponiveis}
        horariosDisponiveis={horariosDisponiveis}
        mostrarModalHorario={mostrarModalHorario}
        setMostrarModalHorario={setMostrarModalHorario}
      />
    </div>
  );
}
