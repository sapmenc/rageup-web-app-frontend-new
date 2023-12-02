import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../routes/routeNames";

const useAuth = () => {
  const [cookies] = useCookies(["myCookie"]);
  const [userId, setUserId] = useState();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    // eslint-disable-next-line
    // @ts-ignore
    setUserId(cookies?.user?._id);
    // eslint-disable-next-line
    // @ts-ignore
    const token = cookies?.user?.token;
    if (token) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      navigate(LOGIN);
    }
  }, []);

  return { isAuthorized, userId };
};

export default useAuth;
