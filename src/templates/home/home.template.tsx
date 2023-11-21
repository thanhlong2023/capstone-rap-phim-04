import { PropsWithChildren, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";

function HomeTemplate(props: PropsWithChildren) {
  useScrollToTop();

  return (
    <div>
      <Header />

      {/* -----Pages---- */}
      <Suspense fallback={<p>"Loading...."</p>}>
        <Outlet />
      </Suspense>
      {/* props.children */}
      {/* -----Pages---- */}

      <Footer />
    </div>
  );
}

export default HomeTemplate;
