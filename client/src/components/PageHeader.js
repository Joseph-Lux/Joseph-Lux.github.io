const PageHeader = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "70px 70px 50px 70px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/swirl.png"
        style={{ height: "40px", width: "auto" }}
        alt="left swirl"
      />
      <h1
        className="header"
        style={{
          margin: "0 20px",
          alignSelf: "center",
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        {children}
      </h1>
      <img
        src="/swirl.png"
        style={{ height: "40px", width: "auto", transform: "scaleX(-1)" }}
        alt="right swirl"
      />
    </div>
  );
};

export default PageHeader;
