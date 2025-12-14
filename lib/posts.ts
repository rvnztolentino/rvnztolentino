import fs from "fs/promises"
import path from "path"

const POSTS_PATH = path.join(process.cwd(), "content", "blog")

export async function getAllPosts() {
  const files = await fs.readdir(POSTS_PATH)
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(async (fileName) => {
        const raw = await fs.readFile(path.join(POSTS_PATH, fileName), "utf8")
        // simple frontmatter parser (no external deps)
        function parseFrontmatter(rawText: string) {
          const result: { data: Record<string, any>; content: string } = { data: {}, content: rawText }
          if (rawText.startsWith("---")) {
            const endIdx = rawText.indexOf("---", 3)
            if (endIdx !== -1) {
              const fm = rawText.slice(3, endIdx).trim()
              const rest = rawText.slice(endIdx + 3).trim()
              fm.split(/\r?\n/).forEach((line) => {
                const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
                if (m) {
                  let v = m[2].trim()
                  if ((v.startsWith("\'") && v.endsWith("\'")) || (v.startsWith('"') && v.endsWith('"'))) {
                    v = v.slice(1, -1)
                  }
                  result.data[m[1]] = v
                }
              })
              result.content = rest
            }
          }
          return result
        }

        const { data } = parseFrontmatter(raw)
        const fileSlug = fileName.replace(/\.mdx?$/, "")
        // Use filename-derived slug for routing to avoid duplicate frontmatter slugs
        return {
          ...(data as Record<string, any>),
          // canonical slug used for links and getPostBySlug
          slug: fileSlug,
          // preserve any frontmatter-provided slug for display or canonical metadata
          frontmatterSlug: data?.slug ?? null,
          date: data?.date ?? null,
          // ensure id is numeric when present so we can sort by it
          id: data?.id != null ? Number(data.id) : null,
        }
      })
  )

  // Sorting: numeric id (highest id first). Falls back to date order if id missing.
  const toTs = (d: any) => (d ? new Date(d).getTime() : 0)
  return posts.sort((a, b) => {
    const aId = Number(a.id) || 0
    const bId = Number(b.id) || 0
    if (aId !== bId) return bId - aId
    return toTs(b.date) - toTs(a.date) // fallback to date (newest first)
  })
}

export async function getPostBySlug(slug: string) {
  // prefer .md, fall back to .mdx
  const mdPath = path.join(POSTS_PATH, `${slug}.md`)
  const mdxPath = path.join(POSTS_PATH, `${slug}.mdx`)
  let filePath = mdPath
  try {
    await fs.access(mdPath)
  } catch {
    filePath = mdxPath
  }

  const raw = await fs.readFile(filePath, "utf8")
  function parseFrontmatter(rawText: string) {
    const result: { data: Record<string, any>; content: string } = { data: {}, content: rawText }
    if (rawText.startsWith("---")) {
      const endIdx = rawText.indexOf("---", 3)
      if (endIdx !== -1) {
        const fm = rawText.slice(3, endIdx).trim()
        const rest = rawText.slice(endIdx + 3).trim()
        fm.split(/\r?\n/).forEach((line) => {
          const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
          if (m) {
            let v = m[2].trim()
            if ((v.startsWith("\'") && v.endsWith("\'")) || (v.startsWith('"') && v.endsWith('"'))) {
              v = v.slice(1, -1)
            }
            result.data[m[1]] = v
          }
        })
        result.content = rest
      }
    }
    return result
  }

  const { data, content } = parseFrontmatter(raw)
  return { ...(data as Record<string, any>), content }
}