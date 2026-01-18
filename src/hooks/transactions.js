import { useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../libs/axios/instance";

const fetchTransactions = async () => {
  try {
    const response = await instance.get(`/finance`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

export function useTransactions() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
    select: (transactions) => {
      transactions.forEach((t) =>
        queryClient.setQueryData(["transactions", t.id], t),
      );
      return transactions;
    },
  });
}
