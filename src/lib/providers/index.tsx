import { PropsWithChildren } from "react";
import ReactQueryProviders from "./react-query-provider";
import { ThemeProviders } from "./theme-provider";
import { AsPathProvider } from "@/context/asPathContext";
import { ToastProvider } from "@/context/toastContext";

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProviders>
      <ThemeProviders>
        <AsPathProvider>
          <ToastProvider>{children}</ToastProvider>
        </AsPathProvider>
      </ThemeProviders>
    </ReactQueryProviders>
  );
};

export default RootProvider;
