<h1>Entidade: History</h1>
<p>Representa um registro histórico de agendamentos ou atendimentos médicos relacionados a um ou mais usuários.</p>

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
      <td>Identificador único do histórico.</td>
    </tr>
    <tr>
      <td><code>scheduledDate</code></td>
      <td><code>String</code></td>
      <td>Data agendada para o atendimento histórico.</td>
    </tr>
    <tr>
      <td><code>initHour</code></td>
      <td><code>String</code></td>
      <td>Horário de início do atendimento.</td>
    </tr>
    <tr>
      <td><code>finishHour</code></td>
      <td><code>String</code></td>
      <td>Horário de término do atendimento.</td>
    </tr>
    <tr>
      <td><code>doctorId</code></td>
      <td><code>UUID</code></td>
      <td>Identificador do médico associado ao histórico.</td>
    </tr>
    <tr>
      <td><code>createdAt</code></td>
      <td><code>LocalDateTime</code></td>
      <td>Data e hora de criação do registro, gerado automaticamente.</td>
    </tr>
    <tr>
      <td><code>users</code></td>
      <td>Lista de <a href="#User">User</a></td>
      <td>Usuários vinculados a este histórico. Relacionamento <code>ManyToMany</code>.</td>
    </tr>
  </tbody>
</table>
