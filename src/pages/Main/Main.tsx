import { useRestaurants } from "../../api/getRestaurants";
import { RestaurantBox } from "../../components/RestaurantBox/RestaurantBox";
import { StyledWrapper } from "./Main.styled";

export const Main = () => {
  const { data, isLoading, error } = useRestaurants();

  console.log(data);

  return (
    <StyledWrapper>
      {error && <div>Error</div>}
      {data &&
        data.map((restaurant) => (
          <RestaurantBox key={restaurant.id} {...restaurant} />
        ))}
    </StyledWrapper>
  );
};
