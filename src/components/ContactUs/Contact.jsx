import React, { useState } from "react";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "number") {
      // Validate phone number and set error message
      const isValidPhoneNumber = validatePhoneNumber(value);
      setPhoneNumberError(isValidPhoneNumber ? "" : "Invalid phone number");
    }
  };

  const validatePhoneNumber = (number) => {
    // Check if the phone number has exactly 10 digits
    return /^\d{10}$/.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the phone number
    if (!validatePhoneNumber(formData.number)) {
      setPhoneNumberError("Invalid phone number");
      return;
    }

    // Clear the phone number error message if it was previously set
    setPhoneNumberError("");

    const formEndpoint = "https://formspree.io/f/xleqlpgl";

    try {
      setSubmitting(true);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Clear form data after successful submission
        setFormData({
          name: "",
          number: "",
          message: "",
        });
      } else {
        console.error("Form submission failed!");
        alert("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-6 py-12 lg:py-16 bg-gray-900 text-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get in <span className="text-red-400">Touch</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Have questions or need support? Reach out to us, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-10 max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-lg">Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
              required
            />
            </label>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-lg">Phone Number
            <input
              type="tel"
              name="number"
              className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.number}
              onChange={handleChange}
              pattern="[0-9]{10}"
              placeholder="Enter your number"
              required
            />
             {phoneNumberError && (
            <span className="error-message">{phoneNumberError}</span>
          )}
          </label>
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label className="block text-gray-300 text-lg">Message
            <textarea
              className="w-full mt-2 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              required
            ></textarea>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
          {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
