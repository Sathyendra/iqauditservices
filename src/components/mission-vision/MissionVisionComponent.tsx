// MissionVision.jsx
export default function MissionVision() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-10xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Mission Block */}
          <div className="flex-1  p-8 rounded-xl shadow-md border-l-4 border-red-300 bg-red-700 text-white">
            <div className="mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-6 h-6 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-white leading-relaxed mb-3">Our mission &amp; motive is to provide “best iQ audit services – best quality assurance” and to bring Quality by intelligence, Quality as a habit, Quality in every step, Quality very first time.</p>
              <p className="text-white leading-relaxed">iQ Audit Services provide exceptional auditing consultancy services across Pharma, Device and Supply Chain sectors that empower organisations to achieve and maintain the highest levels of regulatory compliance, operational efficiency, and patient safety.</p>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex-1 bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-300 bg-yellow-600 text-white">
            <div className="mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-white leading-relaxed mb-3">
                iQ Audit Services follow ethics and industry standards to support Pharmaceutical Organisations in performing routine and qualification audits to keep Quality & Compliance as first step.
              </p>
              <p className="text-white leading-relaxed">
                We envision a future where our pharmaceutical and medical devices clients thrive with triumph, supported by our unparalleled precision and integrity in delivering premier standards of auditing quality and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}