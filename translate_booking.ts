import fs from "fs";
import translate from "translate";

translate.engine = "google";

const langs = { de: "de", hr: "hr", it: "it", nl: "nl", sl: "sl" };

const strings = {
  title: "Book Your Experience",
  desc: "If you've found a trip you like, or you simply want to rent a vessel for your own adventure, you can easily configure your experience below. Select your vessel, experience, and party size to get an instant estimate and request your booking.",
  booking: "Booking",
  create_journey: "Create your journey",
  guided_tour: "Guided Tour",
  rent_boat: "Rent a Boat",
  select_vessel: "Select Vessel",
  select_experience: "Select Experience",
  choose: "Choose",
  duration: "Duration",
  hours: "hours",
  option: "Option",
  skipper_option: "Skipper Option",
  mandatory_skipper: "Professional skipper included (Mandatory)",
  request_skipper: "Request a professional skipper",
  travel_date: "Travel Date",
  select_date: "Select Date",
  party_size: "Party Size",
  confirm_details: "Confirm Booking Details",
  vessel: "Vessel",
  experience: "Experience",
  custom: "Custom",
  skipper: "Skipper",
  included: "Included",
  included_mandatory: "Included (Mandatory)",
  not_requested: "Not requested",
  requested: "Requested",
  fuel: "Fuel",
  pay_per_use: "Pay per use",
  date: "Date",
  guests: "Guests",
  person: "Person",
  people: "People",
  total_est: "Total Est.",
  disclaimer: "Detailed starting hours should be further arranged with the skipper. Final quotes may include requested extras.",
  whatsapp: "WhatsApp",
  email: "Email"
};

async function run() {
  for (const [lang, code] of Object.entries(langs)) {
    console.log("Translating to", lang);
    let strObj = "booking: {\n";
    for (const [key, val] of Object.entries(strings)) {
      const translated = await translate(val, lang);
      strObj += `    ${key}: ${JSON.stringify(translated)},\n`;
    }
    strObj += "  },";
    
    const file = `src/locales/${code}UI.ts`;
    let content = fs.readFileSync(file, "utf8");
    content = content.replace(/booking:\s*\{[\s\S]*?\},/, strObj);
    fs.writeFileSync(file, content);
    console.log('done ' + lang);
  }
}

run().catch(console.error);
