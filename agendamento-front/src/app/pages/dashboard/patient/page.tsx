'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { UserDtoWithAppointmentDto } from '@/app/types/User';
import { Appointment } from '@/app/types/Appointment';
import { DoctorDto } from '@/app/types/Doctor';
import Alert, { AlertType } from '@/app/components/alert_modal';
import MyAppointmentsTabContent from '@/app/components/dashboard/tabs/my_appontments_tab_content';
import Nav from '@/app/components/dashboard/nav';
import AvailableDoctors from '@/app/components/dashboard/tabs/patient_available_doctors_tab';
import ConfirmationModal from '@/app/components/dashboard/modals/appointment_confirmation_modal';
import DashboardHeader from '@/app/components/dashboard/header';
import { usePatientDashboardData } from '@/app/hooks/usePatientDashboardData';
import { useAutoHideInfo } from '@/app/hooks/useAutoHideInfo';
import HistoryTab from '@/app/components/dashboard/tabs/history_tab';

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState<string>('disponiveis');
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>(undefined);
  const [info, setInfo] = useState<{ type: AlertType; message: string }>();
  const { user, doctors } = usePatientDashboardData(setInfo);
 
  const selectAppointment = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowAppointmentModal(true);
  };

  useAutoHideInfo(info, () => setInfo(undefined), 3000);

  return (
    <div className="min-h-screen bg-gray-50">
      {info && (
        <Alert
          type={info.type}
          message={info.message}
          onClose={() => setInfo(undefined)}
          className="mb-4"
        />
      )}

      <DashboardHeader headerName="Meu Painel de Paciente" userName={user?.name} />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <Nav
            setAbaAtiva={(a) => setActiveTab(a)}
            abaAtiva={activeTab}
            options={[
              { name: 'Horários Disponíveis', value: 'disponiveis' },
              { name: 'Meus Agendamentos', value: 'meus-agendamentos' },
              {name: 'Meu Histórico', value: 'meu-historico'}
            ]}
          />
        </div>

        <AvailableDoctors
          activeTab={activeTab}
          doctors={doctors}
          selectAppointment={(a) => selectAppointment(a)}
        />

        <MyAppointmentsTabContent
          activeTab={activeTab}
          user={user}
        />
        <HistoryTab activeTab={activeTab}/>
      </main>

      {showAppointmentModal && selectedAppointment && (
        <ConfirmationModal
          doctors={doctors}
          selectedAppointment={selectedAppointment}
          setShowAppointmentModal={(b) => setShowAppointmentModal(b)}
        />
      )}
    </div>
  );
}
