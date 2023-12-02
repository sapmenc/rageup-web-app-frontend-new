import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const useCustomNavigate = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["user"]);
  const navigateMe = (label: string, link: string) => {
    if (label !== "Profile") {
      navigate(link);
    } else {
      const id = cookies.user._id;
      navigate(`/users/${id}`);
    }
  };
  return {
    navigateMe,
  };
};

export default useCustomNavigate;
