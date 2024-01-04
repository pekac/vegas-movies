import Navigation from "@components/navigation";

function FooterNav() {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-1 h-[60px] flex justify-center items-center bg-gray-800 border-t-1 border-t-solid border-black z-10">
      <Navigation />
    </footer>
  );
}

export default FooterNav;
