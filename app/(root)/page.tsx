import Landing from "@/components/main/landing";
import Navbar from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import Container from "@/components/ui/container";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const root = () => {
    return (

        <div className="p-4  justify-center">
            <div className="border-b">
                <Container>
                    <div className="flex h-16 items-center px-4">
                        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                            <h1 className="whitespace-pre text-3xl font-bold mr-10 ">AI STORE</h1>
                        </Link>
                        <Navbar />  
                        <div className="ml-auto flex items-center space-x-4 ">
                            <ThemeToggle />
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>


    );
}

export default root;