import ChatSupport from "@/Components/AiChatSupport/ChatSupport";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* <meta name="color-scheme" content="light" /> */}
      <main>{children}  <ChatSupport /></main>
      <Footer />
    </>
  );
}
