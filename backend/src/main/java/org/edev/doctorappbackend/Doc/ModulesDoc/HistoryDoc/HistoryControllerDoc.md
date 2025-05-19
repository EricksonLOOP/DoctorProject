<h1>Controller: HistoryController</h1>
<p>Responsável por retornar o histórico de agendamentos do usuário autenticado.</p>

<h2>Endpoints</h2>

<h3>GET /api/history</h3>
<p><strong>Descrição:</strong> Retorna uma lista com o histórico de agendamentos do usuário autenticado.</p>
<p><strong>Requisitos:</strong> Header com token JWT para autenticação.</p>
<p><strong>Resposta:</strong> Lista de <a href="#HistoryDto">HistoryDto</a> (200 OK)</p>
