import { useRestaurants } from "../../api/getRestaurants";
import { RestaurantBox } from "../../components/RestaurantBox/RestaurantBox";
import { StyledWrapper } from "./Main.styled";

export const Main = () => {
  const { data, isLoading, error } = useRestaurants();

  // console.log(data && data.data);

  return (
    <StyledWrapper>
      {error && <div>Error</div>}
      {data &&
        data.data.map(({ attributes, id }) => (
          <RestaurantBox key={id} id={id} {...attributes} />
        ))}
    </StyledWrapper>
  );
};
