import "../CssFiles/Animations.css"
import { HomePage } from "../components/HomePage"

export function Home() {

  return <>
    <div className="text-center">
      <h1 className="slide-in">Home</h1>
    </div>
    <HomePage />
  </>
}
