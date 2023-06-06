import Api from '@/services/Api';

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
  getUser(userId) {
    return Api().get(`/user/${userId}`);
  },
  updateUser(userData) {
    return Api().patch('/user', userData);
  },
  getWeightData(userId) {
    return Api().get(`/user/${userId}/bmi`);
  },
  changePassword(userId, passwordData) {
    return Api().patch('/user/password', { userId, ...passwordData });
  },
  forgotPassword(credentials) {
    return Api().post('forgotPassword', credentials);
  },
};
