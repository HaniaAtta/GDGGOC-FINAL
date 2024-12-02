const Feautures = () => {
    return (
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Flight Tracking</h3>
              <p className="mt-2">Real-time updates on flight status.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Booking System</h3>
              <p className="mt-2">Easy and quick booking process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Customer Support</h3>
              <p className="mt-2">24/7 assistance for all your needs.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };


  export default Feautures;