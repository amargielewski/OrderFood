import { useEffect, useState } from "react";
import { apiService } from "../services/api";
import { RestaurantElement } from "../types/restaurant";

export const getRestaurants = () => apiService.get("/restaurants");

export const useRestaurants = () => {
  const [data, setData] = useState<RestaurantElement[] | null>(null);
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