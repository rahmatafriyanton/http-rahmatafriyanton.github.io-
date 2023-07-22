import React from "react";

function Certificate() {
  const certificateData = [
    {
      logoSrc: "https://www.dicoding.com/img/bangkit/logo.svg",
      title: "Bangkit Academy 2023",
      certiLink: "#",
      certiID: "-",
      certiDate: "24 July 2023",
      certiCompany: "",
    },
    {
      logoSrc:
        "https://media.licdn.com/dms/image/C510BAQHyTIzJP41l9w/company-logo_200_200/0/1528340611133?e=1697673600&v=beta&t=I39F85h85eqIPbva1nMuyHqtxk5lK0cy4raYHYBMI6c",
      title: "Apple Developer Academy",
      certiLink:
        "https://drive.google.com/file/d/1U6NQLfucAKfZ9Q8M78LfIx-aWBfIJkFi/view?usp=sharing",
      certiID: "-",
      certiDate: "16 December 2022",
      certiCompany: "",
    },
    {
      logoSrc:
        "https://kmmi.kemdikbud.go.id/mhs/assets/img/kmmi-logo-compressed.png",
      title: "KMMI - UI/UX Binus University",
      certiLink:
        "https://drive.google.com/file/d/1OswyfF-mfVZKK7GQgdPKyieWHZnOHHHH/view?usp=drive_link",
      certiID: "Membership ID: 0902/KMMI-UI08/BINUS/X/2021",
      certiDate: "05 October 2021",
      certiCompany: "",
    },
  ];

  return (
    <section>
      <h5 className="section-title">Certificates</h5>
      <div className="row">
        {certificateData.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="certificate-item clearfix">
              <div className="certi-logo">
                <img src={item.logoSrc} alt="logo" />
              </div>

              <div className="certi-content">
                <div className="certi-title">
                  <a href={item.certiLink} target="_blank" rel="noreferrer">
                    <h4>{item.title}</h4>
                  </a>
                </div>

                <div className="certi-id">
                  <span>{item.certiID}</span>
                </div>
                <div className="certi-date">
                  <span>{item.certiDate}</span>
                </div>

                <div className="certi-company">
                  <span>{item.certiCompany}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
