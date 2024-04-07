import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.banghehoamai.com/api/",
  //   timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

instance.defaults.headers.post["Accept"] = "application/json";
instance.defaults.headers.get["Accept"] = "application/json";
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
instance.defaults.headers.post["Authorization"] = localStorage.getItem("token");
instance.defaults.headers.common["X-CSRF-TOKEN"] = window.csrf_token;
instance.defaults.headers.delete["Authorization"] =
  localStorage.getItem("token");
export default instance;
