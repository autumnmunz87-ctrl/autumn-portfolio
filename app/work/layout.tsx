import Footer from "../components/Footer";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="top" className="min-h-screen w-full bg-primary-white">
      {children}
      <Footer />
    </div>
  );
}
