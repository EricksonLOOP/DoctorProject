<h1>AppointmentService</h1>
<p>Define as operações disponíveis para manipulação de agendamentos (appointments) no sistema.</p>

<h2>Métodos</h2>
<table>
  <thead>
    <tr>
      <th>Assinatura</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Appointment createAppointment(CreateAppointmentDto createAppointmentDto, UUID doctorId)</code></td>
      <td>Cria um novo agendamento para o médico identificado por <code>doctorId</code> usando os dados fornecidos em <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/CreateAppointmentDtoDoc.md">CreateAppointmentDto</a>.</td>
    </tr>
    <tr>
      <td><code>void deleteAppointment(UUID appointmentId, UUID doctorId)</code></td>
      <td>Remove o agendamento identificado por <code>appointmentId</code>, assegurando que o médico com <code>doctorId</code> tenha permissão para deletar.</td>
    </tr>
    <tr>
      <td><code>Appointment updateAppointment(UpdateAppointmentDto updateAppointmentDto, UUID appointmentId, UUID doctorId)</code></td>
      <td>Atualiza o agendamento especificado por <code>appointmentId</code> com os dados de <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">UpdateAppointmentDto</a>, para o médico com <code>doctorId</code>.</td>
    </tr>
    <tr>
      <td><code>Appointment getAppointment(UUID appointmentId)</code></td>
      <td>Retorna o agendamento correspondente ao <code>appointmentId</code>.</td>
    </tr>
    <tr>
      <td><code>List&lt;AppointmentDto&gt; getAllAppointments(UUID doctorId)</code></td>
      <td>Retorna uma lista de agendamentos (<a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">AppointmentDto</a>) relacionados ao médico com <code>doctorId</code>.</td>
    </tr>
    <tr>
      <td><code>Appointment toScheduleAppointment(UUID appointmentId, UUID userId)</code></td>
      <td>Agenda o agendamento identificado por <code>appointmentId</code> para o usuário com <code>userId</code>, marcando como ocupado.</td>
    </tr>
    <tr>
      <td><code>Appointment toUnscheduleAppointment(UUID appointmentId, UUID doctorId)</code></td>
      <td>Desmarca o agendamento identificado por <code>appointmentId</code>, liberando-o para o médico com <code>doctorId</code>.</td>
    </tr>
  </tbody>
</table>
