import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { currentUserSelector } from "../redux/auth/selectors";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const currentUser = useSelector(currentUserSelector);
  let location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
