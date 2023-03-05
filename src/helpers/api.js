import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`, id);
  return data;
};

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const privatHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

privatHost.interceptors.request.use(authInterceptor);

export const UserAPI = {
  async register(formData) {
    const { data } = await publicHost.post('/users/signup', formData);
    return data;
  },
  async userSignInRequest(formData) {
    const { data } = await publicHost.post('/users/login', formData);
    return data;
  },
  async getUserDetailsRequest() {
    const { data } = await privatHost.get('/users/current');
    return data;
  },
  async userLogOutRequest() {
    const { data } = await privatHost.post('/users/logout');
    return data;
  },
};

export const ContactsAPI = {
  async getContacts() {
    const { data } = await privatHost.get('/contacts');
    return data;
  },
  async addContact(contactData) {
    const { data } = await privatHost.post('/contacts', contactData);
    return data;
  },
  async deleteContact(contactId) {
    const { data } = await privatHost.delete(`/contacts/${contactId}`);
    return data;
  },
};
