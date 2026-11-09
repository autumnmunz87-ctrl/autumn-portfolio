import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <div className="page-shell flex-1">{children}</div>
      <Footer />
    </div>
  );
}
