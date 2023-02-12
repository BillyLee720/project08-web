const MongoClient = require('mongodb').MongoClient;

const userModuleSignig = (values) => {
  return new Promise((resolve, reject) => {
    if (values.accountId === 'aa1234') {
      if (values.password === 'aa9876') {
        resolve({ message: '登入成功' });
      } else {
        reject({ message: '密碼錯誤' });
      }
    } else {
      reject({ message: '無此帳號' });
    }
  });
};

module.exports = {
  userModuleSignig,
};
