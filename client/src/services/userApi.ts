import { $axios } from "@/api/api";
import { IEmailPassword } from "@/app/login/page";

export class UserApi {
  static async auth() {
    try {
      const response = await $axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/api/users/auth", {
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
      $axios.post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/users/registration", user);
    } catch (e) {
      console.log(e);
    }
  }

  static async login(user: IEmailPassword) {
    try {
      const response = await $axios.post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/users/login", user);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}