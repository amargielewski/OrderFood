import { useParams } from "react-router-dom";
import { useRestaurantsDetails } from "../../api/getRestaurantDetails";
import { RestaurantDetails } from "../../components/RestaurantDetails/RestaurantDetails";
import { StyledNavigateButton, StyledWrapper } from "./Details.styled";
import { useNavigate } from "react-router-dom";
import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
export const Details = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useRestaurantsDetails({ id });

  console.log(data?.data);
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <StyledNavigateButton onClick={() => navigate("/")}>
        Back to restaurant list
        <LeftArrowIcon />
      </StyledNavigateButton>

      {data && <RestaurantDetails {...data.data.attributes} />}
    </StyledWrapper>
  );
};
