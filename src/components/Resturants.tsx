import { useParams } from "react-router-dom";
import useResturant from "../Utilities/useResturantMenu";
import Skeleton from "./Skeleton";

const Resturants = () => {
  const { resId } = useParams();
  const resturant_Data: any = useResturant(resId);
  const name =
    resturant_Data?.cards[0]?.card?.card?.imageGridCards?.info?.[0].action.text;
  const message =
    resturant_Data?.cards[0]?.card?.card?.imageGridCards?.info?.[0]
      .accessibility.altText;
  if (resturant_Data == null) return <Skeleton />;
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{message}</p>
      </div>
    </>
  );
};
export default Resturants;
