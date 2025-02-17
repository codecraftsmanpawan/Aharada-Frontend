import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./ApplyForm.css";
import config from "../../config";

const ApplyForm = ({ onSubmit, closeApplyForm, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      state: "",
      district: "",
      university: "",
      program: "",
      branch: "",
    },
  });

  const [cascadingData, setCascadingData] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [branches, setBranches] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [inProp, setInProp] = useState(true);

  // Static statesAndDistricts mapping
  const statesAndDistricts = {
    "Andaman and Nicobar Islands": [
      "Port Blair",
      "Car Nicobar",
      "Mayabunder",
      "Diglipur",
      "Havelock",
      "Baratang",
      "Ritchie's Archipelago",
    ],
    "Andhra Pradesh": [
      "Anantapur",
      "Chittoor",
      "Guntur",
      "East Godavari",
      "Krishna",
      "Kurnool",
      "Prakasam",
      "Srikakulam",
      "Vizianagaram",
      "West Godavari",
      "YSR Kadapa",
    ],
    "Arunachal Pradesh": [
      "Itanagar",
      "Tawang",
      "Bomdila",
      "Ziro",
      "Tezu",
      "Anini",
      "Pasighat",
      "Aalo",
      "Roing",
      "Namsai",
    ],
    Assam: [
      "Guwahati",
      "Dibrugarh",
      "Jorhat",
      "Tinsukia",
      "Silchar",
      "Nagaon",
      "Karimganj",
      "Barpeta",
      "Darrang",
      "Bongaigaon",
      "Cachar",
      "Sonitpur",
      "Kamrup",
      "Morigaon",
      "Sivasagar",
      "Hailakandi",
      "Udalguri",
      "Nalbari",
      "Chirang",
      "Lakhimpur",
    ],
    Bihar: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Munger",
      "Muzaffarpur",
      "Purnia",
      "Begusarai",
      "Siwan",
      "Arrah",
      "Nalanda",
      "Saran",
      "Kaimur",
      "Vaishali",
      "Nawada",
      "Khagaria",
      "Buxar",
      "Aurangabad",
      "Jamui",
      "Jehanabad",
      "Bhabhua",
      "Lakhisarai",
      "Sheohar",
    ],
    Chhattisgarh: [
      "Raipur",
      "Bilaspur",
      "Durg",
      "Korba",
      "Rajnandgaon",
      "Jagdalpur",
      "Raigarh",
      "Ambikapur",
      "Bemetara",
      "Kanker",
      "Mahasamund",
    ],
    Goa: ["North Goa", "South Goa"],
    Gujarat: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Anand",
      "Junagadh",
      "Navsari",
      "Mehsana",
      "Kutch",
      "Narmada",
      "Dahod",
      "Panchmahal",
      "Valsad",
      "Banaskantha",
      "Sabarkantha",
      "Kheda",
      "Morbi",
      "Surendranagar",
      "Gir Somnath",
      "Aravalli",
      "Botad",
      "Mahisagar",
      "Chhota Udepur",
      "Diu",
      "Daman",
    ],
    Haryana: [
      "Gurugram",
      "Faridabad",
      "Hisar",
      "Ambala",
      "Karnal",
      "Rohtak",
      "Sonipat",
      "Yamunanagar",
      "Panipat",
      "Sirsa",
      "Jhajjar",
      "Rewari",
      "Bhiwani",
      "Fatehabad",
      "Mahendragarh",
    ],
    "Himachal Pradesh": [
      "Shimla",
      "Manali",
      "Kullu",
      "Kangra",
      "Solan",
      "Mandi",
      "Chamba",
      "Una",
      "Bilaspur",
      "Hamirpur",
    ],
    "Jammu and Kashmir": [
      "Srinagar",
      "Jammu",
      "Anantnag",
      "Baramulla",
      "Kathua",
      "Kulgam",
      "Kupwara",
      "Poonch",
      "Rajouri",
      "Udhampur",
    ],
    Jharkhand: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro",
      "Hazaribagh",
      "Giridih",
      "Dumka",
      "Jamtara",
      "Latehar",
      "Chatra",
    ],
    Karnataka: [
      "Bengaluru",
      "Mysuru",
      "Hubballi",
      "Mangalore",
      "Belagavi",
      "Ballari",
      "Tumakuru",
      "Chitradurga",
      "Mandya",
      "Dakshina Kannada",
      "Kodagu",
      "Chikmagalur",
      "Raichur",
      "Hassan",
      "Bidar",
      "Bagalkot",
      "Davanagere",
      "Kolar",
      "Udupi",
      "Shivamogga",
      "Gadag",
      "Haveri",
      "Uttara Kannada",
    ],
    Kerala: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Kottayam",
      "Thrissur",
      "Palakkad",
      "Malappuram",
      "Ernakulam",
      "Idukki",
      "Alappuzha",
      "Pathanamthitta",
      "Kollam",
      "Wayanad",
      "Kannur",
      "Kasaragod",
      "Patanamthitta",
    ],
    "Madhya Pradesh": [
      "Bhopal",
      "Indore",
      "Jabalpur",
      "Gwalior",
      "Ujjain",
      "Sagar",
      "Satna",
      "Rewa",
      "Dewas",
      "Khandwa",
      "Sehore",
      "Shivpuri",
      "Chhindwara",
      "Balaghat",
      "Hoshangabad",
      "Mandsaur",
      "Neemuch",
      "Ratlam",
      "Vidisha",
      "Tikamgarh",
      "Shahdol",
    ],
    Maharashtra: [
      "Mumbai City",
      "Mumbai Suburban",
      "Pune",
      "Nagpur",
      "Nashik",
      "Aurangabad",
      "Solapur",
      "Thane",
      "Palghar",
      "Raigad",
      "Jalgaon",
      "Kolhapur",
      "Satara",
      "Sindhudurg",
      "Buldhana",
      "Amravati",
      "Wardha",
      "Washim",
      "Chandrapur",
      "Hingoli",
      "Latur",
      "Osmanabad",
      "Nanded",
      "Parbhani",
      "Beed",
      "Akola",
      "Nagpur",
      "Yavatmal",
    ],
    Meghalaya: [
      "Shillong",
      "Tura",
      "Nongstoin",
      "Jowai",
      "Williamnagar",
      "Baghmara",
      "Mairang",
      "Resubelpara",
      "Nongpoh",
    ],
    Mizoram: [
      "Aizawl",
      "Lunglei",
      "Champhai",
      "Kolasib",
      "Saiha",
      "Serchhip",
      "Mamit",
      "Hnahthial",
    ],
    Nagaland: [
      "Kohima",
      "Dimapur",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Phek",
      "Mon",
      "Kiphire",
    ],
    Odisha: [
      "Bhubaneswar",
      "Cuttack",
      "Berhampur",
      "Sambalpur",
      "Rourkela",
      "Puri",
      "Balasore",
      "Bargarh",
      "Khurda",
      "Angul",
      "Mayurbhanj",
      "Kendujhar",
      "Ganjam",
      "Jajpur",
      "Nayagarh",
      "Boudh",
      "Gajapati",
    ],
    Puducherry: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    Punjab: [
      "Amritsar",
      "Ludhiana",
      "Jalandhar",
      "Patiala",
      "Mohali",
      "Bathinda",
      "Fatehgarh Sahib",
      "Mansa",
      "Muktsar",
      "Hoshiarpur",
      "Rupnagar",
      "Sangrur",
      "Firozpur",
      "Moga",
      "Barnala",
      "Faridkot",
      "Pathankot",
      "Tarn Taran",
      "Kapurthala",
      "SBS Nagar",
    ],
    Rajasthan: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Ajmer",
      "Alwar",
      "Bikaner",
      "Nagaur",
      "Sikar",
      "Chittorgarh",
      "Baran",
      "Dholpur",
      "Dungarpur",
      "Jalore",
      "Banswara",
      "Pali",
      "Sirohi",
      "Bhilwara",
      "Tonk",
      "Jaisalmer",
      "Churu",
      "Hanumangarh",
      "Jhunjhunu",
      "Karauli",
    ],
    Sikkim: ["Gangtok", "Mangan", "Namchi", "Pakyong", "Rangpo"],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Erode",
      "Vellore",
      "Thanjavur",
      "Kancheepuram",
      "Cuddalore",
      "Dharmapuri",
      "Tiruvallur",
      "Krishnagiri",
      "Sivaganga",
      "Namakkal",
      "Ramanathapuram",
      "Virudhunagar",
      "Kallakurichi",
      "Thoothukudi",
      "Nagapattinam",
      "Pudukkottai",
      "Karaikal",
      "Ariyalur",
    ],
    Telangana: [
      "Hyderabad",
      "Khammam",
      "Warangal",
      "Nalgonda",
      "Karimnagar",
      "Medak",
      "Mahabubnagar",
      "Rangareddy",
      "Nizamabad",
      "Khammam",
      "Jangaon",
      "Suryapet",
      "Adilabad",
    ],
    Tripura: [
      "Agartala",
      "Udaipur",
      "Ambassa",
      "Kailashahar",
      "Belonia",
      "Khowai",
      "Ranirbazar",
      "Sonamura",
      "Melaghar",
    ],
    Uttarakhand: [
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Rudrapur",
      "Haldwani",
      "Almora",
      "Pauri Garhwal",
      "Udham Singh Nagar",
      "Tehri Garhwal",
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Kanpur",
      "Agra",
      "Varanasi",
      "Allahabad",
      "Meerut",
      "Ghaziabad",
      "Moradabad",
      "Aligarh",
      "Firozabad",
      "Bareilly",
      "Muzaffarnagar",
      "Shahjahanpur",
      "Gorakhpur",
      "Rampur",
      "Saharanpur",
      "Noida",
      "Mathura",
      "Bijnor",
      "Hapur",
    ],
    "West Bengal": [
      "Kolkata",
      "Howrah",
      "Murshidabad",
      "Malda",
      "Jalpaiguri",
      "North 24 Parganas",
      "South 24 Parganas",
      "Koch Bihar",
      "Birbhum",
      "Paschim Medinipur",
      "Dakshin Dinajpur",
      "Uttar Dinajpur",
      "Nadia",
      "Purulia",
      "Bankura",
      "Hooghly",
      "East Midnapore",
    ],
  };
  useEffect(() => {
    const fetchCascadingData = async () => {
      try {
        const response = await axios.get(`${config.apiBaseUrl}/api/cascade`);
        setCascadingData(response.data.data || []);
      } catch (error) {
        console.error("Error fetching cascading data:", error);
        toast.error("Failed to load data. Please try again.");
      }
    };

    fetchCascadingData();
  }, []);

  const onFormSubmit = async (data) => {
    try {
      await axios.post(
        `${config.apiBaseUrl}/api/admission-leads/apply`,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          state: data.state,
          district: data.district,
          university: data.university,
          program: data.program,
          branch: data.branch,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      reset();
      setInProp(false);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  const handleUniversityChange = (e) => {
    const selectedUniversity = e.target.value;
    const universityData = cascadingData.find(
      (uni) => uni.universityName === selectedUniversity
    );
    setPrograms(universityData?.programs || []);
    setBranches([]);
  };

  const handleProgramChange = (e) => {
    const selectedProgram = e.target.value;
    const programData = programs.find(
      (program) => program.programName === selectedProgram
    );
    setBranches(programData?.branches || []);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setDistricts(statesAndDistricts[selectedState] || []);
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={500}
      classNames=""
      unmountOnExit
      onExited={closeApplyForm}
    >
      <form className={` ${className}`} onSubmit={handleSubmit(onFormSubmit)}>
        <button
          type="button"
          className="ApplynowForm-close-icon"
          onClick={() => setInProp(false)}
          aria-label="Close Form"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Name */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-name">Name:</label>
          <input
            id="apply-name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
          />
          {errors.name && (
            <span className="ApplynowForm-error">{errors.name.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-phone">Phone:</label>
          <input
            id="apply-phone"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            placeholder="Your Phone Number"
          />
          {errors.phone && (
            <span className="ApplynowForm-error">{errors.phone.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-email">Email:</label>
          <input
            id="apply-email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Your Email"
          />
          {errors.email && (
            <span className="ApplynowForm-error">{errors.email.message}</span>
          )}
        </div>

        {/* State */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-state">State:</label>
          <select
            id="apply-state"
            {...register("state", { required: "State is required" })}
            onChange={handleStateChange}
          >
            <option value="">Select State</option>
            {Object.keys(statesAndDistricts).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <span className="ApplynowForm-error">{errors.state.message}</span>
          )}
        </div>

        {/* District */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-district">District:</label>
          <select
            id="apply-district"
            {...register("district", { required: "District is required" })}
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          {errors.district && (
            <span className="ApplynowForm-error">
              {errors.district.message}
            </span>
          )}
        </div>

        {/* University */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-university">University:</label>
          <select
            id="apply-university"
            {...register("university", { required: "University is required" })}
            onChange={handleUniversityChange}
          >
            <option value="">Select University</option>
            {cascadingData.map((university, index) => (
              <option key={index} value={university.universityName}>
                {university.universityName}
              </option>
            ))}
          </select>
          {errors.university && (
            <span className="ApplynowForm-error">
              {errors.university.message}
            </span>
          )}
        </div>

        {/* Program */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-program">Program:</label>
          <select
            id="apply-program"
            {...register("program", { required: "Program is required" })}
            onChange={handleProgramChange}
          >
            <option value="">Select Program</option>
            {programs.map((program, index) => (
              <option key={index} value={program.programName}>
                {program.programName}
              </option>
            ))}
          </select>
          {errors.program && (
            <span className="ApplynowForm-error">{errors.program.message}</span>
          )}
        </div>

        {/* Branch */}
        <div className="ApplynowForm-form-group">
          <label htmlFor="apply-branch">Branch:</label>
          <select
            id="apply-branch"
            {...register("branch", { required: "Branch is required" })}
          >
            <option value="">Select Branch</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          {errors.branch && (
            <span className="ApplynowForm-error">{errors.branch.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="ApplynowForm-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </CSSTransition>
  );
};

export default ApplyForm;
