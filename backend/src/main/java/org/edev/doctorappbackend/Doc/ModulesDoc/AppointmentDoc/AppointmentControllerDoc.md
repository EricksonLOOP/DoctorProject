<h1>Controller: AppointmentController</h1>
<p>Responsável por gerenciar as operações relacionadas a agendamentos.</p>

<h2>Endpoints</h2>

<h3>POST /api/appointment/create</h3>
<p><strong>Descrição:</strong> Cria um novo agendamento para o médico autenticado.</p>
<p><strong>Body:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/CreateAppointmentDtoDoc.md">CreateAppointmentDto</a></p>
<p><strong>Resposta:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">Appointment</a> (201 Created)</p>

<hr>

<h3>DELETE /api/appointment/delete/{appointmentId}</h3>
<p><strong>Descrição:</strong> Deleta um agendamento específico do médico autenticado.</p>
<p><strong>Parâmetros:</strong></p>
<ul>
  <li><code>appointmentId</code> (UUID) – ID do agendamento</li>
</ul>
<p><strong>Resposta:</strong> 200 OK (sem conteúdo)</p>

<hr>

<h3>PUT /api/appointment/update/{appointmentId}</h3>
<p><strong>Descrição:</strong> Atualiza um agendamento do médico autenticado.</p>
<p><strong>Parâmetros:</strong></p>
<ul>
  <li><code>appointmentId</code> (UUID) – ID do agendamento</li>
</ul>
<p><strong>Body:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/UpdateAppointmentDtoDoc.md">UpdateAppointmentDto</a></p>
<p><strong>Resposta:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">Appointment</a> (200 OK)</p>

<hr>

<h3>PUT /api/appointment/schedule/{appointmentId}</h3>
<p><strong>Descrição:</strong> Agenda o horário (appointment) para o paciente autenticado.</p>
<p><strong>Parâmetros:</strong></p>
<ul>
  <li><code>appointmentId</code> (UUID) – ID do agendamento</li>
</ul>
<p><strong>Resposta:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">Appointment</a> (200 OK)</p>

<hr>

<h3>PUT /api/appointment/unschedule/{appointmentId}</h3>
<p><strong>Descrição:</strong> Remove a associação do paciente ao agendamento (desmarca o horário).</p>
<p><strong>Parâmetros:</strong></p>
<ul>
  <li><code>appointmentId</code> (UUID) – ID do agendamento</li>
</ul>
<p><strong>Resposta:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">Appointment</a> (200 OK)</p>

<hr>

<h3>GET /api/appointment/doctor/{doctorId}/appointments</h3>
<p><strong>Descrição:</strong> Retorna todos os agendamentos do médico.</p>
<p><strong>Parâmetros:</strong></p>
<ul>
  <li><code>doctorId</code> (UUID) – ID do médico</li>
</ul>
<p><strong>Resposta:</strong> Lista de <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentDtoDoc.md">AppointmentDto</a> (200 OK)</p>
