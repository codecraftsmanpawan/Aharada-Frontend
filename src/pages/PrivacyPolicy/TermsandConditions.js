import React from "react";

const TermsandConditions = () => {
  return (
    <div
      className="max-w-4xl mx-auto p-6"
      style={{
        padding: "80px",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ fontSize: "2rem", textAlign: "center" }}
      >
        Terms and Conditions
      </h1>
      <p
        className="text-sm text-gray-600 mb-8"
        style={{
          fontSize: "0.875rem",
          color: "#4A4A4A",
          marginBottom: "2rem",
        }}
      >
        Last updated: February 08, 2025
      </p>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Interpretation and Definitions
        </h2>
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontSize: "1.25rem", marginBottom: "1rem" }}
        >
          Interpretation
        </h3>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or plural.
        </p>
        <h3
          className="text-xl font-semibold mt-4 mb-2"
          style={{
            fontSize: "1.25rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Definitions
        </h3>
        <ul
          className="list-disc list-inside text-gray-700"
          style={{ fontSize: "1rem", color: "#4A4A4A", paddingLeft: "1.5rem" }}
        >
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by, or is under common control with a party.
          </li>
          <li>
            <strong>Country</strong> refers to Uttar Pradesh, India.
          </li>
          <li>
            <strong>Company</strong> refers to Aharada Education, Meerut.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, cellphone, or digital tablet.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions</strong> mean these Terms and
            Conditions that form the entire agreement between You and the
            Company.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> refers to any
            services or content provided by a third-party that may be displayed,
            included, or made available by the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Aharadaedu, accessible from{" "}
            <a
              href="https://www.aharadaedu.in/"
              className="text-blue-500"
              style={{ color: "#1E3A8A" }}
            >
              aharadaedu.in
            </a>
          </li>
          <li>
            <strong>You</strong> refers to the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Acknowledgment
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users, and others who
          access or use the Service.
        </p>
      </section>

      {/* Links to Other Websites */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Links to Other Websites
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by the Company.
        </p>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third-party
          websites or services.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Termination
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions. Upon termination,
          Your right to use the Service will cease immediately.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Limitation of Liability
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.
        </p>
      </section>

      {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          "AS IS" and "AS AVAILABLE" Disclaimer
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all
          faults and defects without warranty of any kind. To the maximum extent
          permitted under applicable law, the Company, on its own behalf and on
          behalf of its Affiliates, expressly disclaims all warranties, whether
          express, implied, statutory, or otherwise, with respect to the
          Service.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Governing Law
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          The laws of the Country, excluding its conflicts of law rules, shall
          govern this Terms and Your use of the Service.
        </p>
      </section>

      {/* Disputes Resolution */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Disputes Resolution
        </h2>
        <p
          className="text-gray-700"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          If You have any concern or dispute about the Service, You agree to
          first try to resolve the dispute informally by contacting the Company.
        </p>
      </section>

      {/* Contact Us */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Contact Us
        </h2>
        <p className="text-gray-700">
          If you have any questions about these Terms and Conditions, You can
          contact us:
        </p>
        <ul className="list-none text-gray-700">
          <li>
            Email:{" "}
            <a href="mailto:info@aharadaedu.in" className="text-blue-500">
              info@aharadaedu.in
            </a>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://www.aharadaedu.in/contact"
              className="text-blue-500"
            >
              Visit Us
            </a>
          </li>
          <li>
            Phone: <span className="text-blue-500">7303381360</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsandConditions;
