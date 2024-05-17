const CommonBanner = ({ image, heading, subHeading }) => {
  return (
    <div
      className="hero bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
        objectFit: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content mt-48 mb-32 w-[85%] bg-[#15151599] text-white text-center">
        <div className="py-[100px]">
          <h3 className="mb-5 text-5xl font-cinzel">{heading}</h3>
          <p className="mb-5 font-poppins mx-auto w-[85%]">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
