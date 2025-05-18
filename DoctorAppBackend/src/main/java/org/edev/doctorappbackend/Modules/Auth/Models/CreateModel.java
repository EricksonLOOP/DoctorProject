package org.edev.doctorappbackend.Modules.Auth.Models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.edev.doctorappbackend.Modules.User.Models.Role;

public record CreateModel (
        @Email(message = "Coloque um email válido")
        @NotNull(message = "O email é obrigatório")
        String email,
        @Size(min = 3, max = 50, message = "O nome deve conter de 3 à 50 caracteres")
        @NotBlank(message = "Nome é obrigatório")
        String name,
        @Size(min = 8, max = 15, message = "A senha deve ter de 8 à 15 caracteres")
        @NotBlank(message = "Senha é obrigatória")
        String password,
        @NotNull(message = "Tipo é obrigatório")
        Role type
){
}
