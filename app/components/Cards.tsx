import FirstCard from "./cards-images/FirstCard";
import SecondCard from "./cards-images/SecondCard";
import ThirdCard from "./cards-images/ThirdCard";

const Cards = () => {
  return (
    <div className="lg:mx-32 mx-4 mt-12 flex lg:flex-row flex-col items-center gap-2">
      <FirstCard />
      <div className="flex flex-col gap-2">
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
};

export default Cards;
