import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";
import useAuth from "../Hooks/useAuth";
import useIsAdmin from "../Hooks/useIsAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const { isAdmin, isAdminLoading } = useIsAdmin();
  if (isAdminLoading || loading) return <LoadingSpinner />;
  if (user && isAdmin) return children;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;