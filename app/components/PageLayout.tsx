type PageLayoutProps = {
  children: React.ReactNode;
};

/**
 * Shared layout wrapper for page content. Navbar is rendered in root layout.
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return <>{children}</>;
}
