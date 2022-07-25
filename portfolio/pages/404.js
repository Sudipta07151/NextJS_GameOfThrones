import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 100000);
  }, []);

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
};

export default NotFound;
