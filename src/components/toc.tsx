"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TocItem {
    title: string;
    url: string;
    items?: TocItem[];
}

export function TableOfContents() {
    const [items, setItems] = React.useState<TocItem[]>([]);
    const [activeId, setActiveId] = React.useState<string>("");

    React.useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3"));
        const items: TocItem[] = [];
        let currentH2: TocItem | null = null;

        elements.forEach((element) => {
            const id = element.id;
            const title = element.textContent || "";

            if (!id) return;

            if (element.tagName === "H2") {
                currentH2 = { title, url: `#${id}`, items: [] };
                items.push(currentH2);
            } else if (element.tagName === "H3" && currentH2) {
                currentH2.items?.push({ title, url: `#${id}` });
            }
        });

        setItems(items);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    if (!items.length) return null;

    return (
        <div className="space-y-2">
            <p className="font-medium text-sm">On This Page</p>
            <ul className="space-y-2 text-sm">
                {items.map((item) => (
                    <li key={item.url}>
                        <a
                            href={item.url}
                            className={cn(
                                "block text-muted-foreground hover:text-primary transition-colors",
                                activeId === item.url.slice(1) && "text-primary font-medium"
                            )}
                        >
                            {item.title}
                        </a>
                        {item.items && item.items.length > 0 && (
                            <ul className="pl-4 mt-2 space-y-2">
                                {item.items.map((subItem) => (
                                    <li key={subItem.url}>
                                        <a
                                            href={subItem.url}
                                            className={cn(
                                                "block text-muted-foreground hover:text-primary transition-colors",
                                                activeId === subItem.url.slice(1) && "text-primary font-medium"
                                            )}
                                        >
                                            {subItem.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
