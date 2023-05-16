import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  getUser() {
    return Api().get('api/user');
  },
  updateUser(userData) {
    return Api().patch('/user', userData);
  },
  getWeightData(userId) {
    return Api().get(`/user/${userId}/bmi`);
  },
  
};
