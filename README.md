<h1>Agendamento de Horários</h1>
<p>Projeto fullstack para agendamento de horários entre pacientes e médicos.</p>
<br/>
<i>Desenvolvido por: Erickson A. C. Dias</i>
<hr/>

<h2>Como rodar o projeto?</h2>
<p>Veja abaixo como preparar o ambiente para rodar a aplicação localmente sem erros.</p>

<h3>Rodando com Docker</h3>
<p>
A opção com Docker é mais viável devido à versatilidade proporcionada pela containerização, que acelera a execução do projeto.
</p>
<p><strong>Passos para rodar o frontend e backend com Docker:</strong></p>
<ol>
  <li>Certifique-se de ter o <code>Docker</code> instalado. Caso não tenha, baixe-o <a href="https://docs.docker.com/get-started/introduction/get-docker-desktop/">aqui</a>.</li>
  <li>Clone o repositório do projeto.</li>
  <li>No terminal, navegue até a pasta <code>/DoctorProject</code>.</li>
  <li>Execute o comando <code>docker compose up</code> para criar os containers do Backend (Java) e do Frontend (Next.js).</li>
  <li>Após a conclusão, o projeto estará disponível localmente.</li>
  <li>O frontend estará acessível em <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</li>
  <li>O backend estará acessível em <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.</li>
</ol>

<h3>Frontend - Next.js</h3>
<p>
O frontend foi desenvolvido com Next.js, um framework moderno e eficiente para aplicações web.
</p>
<p><strong>Passos para rodar o frontend manualmente:</strong></p>
<ol>
  <li>Certifique-se de ter o <code>Node.js</code> instalado (versão 18 ou superior).</li>
  <li>Clone o repositório do projeto.</li>
  <li>No terminal, navegue até a pasta <code>/frontend</code>.</li>
  <li>Execute o comando <code>npm install</code> para instalar as dependências.</li>
  <li>Crie o build do projeto com <code>npm run build</code>.</li>
  <li>Inicie a aplicação com <code>npm run start</code>.</li>
  <li>Acesse <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> no seu navegador.</li>
</ol>

<h3>Backend - Java 21 + Spring Boot</h3>
<p>
O backend foi implementado com Java 21 e Spring Boot, garantindo uma arquitetura robusta e escalável.
</p>
<p><strong>Passos para rodar o backend manualmente:</strong></p>
<ol>
  <li>Certifique-se de ter o <code>Java 21</code> e o <code>Maven</code> instalados.</li>
  <li>Clone o repositório do projeto.</li>
  <li>No terminal, navegue até a pasta <code>/backend</code>.</li>
  <li>Configure as variáveis de ambiente no arquivo <code>application.properties</code> ou <code>application.yml</code> (veja abaixo as credenciais do banco).</li>
  <li>Execute o comando <code>./mvnw spring-boot:run</code> ou inicie pela sua IDE.</li>
  <li>A API estará disponível em <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.</li>
</ol>

<h3>Banco de Dados - PostgreSQL</h3>
<p>
Foi utilizado o PostgreSQL 15 (ou superior) como banco de dados. Para facilitar a execução local, foi utilizado o <strong>NeonDB</strong>, um serviço gratuito que não exige configuração local.
</p>
<p>
As credenciais de conexão são fornecidas automaticamente no ambiente de desenvolvimento. Caso deseje conectar manualmente:
</p>
<ul>
  <li><strong>Host:</strong> <code>neon_db_host</code></li>
  <li><strong>Porta:</strong> <code>5432</code></li>
  <li><strong>Usuário:</strong> <code>neon_user</code></li>
  <li><strong>Senha:</strong> <code>neon_password</code></li>
  <li><strong>Banco de dados:</strong> <code>doctorapp_db</code></li>
</ul>
<p>
A conexão é automática por meio do arquivo <code>application.properties</code> do Spring Boot.
</p>
