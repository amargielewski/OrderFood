import { useEffect, useState } from "react";
import { apiService } from "../services/api";
import { RestaurantTypes } from "../types/restaurant";

export const getRestaurants = () => apiService.get("/restaurants?populate=*");

export const useRestaurants = () => {
  const [data, setData] = useState<RestaurantTypes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getRestaurants()
      .then((RES) => {
        setData(RES?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return { data, isLoading, error };
};
