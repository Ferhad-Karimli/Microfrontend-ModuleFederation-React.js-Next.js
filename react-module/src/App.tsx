import React from 'react';
import Product from './components/Product';
const ContainerLayout = React.lazy(() => import('container/layout'));
function App() {
  const imageLink =
    'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D';

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <ContainerLayout >
      <p>Hello WOrld</p>
      </ ContainerLayout>
      <header className="w-full py-8 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our premium selection of high-quality products designed to
          make your life better.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit gap-8">
          {/* Product Items */}
          <Product
            name="Premium Laptop"
            price={12300}
            image={imageLink}
            description="Powerful notebook with the latest technology for professionals."
          />
          <Product
            name="Designer Laptop"
            price={1499}
            image="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            description="Sleek and beautiful design with premium materials and performance."
          />
          <Product
            name="Budget Laptop"
            price={600}
            image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            description="Affordable computing solution for students and everyday tasks."
          />
        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full py-6 bg-gray-800 text-white text-center mt-auto">
        <p>© 2025 Your Amazing Store. All rights reserved.</p>
      </footer>
  
    </div>
  );
}

export default App;