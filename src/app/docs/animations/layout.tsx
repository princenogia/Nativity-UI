import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Animations - Nativity UI",
    description: "Learn how to use Reanimated animations with Nativity UI components.",
};

export default function AnimationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
