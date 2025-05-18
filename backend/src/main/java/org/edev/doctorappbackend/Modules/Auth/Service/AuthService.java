package org.edev.doctorappbackend.Modules.Auth.Service;

import com.sun.net.httpserver.Authenticator;
import org.edev.doctorappbackend.Modules.Auth.Models.CreateModel;
import org.edev.doctorappbackend.Modules.Auth.Models.LoginModel;
import org.edev.doctorappbackend.Modules.Auth.Models.SuccessLoginDto;

public interface AuthService {
    SuccessLoginDto login(LoginModel loginModel);
    void signup(CreateModel createModel);
}
