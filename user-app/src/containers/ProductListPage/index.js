import React, { useEffect } from "react";
import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from 'react-redux'
import { generatePublicUrl } from '../../urlConfig'
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {

    const product = useSelector(state => state.product)
    const dispatch = useDispatch();
    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug))
    }, [])

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>Under 10k</div>
                                <button>View all</button>
                            </div>
                            <div className="underline"></div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>     549</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>
                    )
                })
            }

        </Layout>);
};

export default ProductListPage;

