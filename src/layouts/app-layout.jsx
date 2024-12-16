import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () =>{
    return(
        <div>
        <main className="min-h-screen max-w-7xl mx-auto px-4">
        <Header/>
        <Outlet/>
        </main>
        <div className="p-10 text-center bg-gray-800 mt-10">
        Made with Love
        </div>
        </div>
    )
}

export default AppLayout;