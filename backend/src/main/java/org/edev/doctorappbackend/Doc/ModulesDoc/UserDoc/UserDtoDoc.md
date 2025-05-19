<h1>Record: UserDto</h1>
<p>DTO que representa os dados essenciais de um usuário, incluindo seus agendamentos.</p>

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
      <td>List&lt;<a href="#Appointment">Appointment</a>&gt;</td>
      <td>Lista dos agendamentos associados ao usuário.</td>
    </tr>
  </tbody>
</table>
