<h1>Controller: AuthController</h1>
<p>Responsável pelas operações de autenticação e cadastro de usuários.</p>

<h2>Endpoints</h2>

<h3>POST /api/auth/signup</h3>
<p><strong>Descrição:</strong> Cria um novo usuário no sistema (paciente ou médico).</p>
<p><strong>Body:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/CreateModelDoc.md">CreateModel</a></p>
<p><strong>Resposta:</strong> 201 Created (sem corpo)</p>

<hr>

<h3>POST /api/auth/login</h3>
<p><strong>Descrição:</strong> Autentica o usuário e retorna o token JWT e a URL de redirecionamento.</p>
<p><strong>Body:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/LoginModelDto.md">LoginModel</a></p>
<p><strong>Resposta:</strong> <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/AuthDoc/SuccessLoginDtoDoc.md">SuccessLoginDto</a> (200 OK)</p>
