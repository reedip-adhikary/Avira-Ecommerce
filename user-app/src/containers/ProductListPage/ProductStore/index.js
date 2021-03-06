import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/Card";
// import { MaterialButton } from "../../../components/MaterialUI";
// import Rating from "../../../components/UI/Rating";
// import Price from "../../../components/UI/Price";
import { getProductsBySlug } from "../../../actions";
import "./style.css";

/**
 * @author
 * @function ProductStore
 **/

const ProductStore = (props) => {
  const product = useSelector(state => state.product)

  const [priceRange, setPriceRange] = useState({
    under200: 200,
    under500: 500,
    under1k: 1000,
    under10k: 10000,
    under30k: 30000
  })

  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug))

  }, [])

  return (
    <>
      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <Card
              headerLeft={`Under ${priceRange[key]}`}
              headerRight={<button className="viewbutton">View all</button>}
            >
              <div className="underline"></div>
              <div style={{ display: 'flex' }}>
                {
                  product.productsByPrice[key].map(product =>
                    <Link style={{
                      display: "block"
                    }}
                      to={`/${product.slug}/${product._id}/p`}
                      className="productContainer">
                      <div className="productImgContainer">
                        <img src={product.productPictures[0].img} alt="" />
                      </div>
                      <div className="productInfo">
                        <div>{product.name}</div>
                        <div>
                          <span className="rating">4.3</span>
                          <span> (547)</span>
                        </div>
                        <div className="productPrice">{product.price}</div>
                      </div>
                    </Link>)
                }

              </div>
            </Card>
          )
        })
      }
    </>
  );
};

export default ProductStore;
