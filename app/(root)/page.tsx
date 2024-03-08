import { GridBackground } from "@/components/main/background";
import Navbar from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";
import Container from "@/components/ui/container";
import { LampDemo } from "@/components/ui/lamp";
import { TopInfo } from "@/components/ui/top-info";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


const root = () => {
    return (
        <>
            <div>
                <TopInfo />
                <LampDemo />

            </div>
        <div className="h-full w-full p-4  justify-center bg-slate-950 ">
                <Container>
                    <div className="space-y-10 h-screen">
                        Sandesh 
                        {/* <Billboard data={billboard} /> */}
                        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                            Thorat
                            {/* <ProductList title="Featured products" items={products} /> */}
                        </div>
                    </div>
                </Container>
        </div>

        </>
    );
}

export default root;