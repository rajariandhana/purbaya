import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen-3xl 3xl:container flex bg-gray-50">
        <div className="h-screen w-full overflow-y-auto p-8">
          <main className="flex flex-col gap-y-2 w-full">
            <Outlet/>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
