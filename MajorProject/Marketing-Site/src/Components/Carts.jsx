import propTypes from "prop-types";

const Cart = ({ url, title, description }) => {
  Cart.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string,
    description: propTypes.string.isRequired,
  };

  return (
    <>
      <section className="card">
        <img src={url} className="h-full object-contain"></img>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>
        </div>
      </section>
    </>
  );
};
export default Cart;
