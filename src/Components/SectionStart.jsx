const SectionStart = ({ heading, subHeading, text }) => {
  return (
    <div className="flex px-3 font-poppins flex-col gap-1 mt-16 mb-10 items-center justify-center">
      <p className="text-[#D99904] text-center text-[18px] italic">
        {subHeading}
      </p>
      <hr color="#E8E8E8" />
      <h3
        className={`text-[40px] border-y-4 text-center border-[#E8E8E8] ${
          text && "text-white"
        } text-[#151515] px-4 py-3`}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionStart;
