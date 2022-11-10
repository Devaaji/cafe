import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      router.push("/");
      setIsLoading(false);
    } catch (error) {
      setMsg(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleLogin}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <Text textAlign="center">{msg}</Text>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    icon={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    icon={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                isLoading={isLoading}
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <button
          color="teal.500"
          href=""
          onClick={() => router.push("/register")}
        >
          Register
        </button>
      </Box>
    </Flex>
  );
};

export default Login;
