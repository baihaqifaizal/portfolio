import { getAllProjectSlugs } from '@/lib/projects'

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
