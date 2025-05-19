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
      <td>Retorna uma lista paginada de médicos encapsulada em <a href="#DoctorsDto">DoctorsDto</a>, de acordo com o número da página especificado.</td>
    </tr>
    <tr>
      <td><code>DoctorDto getDoctor(UUID id)</code></td>
      <td>Retorna os detalhes do médico identificado por <code>id</code> na forma de um objeto <a href="#DoctorDto">DoctorDto</a>.</td>
    </tr>
  </tbody>
</table>
