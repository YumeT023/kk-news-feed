import { environment } from '../conf/environment';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: environment.apiDev,
});

export const getAll = resource => axios.get(resource);

export const getById = (resource, id) => axios.get(resource + '/' + id);

export const deleteById = (resource, id) => axios.delete(resource + '/' + id);
