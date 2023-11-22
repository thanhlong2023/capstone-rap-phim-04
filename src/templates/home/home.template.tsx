import { PropsWithChildren, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
// import Footer from "./footer/footer";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";

function HomeTemplate(props: PropsWithChildren) {
  useScrollToTop();

  return (
    <div>
      <Header />

      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
}

export default HomeTemplate;
