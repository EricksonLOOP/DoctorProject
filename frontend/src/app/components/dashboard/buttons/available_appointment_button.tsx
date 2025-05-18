import { Appointment } from "@/app/types/Appointment"

type Props = {
    appointment: Appointment;
    selectAppointment: (a: Appointment) => void;
}
export default function AvailableAppointmentButton(
    {
        appointment,
        selectAppointment
    }:Props
) {
    return (
        <button
        key={appointment.id}
        onClick={() => selectAppointment(appointment)}
        className="group relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
      >
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0 text-black" aria-hidden="true">{ appointment.scheduledDate?.split("-").reverse().join("/")}</span>
      
            <p className="text-sm font-medium text-gray-900">{`${appointment.initHour} - ${appointment.finishHour}`}</p>
          </div>
        </div>
        <svg className="h-5 w-5 text-gray-400 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd" />
        </svg>
      </button>
    )
}