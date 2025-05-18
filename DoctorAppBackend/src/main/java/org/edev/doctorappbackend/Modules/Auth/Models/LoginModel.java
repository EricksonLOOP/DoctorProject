package org.edev.doctorappbackend.Modules.Auth.Models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginModel(
        @NotBlank(message = "O email não pode estar em branco")
        @Email(message = "Email inválido")
        String email,
        @NotBlank(message = "A senha não pode estar em branco")
        @Size(min = 8, max = 20,message = "Senga inválida")
        String password
) {
}
