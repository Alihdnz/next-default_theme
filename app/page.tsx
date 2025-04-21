"use client"
import Header from "@/components/common/header";
import FullBanner from "@/components/banners/full-banner";
import CentralBanner from "@/components/banners/central-banner";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="bg-black">
        <FullBanner dataType="image" dataGroup={1000} className="flex fullbanner"></FullBanner>
        
        
        <div className="text-slate-100 py-24 px-20 flex justify-between">
            <h2 className="text-6xl font-black uppercase w-3/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h2>
            <p className="text-xl w-2/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <CentralBanner dataType="image" dataGroup={1000}></CentralBanner>

        <div className="text-slate-100 text-center py-24 flex flex-col items-center">
            <h3 className="text-5xl font-black uppercase mb-6">Lorem Ipsun</h3>

            <p className="text-xl w-3/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>

        <FullBanner dataType="video" dataGroup={3000}></FullBanner>

        <div className="text-slate-100 text-center py-24 flex flex-col items-center">
            <h3 className="text-5xl font-black uppercase mb-6">Lorem Ipsun</h3>

            <p className="text-xl w-3/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>

        <CentralBanner dataType="image" dataGroup={2000}></CentralBanner>
      </div>
      <Footer className="bg-black text-slate-50"></Footer>
    

    </>
  );
}
