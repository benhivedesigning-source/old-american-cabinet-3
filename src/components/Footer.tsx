export function Footer() {
  return (
    <footer className="bg-tc-surface text-tc-text pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
             <h3 className="font-display text-4xl uppercase font-bold mb-8">Newsletter</h3>
             <div className="flex border-b border-tc-moss pb-2 max-w-md">
               <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent font-body text-sm tracking-widest uppercase w-full outline-none placeholder:text-tc-moss" />
               <button className="text-tc-accent uppercase tracking-widest text-sm font-bold hover:text-tc-text transition-colors">Submit</button>
             </div>
          </div>
          
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-tc-moss uppercase mb-6">Collections</h4>
            <ul className="space-y-4 font-body text-sm uppercase tracking-wide">
              {["Barn Doors", "Interior Sets", "Exterior Sets", "Hardware", "Custom Builds"].map(item => (
                <li key={item}><a href="#" className="hover:text-tc-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-tc-moss uppercase mb-6">Studio</h4>
            <ul className="space-y-4 font-body text-sm uppercase tracking-wide">
              {["Our Process", "Materials", "Trade Program", "Journal", "Contact"].map(item => (
                <li key={item}><a href="#" className="hover:text-tc-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-tc-moss pt-8 font-body text-xs tracking-widest uppercase text-tc-moss">
          <div>
            <p className="mb-2">Old American Cabinet &copy; {new Date().getFullYear()}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-tc-text transition-colors">Instagram</a>
              <a href="#" className="hover:text-tc-text transition-colors">Pinterest</a>
            </div>
          </div>
          <div className="text-right">
             <a href="#" className="hover:text-tc-text transition-colors block mb-2">Privacy Policy</a>
             <a href="#" className="hover:text-tc-text transition-colors block">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-[30vh] translate-y-1/2 opacity-[0.03]">
         <h1 className="text-[20vw] font-display font-bold leading-none text-center transform scale-y-150">
           OLD AMERICAN
         </h1>
      </div>
    </footer>
  );
}
