import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { UserDtoWithAppointmentDto } from '@/app/types/User';
import { DoctorDto } from '@/app/types/Doctor';
import { AlertType } from '@/app/components/alert_modal';

export function usePatientDashboardData(setInfo: (info: { type: AlertType; message: string }) => void) {
  const router = useRouter();
  const [user, setUser] = useState<UserDtoWithAppointmentDto | undefined>(undefined);
  const [doctors, setDoctors] = useState<DoctorDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          router.push('/');
          return;
        }

        const [userRes, doctorsRes] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/data`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (userRes.status === 200) setUser(userRes.data);
        if (doctorsRes.status === 200) setDoctors(doctorsRes.data.doctors);

      } catch (e) {
        setInfo({ type: 'error', message: 'Erro ao recuperar dados' });
      }
    };

    fetchData();
  }, [router, setInfo]);

  return { user, doctors };
}
