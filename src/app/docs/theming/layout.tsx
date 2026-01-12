import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Theming - Nativity UI",
    description: "Learn how to customize colors, typography, and design tokens in Nativity UI.",
};

export default function ThemingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
