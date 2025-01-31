import { useEffect, useState } from "react";

const GoogleMapEmbed = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    setIframeSrc("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.02456717682!2d-122.4194155!3d37.7749295");
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {iframeSrc && (
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={iframeSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default GoogleMapEmbed;
