import React from "react";

const PrivacyPolicy = () => {
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
        Privacy Policy
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
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by, or is under common control with a party.
          </li>
          <li>
            <strong>Company</strong> refers to Aharada Education, Meerut.
          </li>
          <li>
            <strong>Cookies</strong> are small files that are placed on Your
            computer, mobile device, or any other device by a website.
          </li>
          <li>
            <strong>Country</strong> refers to Uttar Pradesh, India.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the
            Service.
          </li>
          <li>
            <strong>Personal Data</strong> is any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Service Provider</strong> means any natural or legal person
            who processes data on behalf of the Company.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> refers to any
            website or social network website through which a User can log in or
            create an account.
          </li>
          <li>
            <strong>Usage Data</strong> refers to data collected automatically
            during the use of the Service.
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
            Service, or the company on behalf of which the individual is
            accessing or using the Service.
          </li>
        </ul>
      </section>

      {/* Collecting and Using Your Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Collecting and Using Your Personal Data
        </h2>
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontSize: "1.25rem", marginBottom: "1rem" }}
        >
          Types of Data Collected
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
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul
          className="list-disc list-inside text-gray-700 mt-4"
          style={{
            fontSize: "1rem",
            color: "#4A4A4A",
            paddingLeft: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <h3
          className="text-xl font-semibold mt-4 mb-2"
          style={{
            fontSize: "1.25rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Usage Data
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
          Usage Data is collected automatically when using the Service and may
          include information such as Your Device's Internet Protocol address,
          browser type, the pages You visit, and other diagnostic data.
        </p>

        <h3
          className="text-xl font-semibold mt-4 mb-2"
          style={{
            fontSize: "1.25rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Information from Third-Party Social Media Services
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
          The Company allows You to create an account and log in to use the
          Service through third-party social media services such as Google,
          Facebook, Instagram, Twitter, and LinkedIn. If You choose to use a
          third-party service, We may collect information already associated
          with that account.
        </p>
      </section>

      {/* Retention of Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Retention of Your Personal Data
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
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations, resolve disputes, and enforce our legal
          agreements and policies.
        </p>
      </section>

      {/* Transfer of Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Transfer of Your Personal Data
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
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country, or other governmental jurisdiction
          where the data protection laws may differ from those from Your
          jurisdiction.
        </p>
      </section>

      {/* Delete Your Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Delete Your Personal Data
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
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You. You may update, amend,
          or delete Your information at any time by signing in to Your Account
          and visiting the account settings section that allows you to manage
          Your personal information.
        </p>
      </section>

      {/* Disclosure of Your Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Disclosure of Your Personal Data
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
          The Company may disclose Your Personal Data under certain
          circumstances such as compliance with legal obligations, protecting
          the rights of the Company, and business transactions like mergers or
          acquisitions.
        </p>
      </section>

      {/* Security of Your Personal Data */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Security of Your Personal Data
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
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          Changes to this Privacy Policy
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
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page. Changes
          to this Privacy Policy are effective when they are posted on this
          page.
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
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="list-none text-gray-700">
          <li>
            Email:{" "}
            <a href="mailto:info@aharadaedu.in" className="text-blue-500">
              info@aharadaedu.in
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

export default PrivacyPolicy;
