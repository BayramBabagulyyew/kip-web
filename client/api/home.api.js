import { request } from './generic.api';

export const GET_ABOUT = () => request({ url: `about`, method: 'PATCH' });

export const GET_PRODUCTS = () => request({ url: `products-services`, method: 'PATCH' });
export const GET_PRODUCTS_ONE = ({ id }) => request({ url: `services/find/${id}`, method: 'POST' });

export const GET_PRODUCTS_SLUG = ({ slug }) =>
  request({ url: `services/name/${slug}`, method: 'GET' });

export const GET_PRODUCTS_LIMIT = () => request({ url: `services/`, method: 'PATCH' });

export const GET_HOME = () => request({ url: `home`, method: 'PATCH' });

export const GET_NEWS = ({ limit, page }) =>
  request({ url: `news`, method: 'PATCH', params: { limit, page } });
export const GET_NEWS_ALL = ({ limit, page }) =>
  request({ url: `news/all`, method: 'POST', data: { limit, page } });
export const GET_NEWS_ID = ({ id }) => request({ url: `news/one/${id}`, method: 'GET' });
export const GET_NEWS_SLUG = ({ slug }) => request({ url: `news/name/${slug}`, method: 'GET' });

export const GET_ABOUT_LIMIT = () => request({ url: `projects/all`, method: 'POST' });
export const GET_PROJECTS = () => request({ url: `projects`, method: 'PATCH' });
export const GET_PROJECT_ONE = ({ id }) => request({ url: `projects/one/${id}`, method: 'POST' });

export const GET_PROJECT_SLUG = ({ slug }) =>
  request({ url: `projects/name/${slug}`, method: 'GET' });

export const POST_MAIL = ({ data }) => request({ url: `mail`, method: 'POST', data: data });

export const GET_GALLERY = ({ limit, page }) =>
  request({ url: `gallery`, method: 'GET', params: { limit, page } });

export const GET_ALL_GALLERY = () => request({ url: `gallary/all`, method: 'PATCH' });

export const GET_PARTNERS = () => request({ url: `partners`, method: 'PATCH' });

export const GET_EHS = () => request({ url: `ecology`, method: 'PATCH' });
