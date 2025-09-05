import { Navigation } from "@/components/Navigation";

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 pb-20">
        {/* Impact Stats */}
        <div className="bg-white py-16 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7</div>
                <div className="text-gray-600">Households Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">25+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-gray-600">Days to Results</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-gray-600">Positive Feedback</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Real People. Real Impact.
            </h1>
            <p className="text-xl text-gray-600">
              Hear from the families whose lives have been transformed by clean water access.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  V
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">V. Shoba</h3>
                  <p className="text-gray-600">Mother of 3, Tamil Nadu</p>
                  <p className="text-sm text-gray-500">December 2024</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "Before SunSip, our family had to drink water from the Madras 
                back tap without any trust. Many days we swallowed water with 
                worms moving in it. We were forced to drink spoiled water from 
                empty plastic bottles. Now, using moringa seeds and chlorine 
                tablets, clear clean water comes out. We are confident our children 
                and family are healthier. Now, we thank the SunSip initiative. We 
                feel safe again, and our surroundings give us the confidence that our 
                water source is pure for us!"
              </blockquote>

              <div className="text-sm text-gray-500 italic">
                Original Tamil: "SunSip ennaadhanaaga, enga kudumbathoda theenanil 
                konjam anbugal ila. Pala naaka la nanga pazam thookum thannila 
                puzhu nadanthuttu kudichom. Veruma plastic bottle la irundhu 
                theeya thanni kudika nerndathu. Ipo, murungai vithaigal elavai 
                chlorine tablerigal payanpaduthinal, thelihyana thooimaiyaana 
                thanni veliya varudhu..."
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">S. Valli</h3>
                  <p className="text-gray-600">Teacher & Grandmother, Tamil Nadu</p>
                  <p className="text-sm text-gray-500">December 2024</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "I am a school teacher and a grandmother to three young children. 
                Clean drinking water has once just a dream for our home. But after 
                SunSip came into our lives, that dream became a reality. We now 
                purify water at home using simple local materials, and safely drink 
                it after adding moringa seeds and chlorine tablets. Today, my 
                grandchildren are healthier than ever, and as a teacher, I understand 
                how crucial this is for every family and student. More people need 
                to know about life-changing projects like SunSip. My heartfelt 
                thanks to the team behind it!"
              </blockquote>

              <div className="text-sm text-gray-500 italic">
                Original Tamil: "Naan oru school teacher, moonru pasanga ku pati. 
                Sudhama kudika thanni ennoda veetuku oru kanavu. Aanaal SunSip 
                enga vazhkila vandhaprom, andha kanavu neraierachu..."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
