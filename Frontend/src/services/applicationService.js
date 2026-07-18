import api from './api';

export const getApplications = () => api.get('/applications');
export const createApplication = (data) => api.post('/applications', data);
export const updateApplicationStatus = (id, data) => api.put(`/applications/${id}`, data);
export const deleteApplication = (id) => api.delete(`/applications/${id}`);
