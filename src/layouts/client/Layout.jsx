import Navbar from "../../views/partials/Navbar"
import Footer from "../../views/partials/Footer"
const LayoutPublic = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default LayoutPublic;
