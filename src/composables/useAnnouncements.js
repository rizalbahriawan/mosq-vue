import fm from 'front-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export function useAnnouncements() {
  const modules = import.meta.glob('/content/announcements/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  })

  const announcements = Object.entries(modules).map(([path, raw]) => {
    const parsed = fm(raw)

    return {
      title: parsed.attributes.title,
      date: parsed.attributes.date,
      speaker: parsed.attributes.speaker || '',
      place: parsed.attributes.place || '',
      category: parsed.attributes.category || '',
      description: parsed.attributes.description || '',
      image: parsed.attributes.image || '',
      body: md.render(parsed.body),
      slug: path.split('/').pop().replace('.md', ''),
    }
  })

  return { announcements }
}
