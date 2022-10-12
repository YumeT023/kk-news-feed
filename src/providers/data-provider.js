import { environment } from '../conf/environment';
import axios from 'axios';

const getURLFromResource = resource => environment.apiDev + `/${resource}`;

export const dataProvider = {
  getList: resource => axios.get(getURLFromResource(resource)).then(({ data }) => data),
  getById: (resource, id) => axios.get(getURLFromResource(resource) + `/${id}`).then(({ data }) => data),
  deleteById: (resource, id) => axios.delete(getURLFromResource(resource) + `/${id}`).then(({ data }) => data),
};
