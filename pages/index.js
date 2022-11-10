import { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import useRemoteUsers from "../components/hooks/useRemoteUsers";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useRemoteUsers();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.delete("http://localhost:5000/logout");
      router.push("/login");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box textAlign="end">
        <Button
          isLoading={isLoading}
          colorScheme="red"
          textAlign="end"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Box>
        {data?.data.map((user, i) => (
          <div key={i}>
            <p>{user.name}</p>
          </div>
        ))}
      </Box>
    </>
  );
}
