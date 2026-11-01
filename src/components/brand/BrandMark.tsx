/** Edrixie's monogram, shared by the sidebar and mobile header. */
export function BrandMark({ className }: { className?: string }) {
  return <span className={`brand-monogram ${className ?? ''}`} aria-hidden>e</span>
}
