const fs = require('fs');

let content = fs.readFileSync('src/components/BookingEngine.tsx', 'utf8');

// Replacements
content = content.replace(
  `{t("booking.title")}`,
  `{t("booking.title", "Book Your Experience")}`
);

content = content.replace(
  `If you've found a trip you like, or you simply want to rent a vessel
            for your own adventure, you can easily configure your experience
            below. Select your vessel, experience, and party size to get an
            instant estimate and request your booking.`,
  `{t("booking.desc", "If you've found a trip you like, or you simply want to rent a vessel for your own adventure, you can easily configure your experience below. Select your vessel, experience, and party size to get an instant estimate and request your booking.")}`
);

content = content.replace(
  /Booking\s*<\//,
  `{t("booking.booking", "Booking")}</`
);

content = content.replace(
  /Create your journey\s*<\//,
  `{t("booking.create_journey", "Create your journey")}</`
);

content = content.replace(
  /\n(\s*)Guided Tour\s*\n/,
  `\n$1{t("booking.guided_tour", "Guided Tour")}\n`
);

content = content.replace(
  /\n(\s*)Rent a Boat\s*\n/,
  `\n$1{t("booking.rent_boat", "Rent a Boat")}\n`
);

content = content.replace(
  /Select Vessel\s*<\//,
  `{t("booking.select_vessel", "Select Vessel")}</`
);

content = content.replace(
  /Select Experience\s*<\//,
  `{t("booking.select_experience", "Select Experience")}</`
);

content = content.replace(
  /t\(\`trips\.\$\{activeService\.id\}\.title\`, activeService\.title\) : "Choose"/,
  `t(\`trips.\${activeService.id}.title\`, activeService.title) : t("booking.choose", "Choose")`
);

content = content.replace(
  /Duration\s*<\//g,
  `{t("booking.duration", "Duration")}</`
);

content = content.replace(
  />hours<\/span>/,
  `>{t("booking.hours", "hours")}</span>`
);

content = content.replace(
  /\{p\.duration \|\| \`Option \$\{idx \+ 1\}\`\}/,
  `{p.duration || \`\${t("booking.option", "Option")} \${idx + 1}\`}`
);

content = content.replace(
  /Skipper Option\s*<\//,
  `{t("booking.skipper_option", "Skipper Option")}</`
);

content = content.replace(
  /Professional skipper included \(Mandatory\)/,
  `{t("booking.mandatory_skipper", "Professional skipper included (Mandatory)")}`
);

content = content.replace(
  /Request a professional skipper/,
  `{t("booking.request_skipper", "Request a professional skipper")}`
);

content = content.replace(
  /Travel Date\s*<\//,
  `{t("booking.travel_date", "Travel Date")}</`
);

content = content.replace(
  /\{dateStr \|\| "Select Date"\}/,
  `{dateStr || t("booking.select_date", "Select Date")}`
);

content = content.replace(
  /\{dateStr \|\| "Select date"\}/,
  `{dateStr || t("booking.select_date", "Select Date")}`
);

content = content.replace(
  /Party Size\s*<\//,
  `{t("booking.party_size", "Party Size")}</`
);

content = content.replace(
  /Confirm Booking Details/,
  `{t("booking.confirm_details", "Confirm Booking Details")}`
);

content = content.replace(
  />Vessel<\/span>/,
  `>{t("booking.vessel", "Vessel")}</span>`
);

content = content.replace(
  />Experience<\/span>/,
  `>{t("booking.experience", "Experience")}</span>`
);

content = content.replace(
  /\{activeService\.pricing\[selectedPricingIndex\]\?\.duration \|\|\s*"Custom"\}/,
  `{activeService.pricing[selectedPricingIndex]?.duration || t("booking.custom", "Custom")}`
);

content = content.replace(
  />Skipper<\/span>/,
  `>{t("booking.skipper", "Skipper")}</span>`
);

content = content.replace(
  /\? "Included \(Mandatory\)"/,
  `? t("booking.included_mandatory", "Included (Mandatory)")`
);

content = content.replace(
  /\? "Requested"\s*: "Not requested"/,
  `? t("booking.requested", "Requested") : t("booking.not_requested", "Not requested")`
);

content = content.replace(
  />Fuel<\/span>/,
  `>{t("booking.fuel", "Fuel")}</span>`
);

content = content.replace(
  /\? "Included"\s*: "Pay per use"/,
  `? t("booking.included", "Included") : t("booking.pay_per_use", "Pay per use")`
);

content = content.replace(
  />Date<\/span>/,
  `>{t("booking.date", "Date")}</span>`
);

content = content.replace(
  />Guests<\/span>/,
  `>{t("booking.guests", "Guests")}</span>`
);

content = content.replace(
  /\{guests === 1 \? "Person" : "People"\}/,
  `{guests === 1 ? t("booking.person", "Person") : t("booking.people", "People")}`
);

content = content.replace(
  /Total Est\.\s*<\//,
  `{t("booking.total_est", "Total Est.")}</`
);

content = content.replace(
  /Detailed starting hours should be further arranged with the\s*skipper\.\s*<br \/>\s*Final quotes may include requested extras\./,
  `{t("booking.disclaimer", "Detailed starting hours should be further arranged with the skipper. Final quotes may include requested extras.")}`
);

content = content.replace(
  /\n(\s*)WhatsApp\s*\n/,
  `\n$1{t("booking.whatsapp", "WhatsApp")}\n`
);

content = content.replace(
  /\n(\s*)Email\s*\n/,
  `\n$1{t("booking.email", "Email")}\n`
);

content = content.replace(
  /\`\$\{activeService.hourlyPackages\[selectedHourlyPackageIndex\]\?\.hours \|\| activeService\.hourlyPackages\[0\]\.hours\} Hours\`/,
  `\`\${activeService.hourlyPackages[selectedHourlyPackageIndex]?.hours || activeService.hourlyPackages[0].hours} \${t("booking.hours", "hours")}\``
)

fs.writeFileSync('src/components/BookingEngine.tsx', content);

