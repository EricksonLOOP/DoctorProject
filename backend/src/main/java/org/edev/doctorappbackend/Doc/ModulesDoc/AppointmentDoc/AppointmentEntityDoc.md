<h1>Entidade: Appointment</h1>
<p>Representa um agendamento de horário entre um paciente e um médico no sistema.</p>

<h2>Atributos</h2>
<table>
  <thead>
    <tr>
      <th>Campo</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>UUID</code></td>
      <td>Identificador único do agendamento.</td>
    </tr>
    <tr>
      <td><code>initHour</code></td>
      <td><code>String</code></td>
      <td>Horário de início do agendamento (ex: "14:00").</td>
    </tr>
    <tr>
      <td><code>finishHour</code></td>
      <td><code>String</code></td>
      <td>Horário de término do agendamento (ex: "15:00").</td>
    </tr>
    <tr>
      <td><code>available</code></td>
      <td><code>boolean</code></td>
      <td>Indica se o horário está disponível (<code>true</code>) ou não (<code>false</code>).</td>
    </tr>
    <tr>
      <td><code>doctorId</code></td>
      <td><code>UUID</code></td>
      <td>Identificador do médico relacionado ao agendamento.</td>
    </tr>
    <tr>
      <td><code>scheduledDate</code></td>
      <td><code>String</code></td>
      <td>Data agendada para o atendimento (ex: "2025-05-20").</td>
    </tr>
    <tr>
      <td><code>user</code></td>
      <td><a href="#User">User</a></td>
      <td>Representa o paciente que agendou o horário. Pode ser <code>null</code> caso o horário esteja disponível.</td>
    </tr>
  </tbody>
</table>

<h2>Métodos auxiliares</h2>
<ul>
  <li><code>getUserDto()</code>: Retorna um DTO simplificado do paciente com <code>id</code>, <code>name</code>, <code>email</code>, e uma lista vazia para atributos adicionais.</li>
  <li><code>getAppointmentWithDoctorDto(UserRepository doctorRepository)</code>: Retorna um DTO de agendamento com os dados do agendamento e do médico associado.</li>
  <li><code>getAppointmentWithoutUser()</code>: Retorna uma instância de <code>Appointment</code> sem o paciente associado, útil para evitar exposição de dados sensíveis.</li>
</ul>
