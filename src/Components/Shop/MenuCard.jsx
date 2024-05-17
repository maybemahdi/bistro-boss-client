const MenuCard = ({ item }) => {
  return (
    <div className="bg-[#F3F3F3] relative">
      <img
        className="w-[424px] h-[300px] object-cover"
        src={item.image}
        alt=""
      />
      <p className="absolute top-4 right-4 text-white bg-[#111827] px-3 py-1">
        ${item.price}
      </p>
      <div className="my-5 w-3/4 mx-auto flex flex-col gap-1 items-center justify-center">
        <h5 className="text-center font-semibold">{item.name}</h5>
        <p className="text-center font-normal">{item.recipe}</p>
        <button className="btn btn-outline border-b-4 mt-3 text-[#BB8506]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
