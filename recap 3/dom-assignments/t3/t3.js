const target = document.querySelector('#target');

const browserBrand =
  navigator.userAgentData?.brands?.[2]?.brand || 'Unknown browser';
const browserVersion =
  navigator.userAgentData?.brands?.[2]?.version || 'Unknown version';
const operatingSystem =
  navigator.userAgentData?.platform || navigator.platform || 'Unknown OS';
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const availableWidth = window.screen.availWidth;
const availableHeight = window.screen.availHeight;

const now = new Date();
const formattedDate = now.toLocaleDateString('en-EN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const formattedTime = now.toLocaleTimeString('en-EN', {
  hour: '2-digit',
  minute: '2-digit',
});

const info = [
  `Browser: ${browserBrand} ${browserVersion}`,
  `Operating system: ${operatingSystem}`,
  `Screen size: ${screenWidth} x ${screenHeight}`,
  `Available screen space: ${availableWidth} x ${availableHeight}`,
  `Current date and time: ${formattedDate} ${formattedTime}`,
];

info.forEach(item => {
  const paragraph = document.createElement('p');
  paragraph.textContent = item;
  target.appendChild(paragraph);
});
