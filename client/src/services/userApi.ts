import { $axios } from "@/api/api";
import { SERVER_URL } from "@/constants/url";
import { IEmailPassword } from "@/app/login/page";

export class UserApi {
  static async auth() {
    try {
      const response = await $axios.get(SERVER_URL + "/api/users/auth", {
        headers: {
          Authorization: 'Bearer ' + localStorage['token']
        }
      });
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  static async registration(user: IEmailPassword) {
    try {
      $axios.post(SERVER_URL + "/api/users/registration", user);
    } catch (e) {
      console.log(e);
    }
  }

  static async login(user: IEmailPassword) {
    try {
      const response = await $axios.post(SERVER_URL + "/api/users/login", user);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}