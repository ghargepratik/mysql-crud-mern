import axios from "axios";

//Fetch All Products
async function fetchAllProducts() {
  try {
    //CALLING POST API
    const res = await axios.get(`http://localhost:8080/api/product/get`);
    console.log("res data All Product>>>>>>>>", res.data.data);
    return res.data;
  } catch (err) {
    console.log("err fetchAllProducts>>", err);
    return err;
  }
}

//GET SINGLE PRODUCT BY ID
async function getSingleProductFunction(id) {
  try {
    //CALLING POST API
    const res = await axios.get(`http://localhost:8080/api/product/get/${id}`);
    console.log("res data Singlr Product>>>>>>>>", res.data.data);
    return res.data;
  } catch (err) {
    console.log("err getSingleProductFunction>>", err);
    return err;
  }
}

//Create PRODUCTS
async function createProductFunction(values) {
  try {
    //CALLING POST API
    const res = await axios.post(
      `http://localhost:8080/api/product/create`,
      values
    );
    console.log("res data create Product>>>>>>>>", res.data.data);
    return res.data;
  } catch (err) {
    console.log("err createProduct>>", err);
    return err;
  }
}

//UPDATE SINGLE PRODUCT BY ID
async function updateProductFunction(id, values) {
  try {
    //CALLING POST API
    const res = await axios.put(
      `http://localhost:8080/api/product/update/${id}`,
      values
    );
    console.log("res data update Product>>>>>>>>", res.data.data);
    return res.data;
  } catch (err) {
    console.log("err updateProduct>>", err);
    return err;
  }
}

//DELETE SINGLE PRODUCT BY ID
async function deleteProductFunction(id) {
  try {
    //CALLING POST API
    const res = await axios.delete(
      `http://localhost:8080/api/product/delete/${id}`
    );
    console.log("res data update Product>>>>>>>>", res.data.data);
    return res.data;
  } catch (err) {
    console.log("err deleteProduct>>", err);
    return err;
  }
}

export {
  fetchAllProducts,
  getSingleProductFunction,
  createProductFunction,
  updateProductFunction,
  deleteProductFunction,
};
