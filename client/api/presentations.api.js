import { request } from './generic.api';

// Public: latest presentation used by the client (optionally filtered by language)
export const GET_PRESENTATION_LATEST = ({ language } = {}) =>
  request({ url: `presentation/latest`, method: 'GET', params: { language } });

// Admin CRUD
export const GET_PRESENTATIONS = ({ page, limit } = {}) =>
  request({ url: `presentation`, method: 'GET', params: { page, limit } });

export const GET_PRESENTATION = ({ id }) =>
  request({ url: `presentation/${id}`, method: 'GET' });

export const CREATE_PRESENTATION = ({ data }) =>
  request({ url: `presentation`, method: 'POST', data });

export const UPDATE_PRESENTATION = ({ id, data }) =>
  request({ url: `presentation/${id}`, method: 'PATCH', data });

export const DELETE_PRESENTATION = ({ id }) =>
  request({ url: `presentation/${id}`, method: 'DELETE' });
