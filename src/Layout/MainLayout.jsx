import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="align-element py-12">
        <Outlet />  
      </main>
    </>
  );
}
export default MainLayout;