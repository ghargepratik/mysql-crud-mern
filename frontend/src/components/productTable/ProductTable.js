import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {
  deleteProductFunction,
  fetchAllProducts,
} from "../../apis/productsApis.js";
import { convertToNormalDate } from "../../utils/dateConverter.js";
import Loader from "../Loader.js";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const ProductTable = ({
  allProducts,
  setAllProducts,
  openProductModel,
  setIdForUpdate,
}) => {
  const [showLoader, setShowLoader] = useState(false);

  //FETCH ALL Product Data
  async function fetchProductData() {
    try {
      setShowLoader(true);
      let data = await fetchAllProducts();
      if (data.status === "success") {
        setAllProducts(data.data);
        setShowLoader(false);
      }
    } catch (err) {
      console.log("err while fetching product data");
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  function updateHandler(Id) {
    openProductModel();
    setIdForUpdate(Id);
  }

  //DELETE PRODUCT
  async function deleteProductHandler(Id) {
    try {
      let deleteProduct = await deleteProductFunction(Id);
      if (deleteProduct.status === "success") {
        fetchProductData();
        toast.success(`${deleteProduct?.message}`);
        setShowLoader(false);
      }
    } catch (err) {
      toast.error("Something went wrong ,While Deleting");
    }
  }
  return (
    <div className="m-10">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Stock</th>
            <th>Created Date</th>
            <th>Modified Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allProducts?.length > 0 ? (
            allProducts?.map((ele, i) => {
              return (
                <>
                  <tr key={ele?.Id}>
                    <td>{i}</td>
                    <td>{ele?.ProductName}</td>
                    <td>{ele?.Price}</td>
                    <td>{ele.Quantity}</td>
                    <td>{ele.Stock}</td>
                    <td>{convertToNormalDate(ele.CreatedDate)}</td>
                    <td>{convertToNormalDate(ele.ModifiedDate)}</td>
                    <td>
                      <button onClick={() => updateHandler(ele?.Id)}>
                        edit
                      </button>
                      <button onClick={() => deleteProductHandler(ele?.Id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <h3 className="text-center">Zero Products Available</h3>
          )}
        </tbody>
      </Table>
      {showLoader && <Loader />}
    </div>
  );
};

export default ProductTable;
