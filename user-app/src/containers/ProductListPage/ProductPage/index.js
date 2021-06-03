import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/Card';
import { generatePublicUrl } from '../../../urlConfig';

import config from "../../../config"

/**
* @author
* @function ProductPage
**/

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { page } = product;

    useEffect(() => {
        const params = getParams(props.location.search);
        console.log({ params });
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, []);


    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel autoPlay
                renderThumbs={() => { }}
            >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <a
                            key={index}
                            style={{ display: 'block' }}
                        >
                            <img src={`${config.BASE_URL}${banner.img}`} alt="" />
                        </a>
                    )
                }
            </Carousel>
            <div className="pageitemwidth" style={{
                display: 'flex',
                justifyContent: 'center',
                width: "97%",
                height: "550px",
                margin: "auto"
            }}>

                {
                    page.products && page.products.map((product, index) =>

                        <Card
                            key={index}

                        >
                            <a href="">
                                <img src={`${config.BASE_URL}${product.img}`} alt="" />
                            </a>
                        </Card>
                    )
                }
            </div>
        </div>
    )

}

export default ProductPage