<h1>AuthService</h1>
<p>Define os métodos para autenticação e cadastro de usuários no sistema.</p>

<h2>Métodos</h2>
<table>
  <thead>
    <tr>
      <th>Assinatura</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SuccessLoginDto login(LoginModel loginModel)</code></td>
      <td>Realiza o login do usuário utilizando os dados fornecidos em <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/LoginModelDto.md">LoginModel</a> e retorna um objeto <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/SuccessLoginDtoDoc.md">SuccessLoginDto</a> com informações sobre o sucesso da operação.</td>
    </tr>
    <tr>
      <td><code>void signup(CreateModel createModel)</code></td>
      <td>Realiza o cadastro de um novo usuário com os dados fornecidos em <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/CreateModelDoc.md">CreateModel</a>.</td>
    </tr>
  </tbody>
</table>
