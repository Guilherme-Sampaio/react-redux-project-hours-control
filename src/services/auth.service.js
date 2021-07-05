import requestService from "./request.service";

class AuthServiceProvider {
  login = (user) => {
    return requestService.post("/auth/signin", user);
  };

}

const AuthService = new AuthServiceProvider();

export default AuthService;
