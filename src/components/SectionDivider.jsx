// Fine ornement doré entre les sections — symétrique, donc sûr en RTL comme en LTR.
export default function SectionDivider() {
  return (
    <div className="mb-10 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60 sm:w-24" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/50" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60 sm:w-24" />
    </div>
  )
}
