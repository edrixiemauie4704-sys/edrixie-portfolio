import { homeManifesto } from '@/content/home'
import './manifesto.css'

type Word = { text: string; key: boolean }

const words: Word[] = homeManifesto.parts.flatMap((part): Word[] =>
  typeof part === 'string' ? part.split(' ').map((text) => ({ text, key: false })) : [{ text: part.key, key: true }],
)

/** A short, readable introduction to Edrixie's approach. */
export function ManifestoSection() {
  return (
    <section id="manifesto" className="ms" aria-label={homeManifesto.eyebrow}>
      <div className="ms__inner">
        <p className="ms__eyebrow">
          {homeManifesto.eyebrow}
          <span className="ms__track" aria-hidden />
        </p>
        <p className="ms__text">
          {words.map((word, i) => (
            <span key={i} className={word.key ? 'ms__w ms__w--key' : 'ms__w'}>
              {word.text}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
