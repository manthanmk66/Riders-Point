import axios from "axios";

const AuthenticateUserDataService = (username, password) => {
  return axios
    .post(`http://localhost:8080//auth/login`, {
      username,
      password,
    })
    .then((res) => {
      if (res != null) {
        console.log(res);
        localStorage.setItem("token",result.data.token)
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthenticateUserDataService;