import React from "react";

function Expertise() {
  const expertiseData = [
    {
      icon: "fa-brands fa-html5",
      title: "Frontend Development",
      description:
        "With a strong command of HTML, CSS, JavaScript, and ReactJS, I bring your vision to life by delivering captivating and responsive web applications. Attention to detail and a focus on delivering exceptional user experiences are at the core of my development process.",
    },
    {
      icon: "fa-brands fa-node-js",
      title: "Backend Development",
      description:
        "Bringing your ideas to life through robust and efficient backend solutions is my expertise, with a specialization in Node.js, Laravel, and databases including MongoDB, MySQL, and PostgreSQL. With a meticulous approach and a dedication to delivering exceptional user experiences, I ensure that every detail is taken care of in the development process.",
    },
    {
      icon: "fa-brands fa-app-store-ios",
      title: "iOS Development",
      description:
        "I bring your ideas of iOS application to life through robust and efficient solutions. With expertise in Swift, SwiftUI, and UIKit, I ensure seamless user experiences and meticulous attention to detail.",
    },
    {
      icon: "fa-brands fa-android",
      title: "Android Development",
      description:
        "I have expertise in Material Design and Retrofit, enhancing my Android development skills. With a strong grasp of Material Design principles, I create visually appealing and intuitive user interfaces. Additionally, I utilize Retrofit to handle network requests and interact with APIs, enabling seamless data retrieval and communication.",
    },
  ];

  return (
    <section>
      <h5 className="section-title">What I Can Do</h5>

      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {expertiseData.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="media media-role">
                  <div className="media-icon">
                    <i className={`icon ${item.icon}`}></i>
                  </div>
                  <div className="media-body ml-3">
                    <h5 className="title">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
