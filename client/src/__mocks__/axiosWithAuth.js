import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization:
        "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ",
    },
  });
};
