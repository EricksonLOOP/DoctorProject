<h1>Interface: DoctorService</h1>
<p>Define métodos para obter informações sobre médicos no sistema.</p>

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
      <td><code>DoctorsDto getDoctors(int page)</code></td>
      <td>Retorna uma lista paginada de médicos encapsulada em <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/UserDoc/DoctorDtoDoc.md">DoctorsDto</a>, de acordo com o número da página especificado.</td>
    </tr>
    <tr>
      <td><code>DoctorDto getDoctor(UUID id)</code></td>
      <td>Retorna os detalhes do médico identificado por <code>id</code> na forma de um objeto <a href="https://github.com/EricksonLOOP/DoctorProject/blob/main/backend/src/main/java/org/edev/doctorappbackend/Doc/ModulesDoc/UserDoc/DoctorDtoDoc.md">DoctorDto</a>.</td>
    </tr>
  </tbody>
</table>
