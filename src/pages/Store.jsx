import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import "../CssFiles/Animations.css"

export function Store() {
  
  return (
    <>
      <div className="text-center">
        <h1 className="slide-in">Welcome To Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
              {storeItems.map(item => (
                <Col key={item.id}>
                  <StoreItem {...item} />
                </Col>
              ))}
            </Row>
      </div>
    </>
  )
}
