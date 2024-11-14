import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // Initialize based on current online status

  useEffect(() => {
    const handleOffline = () => setOnlineStatus(false);
    const handleOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", handleOffline); // Use lowercase "offline"
    window.addEventListener("online", handleOnline);   // Use lowercase "online"

    // Cleanup on unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
