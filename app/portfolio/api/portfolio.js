import axios from "axios";

const { headers } = require("next/dist/client/components/headers");

axios.defaults.baseURL = "http://localhost:3000";

export async function getEducations() {
  try {
    const res = await axios.get("/educations", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.log("Error getEdu: ", e);
  }
}

export async function login(username, password) {
  try {
    const res = await axios.post("/login",
      {
        username: username,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        },
        withCredentials: true,
      }
    );
    return res;
  } catch (e) {
    console.log("Error Login: ", e);
  }
}