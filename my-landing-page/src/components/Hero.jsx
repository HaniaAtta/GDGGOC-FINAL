const Hero = () => {
    return (
      <section className="flex items-center justify-center h-screen bg-blue-500 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Welcome to Our Airport System</h2>
          <p className="mt-4 text-lg">Your journey begins here.</p>
          <button className="mt-6 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-200">
            Explore Now
          </button>
        </div>
      </section>
    );
  };


export default Hero;
