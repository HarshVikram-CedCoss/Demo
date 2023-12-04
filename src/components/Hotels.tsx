import { CDN_URL } from "../Utilities/Constant";

const Hotels = (props: any) => {
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + props.resData?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{props?.resData?.name}</h3>
      <h4>{props.resData?.avgRating} stars</h4>
      <h4>{props.resData?.costForTwo} FOR TWO</h4>
      <h4>{props.resData?.slaString} minutes</h4>
    </div>
  );
};
export const withPromtedLabel = (RestaurantCard: any) => {
  return (props: any) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default Hotels;
