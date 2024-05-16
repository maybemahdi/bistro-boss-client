import cover from "../../assets/home/featured.jpg";
import SectionStart from "./SectionStart";
const FromOurMenu = () => {
  return (
    <div
      className="hero bg-fixed w-[85%] my-16 mx-auto"
      style={{
        backgroundImage: `url(${cover})`,
        objectFit: "cover",
      }}
    >
      {/* <div className="bg-black blur-2xl bg-opacity-70"></div> */}
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-neutral-content">
        <div className="my-[100px] p-6 lg:p-24 text-white">
          <SectionStart
            heading={"FROM OUR MENU"}
            subHeading={"---Check it out---"}
            text={"white"}
          />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <img
              className="md:h-[400px] h-[300px] object-cover"
              src={cover}
              alt=""
            />
            <div className="flex flex-col gap-3">
              <p className="">
                March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error voluptate facere, deserunt
                dolores maiores quod nobis quas quasi. Eaque repellat recusandae
                ad laudantium tempore consequatur consequuntur omnis ullam
                maxime tenetur.
              </p>
              <button className="btn-outline btn w-fit text-white border-b-4 border-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
