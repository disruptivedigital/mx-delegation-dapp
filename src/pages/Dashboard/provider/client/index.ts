import { useState } from 'react';

const useClient = () => {
  const [adminEnabled, setAdminEnabled] = useState<boolean>(false);

  return {
    adminEnabled,
    setAdminEnabled
  };
};

export default useClient;