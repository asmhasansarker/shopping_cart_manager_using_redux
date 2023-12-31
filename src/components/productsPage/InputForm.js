import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/product/actions";

export default function InputForm() {
  const [input, setInput] = useState({
    name: "",
    category: "",
    imgUrl: "",
    price: "",
    quantity: "",
  });
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    setInput({
      name: "",
      category: "",
      imgUrl: "",
      price: "",
      quantity: "",
    });
  };

  const inputHandler = (fieldName, e) => {
    if (fieldName === "price" || fieldName === "quantity") {
      setInput({ ...input, [fieldName]: Number(e.target.value) });
    } else {
      setInput({ ...input, [fieldName]: e.target.value });
    }
  };

  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          onSubmit={submitHandler}
          className="space-y-4 text-[#534F4F]"
          id="addProductForm"
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="inputName">Product Name</label>
            <input
              className="addProductInput"
              id="inputName"
              type="text"
              value={input?.name}
              onChange={(e) => inputHandler("name", e)}
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="inputCategory">Category</label>
            <input
              className="addProductInput"
              id="inputCategory"
              type="text"
              value={input?.category}
              onChange={(e) => inputHandler("category", e)}
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="inputImage"
              type="text"
              value={input?.imgUrl}
              onChange={(e) => inputHandler("imgUrl", e)}
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="inputPrice"
                value={input?.price}
                onChange={(e) => inputHandler("price", e)}
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="inputQuantity"
                value={input?.quantity}
                onChange={(e) => inputHandler("quantity", e)}
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
