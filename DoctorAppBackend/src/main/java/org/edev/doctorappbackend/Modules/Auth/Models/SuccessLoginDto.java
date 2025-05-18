package org.edev.doctorappbackend.Modules.Auth.Models;

public record SuccessLoginDto(
        String token,
        String url
) {
}
