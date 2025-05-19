<h1>Record: HistoryDto</h1>
<p>DTO que representa um histórico completo de agendamento, incluindo os dados do histórico, paciente e médico envolvidos.</p>

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
      <td>history</td>
      <td><a href="#HistoryData">HistoryData</a></td>
      <td>Dados essenciais do histórico do agendamento.</td>
    </tr>
    <tr>
      <td>patient</td>
      <td><a href="#UserDto">UserDto</a></td>
      <td>Informações do paciente relacionado ao histórico.</td>
    </tr>
    <tr>
      <td>doctor</td>
      <td><a href="#UserDto">UserDto</a></td>
      <td>Informações do médico relacionado ao histórico.</td>
    </tr>
  </tbody>
</table>
