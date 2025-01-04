import { SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

import { SignedOut } from "@clerk/nextjs";

export default function TopNavbar() {
  return (
    <nav className="text-white flex w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
