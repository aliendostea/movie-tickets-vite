import { useLazyQuery, useQuery } from "@apollo/client";

export const useCustomHookGetData = (QUERY: any) => {
  const { data, loading, error } = useQuery(QUERY);

  return [data, loading, error] as const;
};

export const useCustomHookParameter = (QUERY: any) => {
  const [getPerson, result] = useLazyQuery(QUERY);

  return [getPerson, result] as const;
};
