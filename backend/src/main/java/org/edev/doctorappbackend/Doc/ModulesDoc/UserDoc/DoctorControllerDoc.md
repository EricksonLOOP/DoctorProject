<h1>Controller: DoctorController</h1>
<p>Responsável por operações relacionadas aos médicos cadastrados no sistema.</p>

<h2>Endpoints</h2>

<h3>GET /api/doctors</h3>
<p><strong>Descrição:</strong> Retorna uma lista paginada de médicos disponíveis no sistema.</p>
<p><strong>Parâmetros de query:</strong></p>
<ul>
  <li><code>page</code> (opcional, padrão = 0): Número da página a ser buscada.</li>
</ul>
<p><strong>Resposta:</strong> <a href="#DoctorsDto">DoctorsDto</a> (200 OK)</p>

<hr>

<h3>GET /api/doctors/doctor/{id}</h3>
<p><strong>Descrição:</strong> Retorna os dados de um médico específico, incluindo suas consultas agendadas.</p>
<p><strong>Path Variable:</strong> <code>id</code>: UUID do médico</p>
<p><strong>Resposta:</strong> <a href="#DoctorDto">DoctorDto</a> (200 OK)</p>
