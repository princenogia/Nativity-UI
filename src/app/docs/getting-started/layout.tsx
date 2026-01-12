import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Getting Started - Nativity UI",
    description: "Learn how to set up Nativity UI in your React Native Expo project.",
};

export default function GettingStartedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
