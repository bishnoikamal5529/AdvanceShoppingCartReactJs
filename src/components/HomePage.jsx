import "../CssFiles/Animations.css"
import {Container} from "react-bootstrap"


export function HomePage() {

  return <>
      <Container className=" d-flex flex-md-row flex-column-reverse h-100 w-100 align-items-center">
        <div className=" d-flex flex-column  justify-content-md-start justify-content-center align-items-center">
          <h1 className="text-info-emphasis mb-4">
          Smart Shopping Cart for Every Purchase
          </h1>
          <h3 className=" text-dark-emphasis py-5">
          Discover effortless shopping with intelligent features designed to enhance your experience.
          </h3>

          <a href="/store" className="h5 btn btn-success text-white px-5 py-2">
            Head Over To Store Page!
          </a>

          <ul className="p-4 lh-4 ">
            <li className="h6">Browse Products</li>
            <li className="h6">Add To Cart</li>
            <li className="h6">Click Checkout</li>
          </ul>
        </div>

        <div className="w-50 h-50 pt-2 pb-5">
        <svg width="100%" height="100%" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M845.4 383H758c-16.6 0-30-13.4-30-30s13.4-30 30-30h87.4c16.6 0 30 13.4 30 30s-13.5 30-30 30zM662.3 383H263.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h399.2c16.6 0 30 13.4 30 30s-13.5 30-30 30z" fill="#33CC99"></path><path d="M433.2 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M854.5 873.2m-55 0a55 55 0 1 0 110 0 55 55 0 1 0-110 0Z" fill="#FFB89A"></path><path d="M889.8 722.1h-511c-37.7 0-68.4-30.7-68.4-68.4v-1.4L274.5 270v-0.2-0.2l-6-55.4c-8.6-86.8-57.6-117.5-97.3-128.1L101.5 69c-16.1-4-32.3 5.9-36.3 22s5.9 32.3 22 36.3l68.9 16.9c16.2 4.3 28.1 12.4 36.6 24.7 8.6 12.4 14 29.7 16.1 51.4l6 55.6 35.6 379.3c0.8 70.1 58.1 126.9 128.4 126.9h511c16.6 0 30-13.4 30-30s-13.4-30-30-30z" fill="#45484C"></path><path d="M840.3 197.8H381c-16.6 0-30 13.4-30 30s13.4 30 30 30h459.3c30.2 0 54.9 24.3 55.5 54.3l-19.9 226.5-0.1 1.3v1.3c0 30.6-24.9 55.5-55.5 55.5H436c-16.6 0-30 13.4-30 30s13.4 30 30 30h384.3c63.2 0 114.7-51.1 115.5-114.1L955.7 316l0.1-1.3v-1.3c0-63.8-51.8-115.6-115.5-115.6z" fill="#45484C"></path><path d="M408.5 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1zM823.1 842.1c7.2 0 13.1 5.9 13.1 13.1s-5.9 13.1-13.1 13.1-13.1-5.9-13.1-13.1 5.9-13.1 13.1-13.1m0-60c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1-32.7-73.1-73.1-73.1z" fill="#45484C"></path></g></svg>
        </div>
      </Container> 
  </>
}
