import { useCallback, useEffect, useState } from 'react';
import { AppointmentDto } from '@/app/types/Appointment';
import { UserDto } from '@/app/types/User';
import axios from 'axios';
import router from 'next/router';

export function useDoctorDashboardData() {
  const [user, setUser] = useState<UserDto | undefined>(undefined);
  const [horariosDisponiveis, setHorariosDisponiveis] = useState<AppointmentDto[]>([]);
  const [agendamentos, setAgendamentos] = useState<AppointmentDto[]>([]);

  const fetchAppointments = useCallback(async (doctorId: string, token: string) => {
    try {
      const appointmentRes = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/appointment/doctor/${doctorId}/appointments`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (appointmentRes.status === 200) {
        const data: AppointmentDto[] = appointmentRes.data;
        setHorariosDisponiveis(data);
        setAgendamentos(data.filter((a) => !a.appointment.available));
      }
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          router.push('/');
          return;
        }

        const userRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/data`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (userRes.status === 200) {
          setUser(userRes.data);
          fetchAppointments(userRes.data.id, token);
        }
      } catch (e: any) {
        alert(e.message || 'Error loading data.');
      }
    };

    fetchData();
  }, [fetchAppointments]);

  return {
    user,
    horariosDisponiveis,
    agendamentos,
    setHorariosDisponiveis,
    setAgendamentos,
  };
}
