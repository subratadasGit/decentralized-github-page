import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { LogIn, LogOut } from "lucide-react";
import { Button } from "./ui/button";
const NavBar = () => {
  const { login, logout, authenticated, user } = usePrivy();
  
  const handleUserAuthenticated = async () => {
    if (user && user.wallet?.address) {
      try {
        await createOrUpdateUser(
          user.wallet.address,
          user.email?.address || ""
        );
        const hasClosedModal = localStorage.getItem("emailConfirmModalClosed");
        if (!hasClosedModal) {
          setShowEmailConfirmModal(true);
        }
      } catch (error) {
        console.error("Error updating user information:", error);
      }
    }
  };
  
  
  
  const handleAuth = () => {
    if (authenticated) {
      logout();
    } else {
      login();
    }
  };
  return (
    <>
      <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/svg/cat.svg"
            alt="SkyGit"
            width={40}
            height={40}
            priority
            style={{ filter: "invert(1)" }} // This inverts the colors
          />
          <span className="ml-2 text-xl font-bold">SkyGit</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="text-foreground hover:text-primary"
          >
            Dashboard
          </Link>
          <Link href="/search" className="text-foreground hover:text-primary">
            Search
          </Link>
          <Link href="/docs" className="text-foreground hover:text-primary">
            Docs
          </Link>
          <Button onClick={handleAuth} variant="outline">
            {authenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </>
            )}
          </Button>
         
        </div>
      </nav>
    </>
  );
};

export default NavBar;
function handleUserAuthenticated() {
  throw new Error("Function not implemented.");
}

function setShowEmailConfirmModal(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function createOrUpdateUser(address: string, arg1: string) {
  throw new Error("Function not implemented.");
}

