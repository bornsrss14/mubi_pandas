import { Link } from "react-router-dom";

export const LogoScalable = ({ customHeight, customWidth }) => {
  const containerLogo = {
    width: customWidth,
    height: customHeight,
    cursor: "pointer",
  };
  return (
    <div style={containerLogo}>
      <Link to={"/"}>
        <img
          className="img-full-cover"
          src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/MUBI%2FMubi-Resource.logo.png?alt=media&token=42143f45-6e4d-41a5-b74d-4f5cf48221c5"
          alt="MUBI logo"
        />
      </Link>
    </div>
  );
};

export default LogoScalable;
