import fm from 'front-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export function useInformations() {
  const modules = import.meta.glob('/content/informations/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })

  const informations = Object.entries(modules).map(([path, raw]) => {
    const parsed = fm(raw)

    return {
      title: parsed.attributes.title,
      date: parsed.attributes.date,
      place: parsed.attributes.place || '',
      category: parsed.attributes.category || '',
      gallery: parsed.attributes.gallery || [],
      body: md.render(parsed.body),
      slug: path.split('/').pop().replace('.md', ''),
    }
  })

  return { informations }
}
