import React from "react";
import pic from "../../assets/pic1.jpg";
import png1 from "../../assets/png1.png";

const Home = () => {
  return (
    <div className="container1">
      <div className="pic1">
        <img src={pic} alt="" width="500" height="600" />
      </div>
      <div className="box1">
        <h2>Medicine</h2>
        <p><img src={png1} alt="" width="500" height="600"/></p>
        <p>MS & MD</p>
      </div>
      <div className="heading1">
        <h1>MBBS In India</h1>
        <p>Doctors are certainly the envy of others, the reason why MBBS is one of the most sought-after professional courses across the world. Talking about the Indian context, MBBS in India is not only popular for the number of universities it boasts of but also for the quality education it offers.</p>
        <br />
        <p>If you aspire to become a medical practitioner, we give you top 5 reasons to pursue MBBS in India.</p>
        <br />
        <p>It goes without saying that MBBS in India is a challenging exercise. First of all, let’s start with the basic information related to admission to MBBS courses in India.</p>
        <br />
        <h3>Eligibility for MBBS Admission in India:</h3>
        <br />
        <ul>
          <li>Students should have cleared 10+2 exam with Physics, Chemistry and Biology (Zoology & Botany).</li>
          <li>Student must be an Indian National for admission through All India Entrance Exam (NEET).</li>
          <li>Student should be 17+ as on 31st December of the year of admission.</li>

        </ul>

        <p>After class 12, it’s crucial to start preparing for three competitive entrance examinations: National Eligibility cum Entrance Test (NEET), All India Institute of Medical Sciences for MBBS (AIIMS MBBS) and Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER MBBS) entrance exams.</p>
        <br />
        <h3>In order to secure yourself a medical seat in a reputed government college, following are considered:</h3>
        <br />
        <ul>
          <li>Marks obtained in Senior Secondary Examination or Central Board of Secondary Education or its equivalent with PCB.</li>
          <li>Marks obtained in the NEET examinations conducted at central level.</li>
          <li>For AIIMS and JIPMER medical colleges, aspiring students need to undertake a separate entrance examination conducted by the respective authority.</li>
        </ul>

        <p>It is worth mentioning here that NEET exam is undertaken by almost every MBBS aspirant for getting enrolled for an MBBS course in India. This important medical entrance examination is conducted across 154 test centers in India. Over 16.1 lacs candidates registered for NEET in 2021.</p>

        <br />

        <h2>MBBS Admission in India</h2>
        <br />
        <p>Medical Education in India is provided by the Recognized Medical Colleges in India. All Institutions must have recognition by Medical Council of India Act. MBBS is known as Bachelors of Medicine and Bachelors of Surgery. Institutions offering MBBS Course in its syllabus are referred to as Medical Colleges. This course has curriculum with the basic and Para- Clinical Subjects like- Anatomy, Bio-Chemistry, Pathology, Physiology, Medicine and Pharmacology. It is a four and half years program and one year internship for students as per guideline by WHO.</p>

        <br />

        <h2>Exams for MBBS in India</h2>
        <br />
        <p>AIIMS Entrance Exams- All INDIA Medical Science Entrance Exam NEET- National Eligibility cum Entrance Test JIPMER- Jawaharlal Institute of Post-Graduate Medical Education and Research.</p>
        <br />
        <ul>
          <li>The candidate willing to take admission in MBBS in India must have passed the Class 12th examination with PCB 50% for general Category & 40% for Backward Category.</li>
          <li>The candidates should have completed 17 years of age on or before 31st day of December of the year of admission.</li>
        </ul>


      </div>
    </div>
  );
};

export default Home;
