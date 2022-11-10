import { useQuery } from "@tanstack/react-query";
import { postFetcher } from "../../libs/axios";

const useRemoteUsers = () => {
  const uri = "/users";

  const { data, ...others } = useQuery(
    ["users"],
    async () =>
      await postFetcher(uri, {
        search: "",
        limit: 5,
        page: 1,
      })
  );

  return { data, ...others };
};

export default useRemoteUsers;
