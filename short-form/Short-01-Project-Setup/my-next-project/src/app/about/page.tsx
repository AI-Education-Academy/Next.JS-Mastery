export default function AboutPage() {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-cyan-50 px-4 py-12">
        <div className="mx-auto w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to our Next.js 15 About Page. We are dedicated to providing the best
            services and experiences for our clients. Our mission is to drive innovation and
            offer exceptional value in everything we do.
          </p>
  
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2025, we started as a small team of passionate developers
              and designers. Over the years, we have grown into a global organization
              trusted by hundreds of clients worldwide for cutting-edge solutions.
            </p>
          </div>
  
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-semibold text-gray-700">Connect with Us</h3>
              <p className="text-gray-600">We’d love to hear from you!</p>
            </div>
            <button
              className="inline-block mt-2 sm:mt-0 px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </main>
    );
  }