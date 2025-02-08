import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const [items, setItems] = useState([{ name: "", price: "", size: "", image: "" }]);

  const addItem = () => {
    setItems([...items, { name: "", price: "", size: "", image: "" }]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedItems = [...items];
        updatedItems[index].image = reader.result;
        setItems(updatedItems);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("items", JSON.stringify(items));
    
    await fetch("https://getform.io/f/aroldvyb", {
      method: "POST",
      body: formData,
    });
    alert("Items submitted successfully!");
    setItems([{ name: "", price: "", size: "", image: "" }]);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Panel - Add Items</h2>
      <form onSubmit={handleSubmit}>
        {items.map((item, index) => (
          <div key={index} className="mb-4 p-3 border rounded">
            <h5>Item {index + 1}</h5>
            <div className="mb-3">
              <label className="form-label">Item Name</label>
              <input type="text" name="name" className="form-control" value={item.name} onChange={(e) => handleChange(index, e)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="number" name="price" className="form-control" value={item.price} onChange={(e) => handleChange(index, e)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Size</label>
              <input type="text" name="size" className="form-control" value={item.size} onChange={(e) => handleChange(index, e)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" className="form-control" accept="image/*" onChange={(e) => handleImageChange(index, e)} />
              {item.image && <img src={item.image} alt="Preview" className="mt-2" width="100" />}
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-secondary me-2" onClick={addItem}>Add More Items</button>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AdminPanel;
