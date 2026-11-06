// Owner-supplied details. Replace the placeholders before launch.
export const site = {
  name: 'Veylo Digital',
  tagline: 'Where Vision Meets Digital Evolution',
  whatsapp: '910000000000', // TODO(owner): WhatsApp number with country code, digits only
  phone: '+91 00000 00000', // TODO(owner)
  email: 'hello@veylodigital.example', // TODO(owner)
  areas: ['Delhi', 'Noida', 'Greater Noida', 'Gurgaon', 'Uttarakhand'],
};

export const wa = (text = 'Hi Veylo, I want my listings to stand out.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  ['Services', '/services'],
  ['Work', '/work'],
  ['Areas', '/#areas'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const;
