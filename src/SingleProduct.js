import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./Components/PageNavigation";
import SingleProductImage from "./Components/SingleProductImage";
import FormatPrice from "./Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import Loader from "./Components/Loader";

// const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {

  const { getSingleProduct, isSingleProductLoading, singleProduct, API } = useProductContext();

  const { id } = useParams();
  console.log("Single Product id ---> ", id);

  // destructuring
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleProductLoading) {
    return (
      <Loader />
    )
  }

  return (
    <Wrapper>
      <div className="container">
        <PageNavigation title={name} />

        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product-images">
            <SingleProductImage imgs={image} />
          </div>

          {/* product Data  */}
          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p className="product-data-price">
              MRP: <del><FormatPrice price={price + (price * 10/100)} /></del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <FiBox className="warranty-icon" />
                
                <p> Same Day Dispatch </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p> 2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:<span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID: <span className="first-letter"> {id} </span>
              </p>
              <p>
                Brand: <span className="first-letter"> {company} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .container {
    padding: 4rem 0 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      padding-bottom:2rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .first-letter {
    text-transform: capitalize;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
