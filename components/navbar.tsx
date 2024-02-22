import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }


    return (
        <div className="border-b ml-60">
            <div className="flex h-16 items-center  px-4">
                <MainNav className="flex justify-center mx-6" />
                
            </div>
        </div>
    );
};

export default Navbar;