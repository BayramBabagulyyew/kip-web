import axios from "axios";
const baseURL = process.env.BASE_API;
export const request = async ({
  url,
  method = "post",
  headers = {},
  params = {
    limit: 20,
    page: 1,
    orderBy: "desc", // default order
    sortBy: "createdAt", // default sort
  },
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
