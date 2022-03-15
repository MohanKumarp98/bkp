import React from 'react'
import { Carousel } from 'react-bootstrap'

function Scroll() {
  return (
    <div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmHwyTAGiDkhI9JDlyxcv1ylXSFp-brNemuRcrRMF1Q-26RsIdYVzJUzs-IvhANghcaM&usqp=CAU"
            alt="First slide"
            height="550px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default Scroll



