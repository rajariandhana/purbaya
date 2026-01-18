import { Outlet } from "react-router";
import { Logo } from "./Logo";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen-3xl 3xl:container flex bg-gray-50">
        <div className="h-screen w-full overflow-y-auto">
          <Logo/>
          <main className="flex flex-col gap-y-2 w-full mt-20 p-2">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
