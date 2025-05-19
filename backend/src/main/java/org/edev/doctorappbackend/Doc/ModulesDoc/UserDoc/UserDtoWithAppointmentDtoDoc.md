<h1>Record: UserDtoWithAppointmentDto</h1>
<p>DTO que representa os dados do usuário incluindo uma lista detalhada de agendamentos com informações adicionais.</p>

<h2>Campos</h2>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>UUID</td>
      <td>Identificador único do usuário.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Nome completo do usuário.</td>
    </tr>
    <tr>
      <td>email</td>
      <td>String</td>
      <td>Email do usuário.</td>
    </tr>
    <tr>
      <td>appointments</td>
      <td>List&lt;<a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AppointmentDoc/AppointmentDtoDoc.md">AppointmentDto</a>&gt;</td>
      <td>Lista de agendamentos detalhados do usuário.</td>
    </tr>
  </tbody>
</table>
