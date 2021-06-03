import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import banner4 from "../../images/banner4.jpg";
import './style.css';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    return (
        <Layout>
            <div className="maincontainer">
                <a href="/Women-he6Faus1e?cid=60ab965697cac2077c30964c&type=undefined"><img src={banner1} alt="" /></a>
                <div className="addcontainer">
                    <a className="add" href="/Women-he6Faus1e?cid=60ab965697cac2077c30964c&type=undefined"><img className="addimg img1" src={banner2} alt="" /></a>
                    <a className="add" href="/Men-S1vsBqRSc?cid=60ab964d97cac2077c30964b&type=undefined"><img className="addimg img2" src={banner3} alt="" /></a>
                </div>
                <a href="/Men-S1vsBqRSc?cid=60ab964d97cac2077c30964b&type=undefined"><img className="banner4" src={banner4} alt="" /></a>
            </div>

        </Layout>
    )

}

export default HomePage