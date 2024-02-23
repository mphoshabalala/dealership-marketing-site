// const { fromString } = require("uuidv4");
// const fs = require("fs");

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

// const convertFromBase64ToJpg = (base64String, outputFilePath) => {
//   return new Promise((resolve, reject) => {
//     const base64Data = base64String.replace(/^data:image\/jpg:base64,/, ""); //replace what is represented by the regex to ''
//     fs.writeFile(outputFilePath, base64Data, "base64", (error) => {
//       if (error) reject(error);
//       else resolve(outputFilePath);
//     });
//   });
// };

// const convertFromBase64ToPdf = (base64String, outputFilePath) => {
//   return new Promise((resolve, reject) => {
//     const base64Data = base64String.replace(
//       /^data:application\/pdf;base64,/,
//       ""
//     );

//     fs.writeFile(outputFilePath, base64Data, "base64", (error) => {
//       if (error) reject(error);
//       else resolve(outputFilePath);
//     });
//   });
// };

module.exports = {
  convertToBase64,
  // convertFromBase64ToJpg,
  // convertFromBase64ToPdf,
};
