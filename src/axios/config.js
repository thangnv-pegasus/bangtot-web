import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  //   timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

instance.defaults.headers.post["Accept"] = "application/json";
instance.defaults.headers.get["Accept"] = "application/json";
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
export default instance;
