import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Container from "@/components/ui/container";
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const Navbar = async () => {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <div className=" bg-white dark:bg-slate-900">
                <div className="">
                    <Container>
                        <div className="flex h-16 items-center px-4 ">
                            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                                <h1 className="whitespace-pre text-3xl font-bold mr-10 ">AI STORE</h1>
                            </Link>
                            <MainNav className="flex justify-center ml-40 mx-6" />
                            <div className="ml-auto flex items-center space-x-4 ">
                                <ThemeToggle />
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </div>
                    </Container>
                </div>
                
        </div>
    );
};

export default Navbar;