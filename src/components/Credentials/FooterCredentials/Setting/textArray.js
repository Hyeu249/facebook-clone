const textArrayOne = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Watch",
  "Places",
  "Games",
  "Marketplace",
  "Facebook Pay",
  "Jobs",
  "Oculus",
  "Portal",
  "Instagram",
  "Bulletin",
  "Local",
];
const textArrayTwo = [
  ["Fundraisers", ""],
  ["Services", ""],
  ["Voting Information Centre", ""],
  ["Groups", ""],
  ["About", ""],
  ["Create ad", ""],
  ["Create Page", ""],
  ["Developers", ""],
  ["Careers", ""],
  ["Privacy", ""],
  ["Cookies", ""],
  [
    "AdChoices",
    "https://iconape.com/wp-content/files/em/26481/svg/adchoices.svg",
  ],
  ["Terms", ""],
];

const lineOne = textArrayOne.map((text) => {
  return { id: text, text: text };
});

const lineTwo = textArrayTwo.map((text) => {
  return { id: text[0], text: text[0], img: text[1] };
});

export { lineOne, lineTwo };
