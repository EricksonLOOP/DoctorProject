<h1>Record: LoginModel</h1>
<p>DTO utilizado para autenticação de usuários no sistema.</p>

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
      <td>Endereço de e-mail do usuário para login.</td>
      <td>
        <ul>
          <li>Não pode estar em branco.</li>
          <li>Deve ser um e-mail válido.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>password</td>
      <td>String</td>
      <td>Senha do usuário para autenticação.</td>
      <td>
        <ul>
          <li>Não pode estar em branco.</li>
          <li>Deve conter entre 8 e 20 caracteres.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
