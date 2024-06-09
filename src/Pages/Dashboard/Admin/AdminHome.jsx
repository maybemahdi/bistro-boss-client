import { useQuery } from "@tanstack/react-query";
import { IoWallet } from "react-icons/io5";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner";
import { FaCarSide, FaUsers } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: adminStat,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/adminStat");
      return data;
    },
  });
  const {
    data: orderStat,
    refetch: orderFetch,
    isLoading: orderLoading,
  } = useQuery({
    queryKey: ["orderStat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("orderStat");
      return data;
    },
  });
  // console.log(adminStat);
  console.log(orderStat);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const pieChartData = orderStat?.map((order) => {
    return { name: order.category, value: order.revenue };
  });
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  if (isLoading || orderLoading) return <LoadingSpinner />;
  return (
    <div className="my-5">
      <h2 className="font-cinzel text-[#151515] font-medium text-[32px]">
        Hi, Welcome Back
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5 text-white">
        <div className="bg-[#BB34F5] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <IoWallet color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">${adminStat?.total_revenue}</h4>
            <p className="text-[24px]">Revenue</p>
          </div>
        </div>
        <div className="bg-[#D3A256] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <FaUsers color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">{adminStat?.total_customer}</h4>
            <p className="text-[24px]">Customers</p>
          </div>
        </div>
        <div className="bg-[#FE4880] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <FaBowlFood color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">{adminStat?.total_product}</h4>
            <p className="text-[24px]">Products</p>
          </div>
        </div>
        <div className="bg-[#6AAEFF] hover:shadow-lg hover:scale-105 transition-all duration-300 p-6 flex items-center justify-center gap-6 rounded-md font-bold">
          <FaCarSide color="#ffff" size={50} />
          <div className="flex justify-center flex-col gap-0">
            <h4 className="text-[40px]">{adminStat?.total_order}</h4>
            <p className="text-[24px]">Orders</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 my-10">
        <div className="basis-1/2">
          <BarChart
            width={500}
            height={300}
            data={orderStat}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {orderStat.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="basis-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {orderStat.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
