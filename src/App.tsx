// -----------------------
// kết nối với react
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
// ------------------------
import { GlobalStyle } from "./components/global-style/global-style";
// ----------- Redux -----------
import { Provider, useDispatch } from "react-redux";
import { store } from "src/redux/store";
import { useEffect } from "react";
import { getLocal } from "./utils";
import { ACCESS_TOKEN } from "./constants";
import { getProfile } from "./services";
import { loginSuccess } from "src/redux/userSetting";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getLocal(ACCESS_TOKEN);
    if (accessToken) {
      getProfile().then((resp) => {
        dispatch(
          loginSuccess({
            taiKhoan: resp.taiKhoan,
          }),
        );
      });
    }
  }, []);

  return (
    <GlobalStyle>
      <RouterProvider router={router} />
    </GlobalStyle>
  );
}

export default App;
