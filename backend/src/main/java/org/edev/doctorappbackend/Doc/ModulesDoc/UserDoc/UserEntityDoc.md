<h1>Entidade: User</h1>
<p>Representa um usuário do sistema, que pode ser um paciente ou um médico.</p>

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
      <td>Identificador único do usuário.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>String</code></td>
      <td>Nome completo do usuário.</td>
    </tr>
    <tr>
      <td><code>email</code></td>
      <td><code>String</code></td>
      <td>E-mail do usuário. Deve ser único no sistema.</td>
    </tr>
    <tr>
      <td><code>password</code></td>
      <td><code>String</code></td>
      <td>Senha criptografada utilizada para autenticação.</td>
    </tr>
    <tr>
      <td><code>role</code></td>
      <td><a href="#Role">Role</a></td>
      <td>Papel do usuário no sistema, podendo ser, por exemplo, paciente ou médico.</td>
    </tr>
    <tr>
      <td><code>appointments</code></td>
      <td>Lista de <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentEntityDoc.md">Appointment</a></td>
      <td>Agendamentos vinculados ao usuário. Relacionamento <code>OneToMany</code>.</td>
    </tr>
    <tr>
      <td><code>histories</code></td>
      <td>Lista de <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/HistoryDoc/HistoryEntityDoc.md">History</a></td>
      <td>Histórico médico compartilhado com o usuário. Relacionamento <code>ManyToMany</code>.</td>
    </tr>
  </tbody>
</table>

<h2>Métodos auxiliares</h2>
<ul>
  <li><code>fromUserToUserDto()</code>: Converte a entidade <code>User</code> para um DTO simplificado contendo <code>id</code>, <code>name</code>, <code>email</code> e <a href="#Appointment">appointments</a>.</li>
  <li><code>fromUserToUserDtoWithAppointmentDtoList(UserRepository userRepository)</code>: Converte o usuário para um DTO contendo os dados básicos e os agendamentos formatados como <code>AppointmentDto</code>, com dados do médico incluídos.</li>
  <li><code>getAppointmentDtoFromUserToAppointmentDto(UserRepository userRepository)</code>: Converte a lista de <a href="#Appointment">appointments</a> do usuário para <code>AppointmentDto</code>, incluindo informações do médico.</li>
</ul>
