<h1>Record: DoctorDto</h1>
<p>DTO que representa um médico, incluindo suas informações e seus agendamentos.</p>

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
      <td>doctor</td>
      <td><a href="#UserDto">UserDto</a></td>
      <td>Dados do médico.</td>
    </tr>
    <tr>
      <td>appointments</td>
      <td>List&lt;<a href="#Appointment">Appointment</a>&gt;</td>
      <td>Lista de agendamentos relacionados ao médico.</td>
    </tr>
  </tbody>
</table>
