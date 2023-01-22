import axios from "axios";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://616b5ead16c3fa001717167c.mockapi.io/productos")
      .then((rpta) => {
        resolve(rpta.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
