import { Route, Routes } from "react-router-dom"
import { Home } from "../home/Home"
// import { About } from "../about/About"
// import { Work } from "../work/Work"
// import { Contact } from "../contact/Contact"
import { Footer } from "../footer/Footer"

export const ApplicationViews = () => {
    return (
        <>

            <Routes>

                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
                {/* Add Routes here */}
                {/* <Route path="/about">
                    <Route index element={<About />} />
                </Route>

                <Route path="/work">
                    <Route index element={<Work />} />

                </Route>

                <Route path="/contact">
                    <Route index element={<Contact />} />
                </Route> */}

            </Routes>
            <Footer />
        </>
    )
}