import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar";
import Loading from "../components/Loading";

function MainLayout() {
  

  return (
    <>
      <Navbar />
      <main className="align-element py-12">
        {/* {true ? <Loading /> : <Outlet />} */}
        <Outlet/>
      </main>
    </>
  );
}
export default MainLayout;