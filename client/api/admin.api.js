import { request } from "./generic.api";

export const LOGIN = ({ data }) =>
  request({ url: `auth/signin`, data, method: "post" });

export const ADD_ABOUT = ({ data }) =>
  request({ url: `about/upsert`, data, method: "post" });
export const GET_ABOUT = () => request({ url: `/about`, method: "get" });

export const ADD_ABOUT_INFO = ({ data }) =>
  request({ url: `information/upsert`, data, method: "post" });
export const GET_ABOUT_INFO = () =>
  request({ url: `/information`, method: "get" });

export const ADD_ABOUT_CONTACT = ({ data }) =>
  request({ url: `contact/upsert`, data, method: "post" });
export const GET_ABOUT_CONTACT = () =>
  request({ url: `/contact`, method: "get" });

export const GET_PROJECTS_ALL = () =>
  request({ url: `/projects/all`, method: "post" });

export const DELETE_SLIDER = ({ data }) =>
  request({ url: `/admin/slider/delete`, data, method: "post" });

export const GET_EHS = () => request({ url: `/ecology`, method: "patch" });
