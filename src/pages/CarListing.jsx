import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Halmet/Halmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/carlisting.css";

const CarListing = () => {
  const [sortedCars, setSortedCars] = useState(carData);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    let sortedArray = [...carData];
    if (sortOrder === "low") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    setSortedCars(sortedArray);
  }, [sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sortedCars]);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select className="custom-select" onChange={handleSortChange}>
                  <option value="">Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {sortedCars.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
