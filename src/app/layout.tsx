// src/app/layout.tsx
"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrivyProvider
            appId="cm4bez8x805hmhfa0zfxrjrgp"
            config={{
              appearance: {
                theme: "dark",
                accentColor: "#676FFF",
                logo: "https://your-logo-url",
              },
              embeddedWallets: {
                createOnLogin: "users-without-wallets",
              },
            }}
          >
            <NavBar></NavBar>
            {children}
          </PrivyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
