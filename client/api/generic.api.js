import axios from "axios";
const baseURL = process.env.BASE_API;
export const request = async ({
  url,
  method = "post",
  headers = {},
  params = {},
  data = {},
  onUploadProgress = {},
  file = false,
}) => {
  if (file) {
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "multipart/form-data";
    const formData = new FormData();
    if (data?.files?.length) {
      for (let i = 0; i < data.files.length; i++) {
        formData.append("files", data.files[i]);
      }
    }
    for (let [key, value] of Object.entries(data)) {
      if (key !== "files") {
        formData.append(key, value);
      }
    }
    data = formData;
  }

  if (process.client) {
    if (localStorage?.getItem("auth")) {
      headers["auth"] = localStorage.getItem("auth");
    }
    if (localStorage?.getItem("Authorization")) {
      headers["Authorization"] = localStorage.getItem("Authorization");
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
      headers["Access-Control-Allow-Headers"] =
        "Content-Type, X-Auth-Token, Origin, Authorization";
    }
  }
  const response = await axios({
    url: `${baseURL}${url}`,
    method,
    headers,
    ...onUploadProgress,
    params,
    data,
  });
  return response.data;
};
