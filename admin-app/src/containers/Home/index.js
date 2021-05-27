import React from 'react';
import Layout from '../../components/Layout';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Home
**/

const Home = (props) => {

  return (
    <Layout sidebar>

      <Jumbotron style={{ margin: '5rem', background: '#fff' }} className="text-center">
        <h1>Welcome to Admin Dashboard</h1>
        <p className="paras ppapa">Thank you fot using Avira Cottage and thanks to the Admins for taking care of the establishment.</p>
        <p className="paras">Please Go to <a href="#"><NavLink to={`/category`}>"Category"</NavLink></a> to create and edit category listd <a href="#"><NavLink to={`/products`}>"Products"</NavLink></a> to Add or delete or to get product Info, <a href="#"><NavLink to={`/page`}>"Page"</NavLink></a> to create Brand page for a category and <a href="#"><NavLink to={`/orders`}>"Orders"</NavLink></a> to check order details.</p>
      </Jumbotron>
    </Layout>
  )

}

export default Home