// src/components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Clothing Store. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  