export default function WhyChooseNibirapon() {
  const reasons = [
    {
      title: "Artisan Partnered",
      description: "Direct partnerships with master weavers ensuring authentic craftsmanship",
      icon: "🧵",
    },
    {
      title: "Premium Fabrics",
      description: "Handpicked materials including silk, cotton, and traditional blends",
      icon: "✨",
    },
    {
      title: "Cultural Authenticity",
      description: "Every piece tells a story of Indian heritage and tradition",
      icon: "🎭",
    },
    {
      title: "Competitive Pricing",
      description: "Best value for money with wholesale discounts available",
      icon: "💰",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-sans text-4xl md:text-5xl font-light text-amber-900 mb-2 text-center">
        Why Choose Nibirapon?
      </h2>
      <p className="text-center text-gray-600 font-serif mb-12">
        We believe in quality, tradition, and exceptional service
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">{reason.icon}</div>
            <h3 className="font-sans text-xl font-semibold text-amber-900 mb-2">{reason.title}</h3>
            <p className="font-serif text-gray-600 text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
