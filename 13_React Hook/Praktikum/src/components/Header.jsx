export default function Header() {
  return (
    <nav className="bg-white shadow-lg p-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Simple Header</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="py-5 px-3 bg-blue-500 text-white rounded">Home</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">Features</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">Pricing</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">FAQs</a>
            <a href="#" className="py-5 px-3 text-gray-700 hover:bg-blue-500 hover:text-white rounded">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
