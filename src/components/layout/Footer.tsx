export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter border-t-2 border-primary bg-surface-container-low">
      <div className="flex items-center gap-3">
        <span className="font-headline-md text-headline-md font-bold text-primary">SkillBridge</span>
        <span className="year-badge">2026</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
        © 2026 SkillBridge. All rights reserved. Crafted for the avant-garde.
      </p>
      <div className="flex gap-6">
        {["Privacy","Terms","Careers","Contact"].map(l => (
          <a key={l} href="#" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">{l}</a>
        ))}
      </div>
    </footer>
  );
}
