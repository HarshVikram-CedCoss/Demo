import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState<boolean>(true);

  //runs only once
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsUserOnline(false);
    });
    window.addEventListener("online", () => {
      setIsUserOnline(true);
    });
  }, []);
  return isUserOnline;
};

export default useOnlineStatus;
