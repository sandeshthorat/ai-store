"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/home`,
            label: 'Home',
            active: pathname === `/home`,
        },
        // {
        //     href: `/${params.storeId}`,
        //     label: 'Home',
        //     active: pathname === `/${params.storeId}`,
        // },
        {
            href: `/add`,
            // href: `/${params.storeId}/billboards`,
            label: 'Add A Tool',
            active: pathname === `/add`,
        },
        {
            href: `/settings`,
            label: 'Settings',
            active: pathname === `/settings`,
        },
    ];

    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav >
    )
};