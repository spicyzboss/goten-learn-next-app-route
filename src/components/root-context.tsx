"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { ReactNode } from "react";
import createCache from "@emotion/cache";
import { theme } from "@/config/theme";

interface Props {
  children?: ReactNode;
}

function createEmotionCache() {
  return createCache({ key: "css" });
}

export default function RootContext(props: Props) {
  const { children } = props;
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
