import { Navigation } from "@/components/Navigation";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Science Behind the Filter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our three-step filtration process combines traditional materials with modern science to deliver 
              clean, safe drinking water.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Step 1: Physical Filtration
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Removes visible dirt, debris, and larger impurities using natural materials: rocks, 
                gravel, cotton, and filter paper.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Materials:</span> Rocks, gravel, cotton, filter paper
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Step 2: Moringa Seed Powder
              </h3>
              <p className="text-gray-600 text-center mb-6">
                One crushed seed per cup removes bacteria and turbidity while adding beneficial 
                antioxidants and minerals.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Dosage:</span> 1 crushed seed per cup of water
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Step 3: Chlorine Tablet
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Final disinfection kills pathogens, bacteria, and viruses, ensuring water is completely safe 
                for drinking.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Purpose:</span> Complete pathogen elimination
                </p>
              </div>
            </div>
          </div>

          {/* Affordable Impact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Affordable Impact</h2>
            <div className="space-y-4">
              <p className="text-xl">
                Just $15 can bring clean water to one person.
              </p>
              <p className="text-xl">
                $50 can change an entire household.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
