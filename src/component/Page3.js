import React from 'react'

const Page3 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font" />
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative ">


              <div className="flex-grow">
                <h1 className="font-medium title-font text-sm text-gray-900  tracking-wider ml-50  py-5" style={{ font: "bold", fontSize: "40px" }}>Vision and <span style={{ color: " darkgreen" }}>{" "}Mission</span></h1>
                <p className="leading-relaxed text-left ml-20 " style={{ paddingTop: "20px" }} >The Aims and objectives of the National Commission for Indian System of
                  Medicine are to -</p>
              </div>
            </div>
            <div className="flex relative text-left ml-20">
              <div className="flex-grow p-2" >
                <p className="leading-relaxed">1. To promote the growth and development in the field of Ayurveda.</p>

                <p className="leading-relaxed">2. To produce graduates ih the discipline of Ayurveda.</p>

                <p className="leading-relaxed">3. To provide medical care facilities through the traditional Ayurvedic system of medicine to the suffering humanity.
                </p>

                <p className="leading-relaxed">4. To provide  and assist in providing services and facilities of the higgest order to the human society through the Ayurvedic system of Medicine.</p>

                <p className="leading-relaxed">5. To conduct experiments and develop patterns of teaching in under graduate education in AyurvedaB
                </p>

                <p className="leading-relaxed">6. The chief objective if this Hospital and Institute is to provide adequate care. Treatment and education to its patients and student.
                </p>
              </div>
            </div>



          </div>
          <img className="ml-24 mt-28 ml-30" style={{ height: "250px", width: "500px" }} src="./Images/3.png" alt="step" />
        </div>
      </div>
      <section />

    </div>
  )
}

export default Page3