export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso" role="contentinfo">
      <div className="section-padding container-wide !py-12 md:!py-16">
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm font-display font-semibold tracking-wide text-ivory">
            1000x Growth Systems
          </p>
          <p className="text-xs text-clay">
            &copy; {currentYear} 1000x Growth Systems. All rights reserved.
          </p>
        </div>

        <div className="border-t border-charcoal pt-6">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-clay">
            1000x Growth Systems and The Money Map are educational personal and
            professional development programs. The information provided is for
            educational, personal development, and professional development
            purposes only. We do not guarantee results, income, or business
            outcomes. Your success depends on your own effort, commitment, and
            individual circumstances. Nothing on this page or in this program
            should be construed as financial, legal, medical, or psychological
            advice. Please consult with a qualified professional regarding your
            unique situation before making financial or business decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
