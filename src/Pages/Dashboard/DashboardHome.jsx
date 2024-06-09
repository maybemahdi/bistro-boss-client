import LoadingSpinner from "../../Components/LoadingSpinner";
import useIsAdmin from "../../Hooks/useIsAdmin";
import AdminHome from "./Admin/AdminHome";
import UserHome from "./UserHome";

const DashboardHome = () => {
  const { isAdmin, isAdminLoading } = useIsAdmin();
  if (isAdminLoading) return <LoadingSpinner />;
  return <div>{isAdmin ? <AdminHome /> : <UserHome />}</div>;
};

export default DashboardHome;
