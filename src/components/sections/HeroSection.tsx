export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-section-gap gap-8 reveal">
      <h1 className="font-headline-xl text-headline-xl text-primary max-w-4xl mx-auto tracking-tighter">
        Bridge the gap between your degree and your first tech job.
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Transform your traditional education into high-demand digital skills with personalized mapping and mentorship.
      </p>
      <div className="flex gap-4 mt-2">
        <button className="bg-primary text-on-primary font-button-text text-button-text px-8 py-3.5 rounded-full neo-shadow hover:-translate-y-1 transition-transform active:translate-y-0">
          Get Your Free Audit
        </button>
        <button className="border-2 border-primary text-primary font-button-text text-button-text px-8 py-3.5 rounded-full hover:bg-primary-container hover:text-on-primary transition-all">
          Watch Demo
        </button>
      </div>
      <div className="mt-8 relative w-full max-w-4xl h-[400px] border-2 border-primary bg-surface-container-lowest neo-shadow overflow-hidden rounded-xl">
        <img
          alt="A professional, high-fidelity, and cinematic photograph of a young Nigerian graduate"
          className="w-full h-full object-cover object-top"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADxytod4FM1Smx_sBZm0h8LPNbGCkCO_uLNnd-r4mC5g4WYLJO6dBGl1n6qpEA_GAv8m1GX6PUhuYNGWsS9eKl97UsiVbV3y1oh4F-em-1Pxk1Sj1h3UEoP5M-WzZWdfW5o50GQJetlmth5p1FFnomD8wvyXl7WswlyZmH6ChdDG9KfbLDm7-o4KwTa2yGvmg3gXwKexeVZVz4cEGJJlJ8JmIACQIL__0BU2ZZj0pwhrFhwycj1LMande8xZYSgn3pg6fzONmc4YbU"
        />
      </div>
    </section>
  );
}
