import { useEffect, useState } from "react";
import { apiService } from "../services/api";
import { RestaurantDetailsTypes } from "../types/restaurantDetails";

type getRestaurantsProps = {
  id: any;
};

export const getRestaurantsDetails = ({ id }: getRestaurantsProps) =>
  apiService.get(`/details?id=${id}`);

export const useRestaurantsDetails = ({ id }: getRestaurantsProps) => {
  const [data, setData] = useState<RestaurantDetailsTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getRestaurantsDetails({ id })
      .then((RES) => {
        setData(RES?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [id]);

  return { data, isLoading, error };
};
