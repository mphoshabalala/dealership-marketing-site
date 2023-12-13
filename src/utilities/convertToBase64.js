// decode files to base 64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.onerror = (error) => {
      reject(error);
    };
  });
};

module.exports = { convertToBase64 };
