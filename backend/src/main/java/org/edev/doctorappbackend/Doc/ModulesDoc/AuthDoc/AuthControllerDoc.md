<h1>Controller: AuthController</h1>
<p>Responsável pelas operações de autenticação e cadastro de usuários.</p>

<h2>Endpoints</h2>

<h3>POST /api/auth/signup</h3>
<p><strong>Descrição:</strong> Cria um novo usuário no sistema (paciente ou médico).</p>
<p><strong>Body:</strong> <a href="#CreateModel">CreateModel</a></p>
<p><strong>Resposta:</strong> 201 Created (sem corpo)</p>

<hr>

<h3>POST /api/auth/login</h3>
<p><strong>Descrição:</strong> Autentica o usuário e retorna o token JWT e a URL de redirecionamento.</p>
<p><strong>Body:</strong> <a href="#LoginModel">LoginModel</a></p>
<p><strong>Resposta:</strong> <a href="#SuccessLoginDto">SuccessLoginDto</a> (200 OK)</p>
