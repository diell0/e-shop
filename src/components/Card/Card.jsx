import "./Card.scss";
import { Card as PrimeCard } from "primereact/card";

const header = (
  <img
    alt="Card"
    src="https://primefaces.org/cdn/primereact/images/usercard.png"
  />
);

const footer = (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>123</div>
    <div>312</div>
  </div>
);

const Card = () => {
  return (
    <PrimeCard
      title="Advanced PrimeCard"
      subTitle="Card subtitle"
      footer={footer}
      header={header}
      className="cardContainer"
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. quam
        perferendis esse, cupiditate neque quas!
      </p>
    </PrimeCard>
  );
};

export default Card;
