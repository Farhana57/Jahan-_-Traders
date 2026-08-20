import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Package, Recycle, TrendingUp } from "lucide-react";

// --- প্রোডাক্টের সেন্ট্রাল ডাটাবেস ---
const productsData = {
  "jute-sacks": {
    title: "Eco-Friendly Jute Sacks & Bags",
    icon: Package,
    longDesc:
      "Our premium Jute Sacks and Bags are crafted from 100% natural, biodegradable jute fiber. Designed for heavy-duty agricultural packaging, industrial storage, and eco-friendly retail solutions. We ensure high tensile strength and sustainable quality.",
    features: [
      "100% Biodegradable & Compostable",
      "Breathable material keeps goods fresh",
      "Customizable sizes and printing available",
      "Heavy-duty durability for bulk transport",
    ],
    image: "https://images.unsplash.com/photo-1457414104202-9d4b4908f285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SnV0ZSUyMFNhY2tzJTIwJTI2JTIwQmFnc3xlbnwwfHwwfHx8MA%3D%3D",
    applications: ["Agricultural Produce (Rice, Coffee)", "Industrial Goods", "Eco-Shopping"],
  },
  "jute-yarn": {
    title: "Premium Jute Yarn & Twine",
    icon: TrendingUp,
    longDesc:
      "We manufacture high-quality Jute Yarn and Twine, widely used in carpet manufacturing, cable wrapping, agriculture, and handicrafts. Our yarn is known for its uniform twist, high breaking strength, and natural luster, available in various counts and qualities.",
    features: [
      "Uniform Twist and Strength",
      "Available in CRT, Sacking, and Hessian qualities",
      "Eco-friendly alternative to synthetic twine",
      "Custom winding options (spool, ball, cops)",
    ],
    image: "https://images.unsplash.com/photo-1637517608595-d4d502527cdc?w=800&auto=format&fit=crop&q=60",
    applications: ["Carpet Weaving", "Packaging & Baling", "Crafting & DIY Projects"],
  },
  "geotextiles": {
    title: "Sustainable Jute Geotextiles",
    icon: Recycle,
    longDesc:
      "Jute Geotextiles are 100% natural, technical textile fabrics used for soil erosion control, slope stabilization, and vegetation reinforcement in civil engineering projects. It decomposes over time, enriching the soil.",
    features: [
      "Effective Soil Erosion Control",
      "Promotes rapid vegetation growth",
      "100% Natural & Environmentally Safe",
      "Cost-effective slope protection",
    ],
    image: "https://images.unsplash.com/photo-1612676777268-24594d85b631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SnV0ZSUyMEdlb3RleHRpbGVzfGVufDB8fDB8fHww",
    applications: ["Roadway Slope Stabilization", "Riverbank Protection", "Landscaping"],
  },
  "handicrafts": {
    title: "Customized Jute Handicrafts",
    icon: Package,
    longDesc:
      "Our collection of Jute Handicrafts includes stylish home decor items, designer shopping bags, table mats, and gift items. Handcrafted by skilled artisans, these products combine traditional techniques with modern design.",
    features: [
      "Handcrafted by Skilled Artisans",
      "Unique and aesthetic designs",
      "Durable and eco-friendly gift options",
      "Enhances home decor with a natural touch",
    ],
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=60",
    applications: ["Home Decor", "Retail Shopping Bags", "Unique Gifts"],
  },
};

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundProduct = productsData[productId];
    
    setTimeout(() => {
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setProduct(null);
      }
      setLoading(false);
    }, 100);
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">Product Not Found</h2>
        <p className="text-slate-600 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md"
        >
          View All Products <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  const ProductIcon = product.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb navigation */}
        <nav className="mb-12 text-sm">
          <Link to="/" className="text-slate-500 hover:text-emerald-700 transition-colors">Home</Link>
          <span className="text-slate-400 mx-2">/</span>
          <Link to="/products" className="text-slate-500 hover:text-emerald-700 transition-colors">Products</Link>
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-emerald-800 font-semibold">{product.title}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Side: Product Image with Hover Zoom */}
          <div className="bg-slate-50 rounded-3xl p-6 shadow-xl border border-slate-200 relative overflow-hidden group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute top-10 left-10 bg-emerald-800 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-10">
              <ProductIcon size={18} />
              {product.title.split(" ")[0]}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.title}
            </h1>
            <p className="text-slate-700 text-lg leading-relaxed">
              {product.longDesc}
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Quote / Order Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features & Applications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          
          {/* Key Features Card */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-lg lg:col-span-2 transition-all duration-300 hover:shadow-2xl hover:border-emerald-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Key Features & Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold mt-0.5 shadow-sm">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Applications Card */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-emerald-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Common Applications</h3>
            <ul className="space-y-4">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-800 font-medium bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:translate-x-1">
                  {index % 2 === 0 ? <Package size={18} className="text-emerald-700 shrink-0"/> : <Recycle size={18} className="text-emerald-700 shrink-0"/>}
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Other Products Mini Section */}
        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Explore Other Jute Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(productsData)
              .filter(([key]) => key !== productId)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link 
                  key={key} 
                  to={`/products/${key}`} 
                  className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-200 group hover:border-emerald-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-5 border-4 border-slate-200 shadow-sm">
                    <img 
                      src={value.image} 
                      alt={value.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{value.title}</h4>
                  <p className="text-sm text-emerald-700 mt-3 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details →
                  </p>
                </Link>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
}