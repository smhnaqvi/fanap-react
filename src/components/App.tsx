import React, { Suspense } from "react";
import { ReactQueryConfigProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ToastContainer, cssTransition } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ThemeWrapper, SplashScreen } from "components/ui";
import Main from "components/Main";
import { api } from "helpers";
import "react-toastify/dist/ReactToastify.css";

const Slide = cssTransition({
  enter: "Toastify__slide-enter--top-right",
  exit: "Toastify__slide-exit--top-right",
  duration: 300
});

const defaultQueryFn = async (key: any, id: string) => {
  return api.get(`${key}${!!id ? "/" + id : ""}`);
};

function App() {
  return (
    <ReactQueryConfigProvider
      config={{
        queries: {
          queryFn: defaultQueryFn,
          refetchOnWindowFocus: false,
          staleTime: 5000,
          retry: false
        }
      }}
    >
      <RecoilRoot>
        <ThemeWrapper>
          <Suspense fallback={<SplashScreen />}>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
          </Suspense>
          <ToastContainer
            hideProgressBar={true}
            transition={Slide}
            autoClose={3000}
            rtl={true}
          />
        </ThemeWrapper>
      </RecoilRoot>
    </ReactQueryConfigProvider>
  );
}

export default App;
