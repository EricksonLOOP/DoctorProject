<h1>Record: DoctorsDto</h1>
<p>DTO que representa uma página de médicos, incluindo a lista de médicos e informações de paginação.</p>

<h2>Campos</h2>
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>doctors</td>
      <td>List&lt;<a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/UserDoc/DoctorDtoDoc.md">DoctorDto</a>&gt;</td>
      <td>Lista de médicos na página atual.</td>
    </tr>
    <tr>
      <td>currentPage</td>
      <td>int</td>
      <td>Número da página atual.</td>
    </tr>
    <tr>
      <td>totalPages</td>
      <td>int</td>
      <td>Total de páginas disponíveis.</td>
    </tr>
    <tr>
      <td>totalElements</td>
      <td>long</td>
      <td>Total de elementos (médicos) disponíveis.</td>
    </tr>
    <tr>
      <td>pageSize</td>
      <td>int</td>
      <td>Número de elementos por página.</td>
    </tr>
    <tr>
      <td>isLast</td>
      <td>boolean</td>
      <td>Indica se esta é a última página.</td>
    </tr>
  </tbody>
</table>
