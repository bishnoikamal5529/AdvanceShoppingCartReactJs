import "../CssFiles/Animations.css"

export function AboutPage() {

  return <>
    <div className="blur-background background-image m-1">
        <div className="content d-flex h-100 pt-3 flex-row align-items-center justify-content-md-evenly justify-content-center">

            <div className="overflow-hidden d-flex flex-column m-5 ms-2 ms-md-3 ms-lg-5">
                <span className="text1 h1">Discover</span>
                <span className="text2 h1">Buy &</span>
                <span className="text3 h1">Enjoy</span>
            </div>

            <div className="overflow-hidden d-flex flex-column m-5 ms-2 ms-md-3 ms-lg-5">
                <p className="h1 p-2 m-2 text1">Yes It's Public</p>
                <a href="https://github.com/bishnoikamal5529/AdvanceShoppingCartReactJs.git" target="_blank" className="btn btn-dark px-5 py-2 text-center text2">
                    GitHub
                </a>
            </div>
        </div>
    </div>
  </>
}
