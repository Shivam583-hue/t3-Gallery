import { SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

import { SignedOut } from "@clerk/nextjs";
import Button from "./button";

export default function TopNavbar() {
  return (
    <nav className="text-white flex flex-row w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-5">
            <Button />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
