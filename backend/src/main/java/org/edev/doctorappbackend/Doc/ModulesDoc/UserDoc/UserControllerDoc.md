<h1>Controller: UserController</h1>
<p>Responsável por fornecer os dados do usuário autenticado.</p>

<h2>Endpoints</h2>

<h3>GET /api/user/data</h3>
<p><strong>Descrição:</strong> Retorna os dados do usuário autenticado, incluindo seus agendamentos.</p>
<p><strong>Requisitos:</strong> Header com token JWT para autenticação.</p>
<p><strong>Resposta:</strong> <a href="#UserDtoWithAppointmentDto">UserDtoWithAppointmentDto</a> (200 OK)</p>
