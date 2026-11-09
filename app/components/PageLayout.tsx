type PageLayoutProps = {
  children: React.ReactNode;
};

/**
 * Shared layout wrapper for page content. Navbar is rendered in root layout.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="mx-auto w-[calc(100%-32px)] max-w-[1880px] min-[393px]:w-[calc(100%-40px)] min-[809px]:w-[calc(100%-56px)] min-[1201px]:w-[calc(100%-60px)]">
      {children}
    </div>
  );
}
