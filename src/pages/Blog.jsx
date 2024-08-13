import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Halmet/Halmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
