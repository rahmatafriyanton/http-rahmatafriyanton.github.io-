import React from "react";

function Experience() {
  const educationData = [
    {
      period: "August 2022 - Present",
      company: "Universitas Pembangunan Nasional Veteran Jakarta",
      title: "Bachelor of Informatics",
      description:
        "I pursued a Bachelor's degree in Informatics at Universitas Pembangunan Nasional Veteran Jakarta, where I gained knowledge in various aspects of computer science and software development. Through my coursework, I developed skills in problem-solving, coding, and critical thinking, preparing me for a career in the dynamic field of technology.",
    },
    {
      period: "February - July, 2023",
      company: "Bangkit Academy Cohort 2023",
      title: "Mobile Android Development",
      description:
        "I have learned Android app development using Kotlin, the officially supported programming language for Android by Google. Throughout my learning journey, I gained knowledge in fundamental concepts and best practices for creating user interfaces, data processing, and interacting with Android components.",
    },
    {
      period: "March - Desember, 2022",
      company: "Apple Developer Academy @Binus",
      title: "Junior iOS Developer",
      description:
        "As a Junior iOS Developer at the Apple Developer Academy @Binus, I gained expertise in iOS app development using Swift, SwiftUI, and UIKit. Through the CBL (Challenge Based Learning) curriculum, I collaborated with UI/UX and Product Manager cohorts, honing my skills in creating intuitive user interfaces and working effectively in cross-functional teams.",
    },
    {
      period: "July - September, 2021",
      company: "Kredensial Mikro Mahasiswa Indonesia",
      title: "UI/UX Designer - Binus University",
      description:
        "As a UI/UX Designer in the Kredensial Mikro Mahasiswa Indonesia program at Binus University, I focused on understanding the key aspects of user experience design and implementing techniques to design impactful user experiences. Through this role, I gained practical skills in creating user-centered designs and enhancing the overall user experience.",
    },
  ];

  const experienceData = [
    {
      period: "June 2023 - Present",
      company: "Sinarmas Land - LLV (OasisOne Team)",
      title: "Backend Developer Intern",
      description:
        "Utilized Node.js and MongoDB to build online payment endpoints with DurianPay for the OasisOne application, facilitating seamless transactions for restaurant and food court orders. Additionally, I developed and implemented endpoints for managing and adding default menus to enhance the user experience of registered tenants in OasisOne.",
    },
    {
      period: "February - May, 2023",
      company: "Sinarmas Land - LLV (RitelQ Team)",
      title: "Frontend Developer Intern",
      description:
        "I was responsible for fixing various bugs related to the display and functionality of several pages in the RitelQ application using HTML, CSS, jQuery, and Bootstrap 4. Additionally, I implemented a new feature for merchant rentals in the application. The RitelQ application was built using Laravel 8 framework.",
    },
    {
      period: "August 2022 - January 2023",
      company: "Sinarmas Land - LLV (OasisOne Team)",
      title: "Frontend Developer Intern",
      description:
        "I undertook the task of revamping the entire user interface of the OasisOne mobile website platform. This involved restructuring the project to facilitate smoother development and implementing Redux for centralized state management. The application was built using ReactJS.",
    },
    {
      period: "August 2021 - January 2022",
      company: "Medikapro",
      title: "Freelance Full-stack Web Developer",
      description:
        "I served as a fullstack web developer responsible for creating APIs, designing the user interface, and implementing supporting features for a Hospital Information System application. This application was developed using CodeIgniter 3 framework. I focused on building a secure and user-friendly system while ensuring the APIs and user interface were properly maintained for optimal functionality.",
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <section>
            <h5 className="section-title dark">Education</h5>
            <div className="timeline clearfix">
              {educationData.map((item, index) => (
                <div className="timeline-item clearfix" key={index}>
                  <h5 className="item-period">{item.period}</h5>
                  <span className="item-company">{item.company}</span>
                  <h4 className="item-title">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <section>
            <h5 className="section-title dark">Experience</h5>
            <div className="timeline clearfix">
              {experienceData.map((item, index) => (
                <div className="timeline-item clearfix" key={index}>
                  <h5 className="item-period">{item.period}</h5>
                  <span className="item-company">{item.company}</span>
                  <h4 className="item-title">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experience;
