import { Navigate } from "react-router";

const ProtectedRoutes = ({ children, isAllowed, user }) => {
  if (!user || !isAllowed) {
    return <Navigate to={"/iniciosesion"} replace />;
  }

  return children;
};

export default ProtectedRoutes;
