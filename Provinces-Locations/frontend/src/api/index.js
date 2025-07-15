import axios from 'axios';

// IP pública de tu instancia EC2 en AWS
const IP = 'http://52.7.131.155';

const PROV_GET   = `${IP}:4004`;
const PROV_DEL   = `${IP}:4005`;
const LOC_GET    = `${IP}:4002`;
const LOC_CREATE = `${IP}:4001`;
const LOC_DEL    = `${IP}:4003`;

export const getProvinces   = () => axios.get(`${PROV_GET}/provinces/`);
export const deleteProvince = id => axios.delete(`${PROV_DEL}/provinces/${id}/`);

export const getLocations   = () => axios.get(`${LOC_GET}/locations/`);
export const createLocation = data => axios.post(`${LOC_CREATE}/locations/`, data);
export const deleteLocation = id => axios.delete(`${LOC_DEL}/locations/${id}/`);
