import { useQuery, useQueryClient } from "@tanstack/react-query";
import { currencies } from "../utils/constants";

const fetchCurrencies = async () => {
  try {
    // const response = await instance.get(`/finance/currency`);
    // console.log(response.data.data);
    // return response.data.data;
    return currencies;
  } catch (error) {
    console.error("Error fetching Currencies:", error);
  }
};

export function useCurrencies() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    select: (currencies) => {
      currencies.forEach((c) =>
        queryClient.setQueryData(["currencies", c.slug], c),
      );
      return currencies;
    },
  });
}
