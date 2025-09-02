import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-16">About SunSip</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                SunSip is a grassroots clean water project that builds affordable, 
                efficient water filters using natural and easily available materials. In 
                its first three days, it helped 7 households and 25+ people access 
                safer water — proof that big impact can start small.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded by Suriya Dev Saravanakumar, our mission focuses on simplicity 
                and scalability: "Built using household materials, tested locally, impacting 
                lives fast."
              </p>

              {/* Highlights */}
              <div className="pt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Backed by YRI Foundation
                    </h3>
                    <p className="text-gray-600">
                      Supported by trusted organizations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Rapid Impact
                    </h3>
                    <p className="text-gray-600">
                      25+ people helped in just 3 days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Image */}
            <div className="relative">
              <div className="bg-gray-300 rounded-2xl aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                  alt="Suriya Dev Saravanakumar, Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name Tag */}
              <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                <div className="text-sm font-semibold">Suriya Dev Saravanakumar</div>
                <div className="text-xs opacity-90">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
