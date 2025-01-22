import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export const metadata = {
  title: "ArmyTech - Portfólio Interativo",
  description: "Mostre suas habilidades com um portfólio profissional.",
};

 function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
    
        <main>{children}</main>

        <Footer />
       
      </body>
    </html>
  );
}
export default RootLayout;
