import { useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../libs/axios/instance";
import { financeCategory } from "../utils/constants";

const fetchCategories = async () => {
  try {
    // const response = await instance.get(`/finance/category`);
    // console.log(response.data.data);
    // return response.data.data;
    return financeCategory;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export function useCategories() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    select: (categories) => {
      categories.forEach((c) =>
        queryClient.setQueryData(["categories", c.slug], c),
      );
      return categories;
    },
  });
}
