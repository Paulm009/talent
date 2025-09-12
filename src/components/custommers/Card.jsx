import { useState, useEffect } from "react";

const Card = ({ card }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
       
        position: "relative",
        backgroundColor: "white",
        borderRadius: "0.75rem",
        overflow: "visible",
        minHeight: "300px",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        border: "1px solid #d1d5db",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease",
        marginTop: isMobile ? "1rem" : "5rem",
        
        
      }}
    >
      {/* Foto de persona */}
      {card.extraImg &&
        (isMobile ? (
          // versión móvil → dentro, centrada arriba del texto
          <div
            style={{
              margin: "1rem auto 0 auto",
              top: "-35px",
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              border: "3px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={card.extraImg}
              alt="Persona"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ) : (
          // versión desktop → flotando arriba
          <div
            style={{
              position: "absolute",
              top: "-70px",
              left: "70%",
              transform: "translateX(-50%)",
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              border: "3px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              
            }}
          >
            <img
              src={card.extraImg}
              alt="Persona"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}

      {/* Logo */}
      <div
        style={{
          width: isMobile ? "100%" : "40%",
          height: isMobile ? "192px" : "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          backgroundColor: "#ffffffff",
        }}
      >
        <img
          src={card.logo}
          alt="Logo"
          style={{
            maxHeight: "10rem",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Texto */}
      <div
        style={{
          width: isMobile ? "100%" : "60%",
          padding: isMobile ? "1rem" : "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ flex: 1, overflow: "hidden" }}>
          <p
            style={{
              fontSize: isMobile ? "0.875rem" : "1.200rem",
              color: "#374151",
              lineHeight: "1.25",
              display: "-webkit-box",
              WebkitLineClamp: isMobile ? 5 : "none",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              margin: 0,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
              fontWeight: "400",
              letterSpacing: "-0.025em",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            "{card.description}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;