import { notFound } from "next/navigation";
import { getComponentBySlug, components } from "@/lib/components-data";
import { getComponentDoc } from "@/lib/component-docs";
import ComponentPageClient from "@/components/component-page-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);
  if (!component) return {};

  return {
    title: `${component.name} - Nativity UI`,
    description: component.description,
  };
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);
  const doc = getComponentDoc(slug);

  if (!component || !doc) {
    notFound();
  }

  return <ComponentPageClient slug={slug} />;
}
