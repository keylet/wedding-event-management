import axios from 'axios';

const PROV_GET   = 'http://localhost:4004';
const PROV_DEL   = 'http://localhost:4005';
const LOC_GET    = 'http://localhost:4002';
const LOC_CREATE = 'http://localhost:4001';
const LOC_DEL    = 'http://localhost:4003';

export const getProvinces   = () => axios.get(`${PROV_GET}/provinces/`);
export const deleteProvince = id => axios.delete(`${PROV_DEL}/provinces/${id}/`);

export const getLocations   = () => axios.get(`${LOC_GET}/locations/`);
export const createLocation = data => axios.post(`${LOC_CREATE}/locations/`, data);
export const deleteLocation = id => axios.delete(`${LOC_DEL}/locations/${id}/`);
