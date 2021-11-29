const regionArray = [
  "English (UK)",
  "Tiếng Việt",
  "中文(台灣)",
  "한국어",
  "日本語",
  "Français (France)",
  "ภาษาไทย",
  "Español",
  "Português (Brasil)",
  "Deutsch",
  "Italiano",
];

const region = regionArray.map((region) => {
  return { id: region, region };
});

export default region;
