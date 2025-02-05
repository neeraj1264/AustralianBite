import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { useCart } from "../../../ContextApi";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Pizza.css";
import { IoMdCloseCircle } from "react-icons/io";

const PizzaPage = ({ id, name, description, price, image, mrp, size }) => {
  const { size1, size2, size3 } = size || {};
  const { priceR, priceM, priceL } = price;

  const {
    decrementCart,
    incrementCart,
    AddToCart,
    showButtons,
    setShowButtons,
    setCartItems,
    updateCartItemQuantity,
  } = useCart();

  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // const [selectedSize, setSelectedSize] = useState(size1);
  const [selectedSize, setSelectedSize] = useState(size1 || "");
  const [selectedSizePrice, setSelectedSizePrice] = useState(priceR);
  const [AddonsPrice, setAddonsPrice] = useState(30);
  const [cheesePrice, setcheesePrice] = useState(40);
  const productShowButtons = showButtons[id] || false;
  const [addons, setAddons] = useState({
    extraCheese: false,
    cheeseburst: false,
    onion: false,
    capsicum: false,
    tomato: false,
    sweetcorn: false,
    mushroom: false,
  });

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setSelectedSize("");
    setSelectedSizePrice(priceR);
    setShow(false);
  };
  const handleAddonChange = (addon) => {
    setAddons((prevAddons) => ({
      ...prevAddons,
      [addon]: !prevAddons[addon],
    }));
  };

  const addonsList = [
    { name: "onion ", key: "onion" },
    { name: "capsicum", key: "capsicum" },
    { name: "tomato", key: "tomato" },
    { name: "sweetcorn", key: "sweetcorn" },
    { name: "mushroom", key: "mushroom" },
  ];

  const cheeselist = [
    { name: "Extra Cheese", key: "extraCheese", prices: { R: 35, M: 50, L: 90 } },
    { name: "CheeseBrust", key: "CheeseBrust", prices: { R: 60, M: 90, L: 110 } },
    { name: "PanBase", key: "PanBase", prices: { R: 10, M: 20, L: 30 } },
    { name: "ThinCrust", key: "ThinCrust", prices: { R: 20, M: 30, L: 50 } },
  ];
  const [selectedCLSize, setSelectedCLSize] = useState("R"); // Default size

  const getTotalPrice = () => {
    let total = selectedSizePrice * quantity;
  
    addonsList.forEach((addon) => {
      if (addons[addon.key]) {
        total += AddonsPrice * quantity;
      }
    });
  
    cheeselist.forEach((addon) => {
      if (addons[addon.key]) {
        const cheesePrice = addon.prices[selectedCLSize]; // Use updated selectedCLSize
        total += cheesePrice * quantity;
      }
    });
  
    return total;
  };
  

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
  
    switch (newSize) {
      case size1:
        setSelectedSizePrice(priceR);
        setSelectedCLSize("R"); // Update selectedCLSize
        break;
      case size2:
        setSelectedSizePrice(priceM);
        setSelectedCLSize("M"); // Update selectedCLSize
        break;
      case size3:
        setSelectedSizePrice(priceL);
        setSelectedCLSize("L"); // Update selectedCLSize
        break;
      default:
        setSelectedSizePrice(priceR);
        setSelectedCLSize("R"); // Update selectedCLSize
    }
  };
  

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddBtnToCart = () => {
    const product = {
      id,
      name,
      price,
      quantity,
      image,
      mrp,
    };
    AddToCart(product);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    incrementCart();
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    if (selectedSize === "") {
      // Handle the case where no size is selected
      alert("Please select a size.");
      return;
    }
    // const selectedAddons = [];
    // addonsList.forEach((addon) => {
    //   if (addons[addon.key]) {
    //     selectedAddons.push({
    //       name: addon.name,
    //       price: AddonsPrice,
    //     });
    //   }
    // });

    const selectedCheeses = [];
    cheeselist.forEach((addon) => {
        if (addons[addon.key]) {
            selectedCheeses.push({
                name: addon.name,
                price: addon.prices[selectedCLSize],  // <-- Fix here, dynamically use the selected size price
            });
        }
    });

    const product = {
      id,
      name: selectedSize ? `${name} [${selectedSize}]` : name,
      price: selectedSizePrice || price,
      quantity,
      image,
      mrp,
      // ...(selectedAddons.length > 0 && { addons: selectedAddons }),
      ...(selectedCheeses.length > 0 && { cheeses: selectedCheeses }),
  };

  let total = selectedSizePrice * quantity;

  // selectedAddons.forEach((addon) => {
  //     total += AddonsPrice * quantity;  // This might need adjustment if addon prices change per size
  // });

  selectedCheeses.forEach((addon) => {
      total += addon.price * quantity;  // Fix: Use the dynamically determined cheese price
  });

  product.totalPrice = total;

  AddToCart(product);
  incrementCart();
  setSelectedSize("");
  setSelectedSizePrice(priceR); 
  setShow(false);
  setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
};

  const handleRemoveToCart = () => {
    decrementCart();
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    updateCartItemQuantity(id, 0);
    setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: false }));
    localStorage.removeItem(`${id}_quantity`);
  };

  useEffect(() => {
    // Retrieve quantity from local storage on component mount
    const storedQuantity = localStorage.getItem(`${id}_quantity`);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity, 10));
      setShowButtons((prevShowButtons) => ({ ...prevShowButtons, [id]: true }));
    }
  }, [id]);

  const hasPriceOptions =
    typeof price === "object" &&
    "priceR" in price &&
    "priceM" in price &&
    "priceL" in price;

  return (
    <>
      <hr />
      <div className="product-card">
        <div className="product-details">
          <h3>{name}</h3>
          <p style={{ fontWeight: "700" }}>
            ₹{priceR || price}
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: ".5rem",
                color: "grey",
              }}
            >
              {mrp}
            </span>
            {!hasPriceOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--yellow)",
                }}
              >
                {(((mrp - price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
            {hasPriceOptions && (
              <span
                style={{
                  marginLeft: ".5rem",
                  color: "var(--yellow)",
                }}
              >
                {(((mrp - priceR || price) / mrp) * 100).toFixed(0)}% off
              </span>
            )}
          </p>
          <p style={{ fontSize: ".8rem" }}>{description}</p>
        </div>
        <div className="add-to-cart">
          <div>
            <img src={image} alt="Product" onClick={handleShow}/>
          </div>
          <div className="add-btn">
            {productShowButtons && (
              <button
                variant="contained"
                style={{
                  color: "whitesmoke",
                  border: "none",
                  background: "var(--in)",
                  borderRadius: ".5rem",
                  boxShadow: "var(--out) 1px 0px 3px 3px",
                }}
                onClick={handleRemoveToCart}
              >
                Added
              </button>
            )}
            {!productShowButtons && (
              <button
                variant="contained"
                className="btn"
                onClick={handleShow}
              >
                ADD
              </button>
            )}
            {hasPriceOptions && (
              <Modal
                className="modeldialog"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton className="modalheader">
                  <img
                    src={image}
                    alt={name}
                  />
                  <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  <h3>Select Size</h3>

                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>{size1}</td>
                        <td>₹{priceR}</td>
                        <td>
                          <input
                            type="radio"
                            value={size1}
                            checked={selectedSize === size1}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size2}</td>
                        <td>₹{priceM}</td>
                        <td>
                          <input
                            type="radio"
                            value={size2}
                            checked={selectedSize === size2}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>{size3}</td>
                        <td>₹{priceL}</td>
                        <td>
                          <input
                            type="radio"
                            value={size3}
                            checked={selectedSize === size3}
                            onChange={handleSizeChange}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                 <h3>Addons</h3>

                  <Table striped bordered hover>
                    <tbody>
                      {cheeselist.map((addon) => (
                        <tr key={addon.key}>
                          <td>{addon.name}</td>
                          <td>₹{addon.prices[selectedCLSize]}</td> {/* Display price based on selected size */}
                          <td>
                            <Form.Check
                              type="checkbox"
                              checked={addons[addon.key]}
                              onChange={() => handleAddonChange(addon.key)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                {/*    <h3>Toppings</h3>

                  <Table
                    striped
                    bordered
                    hover
                    style={{ marginBottom: "10rem" }}
                  >
                    <tbody>
                      {addonsList.map((addon) => (
                        <tr key={addon.key}>
                          <td>{addon.name}</td>
                          <td>₹{AddonsPrice}</td>
                          <td>
                            <Form.Check
                              type="checkbox"
                              checked={addons[addon.key]}
                              onChange={() => handleAddonChange(addon.key)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table> */}
                </Modal.Body>
                <Modal.Footer className="modalfooter">
                  <div className="quantity-update">
                    <Button
                      variant="contained"
                      style={{ color: "var(--yellow)" }}
                      onClick={handleDecrement}
                    >
                      <FaMinus />
                    </Button>
                    <span style={{ margin: "0 0.5rem", color: "white" }}>
                      {quantity}
                    </span>
                    <Button
                      variant="contained"
                      style={{ color: "var(--yellow)", border: "none" }}
                      onClick={handleIncrement}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                  <Button className="addtocart" onClick={handleAddToCart}>
                    Add to Cart
                    <span style={{ paddingLeft: ".3rem", fontWeight: "800" }}>
                      ₹{getTotalPrice()}
                    </span>
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
            {!hasPriceOptions && (
              <Modal
                className="modeldialog"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton className="modalheader">
                  <Modal.Title>
                    <div
                      style={{
                        textAlign: "center",
                        fontWeight: "700",
                      }}
                    >
                      Australian Bite
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{
                    height: "75vh",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "transparent transparent",
                    background: "var(--in)",
                    color: "whitesmoke"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "1rem", // Add some margin at the bottom for spacing
                    }}
                  >
                    <img
                      src={image}
                      alt={name}
                      style={{
                        maxWidth: "18rem",
                        borderRadius: "1rem",
                      }}
                    />
                  </div>

                  <h5 style={{ fontSize: "1.7rem" }}>{name}</h5>
                  <p
                    style={{
                      fontWeight: "700",
                      marginBottom: ".5rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    ₹{price}
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: ".5rem",
                        color: "grey",
                      }}
                    >
                      {mrp}
                    </span>
                    <span
                      style={{
                        marginLeft: ".5rem",
                        color: "var(--yellow)",
                      }}
                    >
                      {(((mrp - price) / mrp) * 100).toFixed(0)}% off
                    </span>
                  </p>

                  <p>{description}</p>
                </Modal.Body>
                <Modal.Footer className="modalfooter">
                  <div className="quantity-update">
                    <Button
                      variant="contained"
                      style={{ color: "var(--yellow)" }}
                      onClick={handleDecrement}
                    >
                      <FaMinus />
                    </Button>
                    <span style={{ margin: "0 0.5rem", color: "white" }}>
                      {quantity}
                    </span>
                    <Button
                      variant="contained"
                      style={{ color: "var(--yellow)" }}
                      onClick={handleIncrement}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                  <Button className="addtocart" onClick={handleAddToCart}>
                    Add to Cart
                    <span style={{ paddingLeft: ".3rem", fontWeight: "800" }}>
                      ₹{getTotalPrice()}
                    </span>
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
          {hasPriceOptions && <div className="cust">customisable</div>}
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
