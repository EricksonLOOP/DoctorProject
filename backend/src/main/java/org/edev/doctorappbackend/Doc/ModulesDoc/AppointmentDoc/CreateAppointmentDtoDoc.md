<h1>Record: CreateAppointmentDto</h1>
<p>DTO utilizado para criar um novo agendamento, contendo os dados necessários para a criação.</p>

<h2>Campos</h2>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Validação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>initHour</td>
      <td>String</td>
      <td>Hora de início do agendamento.</td>
      <td>Não pode ser vazio (<code>@NotBlank</code> com mensagem "Coloque uma hora de inicio válida").</td>
    </tr>
    <tr>
      <td>finishHour</td>
      <td>String</td>
      <td>Hora de término do agendamento.</td>
      <td>Não pode ser vazio (<code>@NotBlank</code> com mensagem "Coloque uma hora fim válida").</td>
    </tr>
    <tr>
      <td>schuduledDate</td>
      <td>String</td>
      <td>Data agendada para o compromisso.</td>
      <td>Não pode ser vazio (<code>@NotBlank</code> com mensagem "Coloque uma data válida").</td>
    </tr>
  </tbody>
</table>
