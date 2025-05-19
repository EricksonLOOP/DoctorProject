<h1>Record: CreateModel</h1>
<p>DTO utilizado para o cadastro de novos usuários.</p>

<h2>Campos</h2>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
      <th>Validações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>email</td>
      <td>String</td>
      <td>Endereço de e-mail do usuário.</td>
      <td>
        <ul>
          <li>Deve ser um e-mail válido.</li>
          <li>Não pode ser nulo.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Nome completo do usuário.</td>
      <td>
        <ul>
          <li>Obrigatório.</li>
          <li>Deve ter entre 3 e 50 caracteres.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>password</td>
      <td>String</td>
      <td>Senha para autenticação do usuário.</td>
      <td>
        <ul>
          <li>Obrigatória.</li>
          <li>Deve ter entre 8 e 15 caracteres.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>type</td>
      <td><a href="#Role">Role</a></td>
      <td>Tipo do usuário (ex: DOCTOR, PATIENT).</td>
      <td>Obrigatório.</td>
    </tr>
  </tbody>
</table>
