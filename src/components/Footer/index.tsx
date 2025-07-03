function Footer() {
  return (
    <footer className="bg-lime-900 text-white py-6 border-t-2 border-amber-200 shadow-md">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} <em className="font-bold">Animal Shop</em>. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer;
