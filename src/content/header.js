import instance from "../axios/config";

const getHeader = async () => {
  const { data } = await instance.get("/home", {
    method: "get",
    headers: {
      "Content-Type": "*",
    },
  });

  return await data;
};

const getUser = async () => {
  const { data } = await instance.get("/user", {
    method: "get",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  return await data
};

export { getHeader, getUser };
