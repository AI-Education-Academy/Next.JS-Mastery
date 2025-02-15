interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = params;
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-md shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Post - {slug}
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          This is a dynamic route example. The slug here is <strong>{slug}</strong>.
          You can fetch and display blog post data based on this slug.
        </p>
        <button
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Back to Blog
        </button>
      </div>
    </main>
  );
}