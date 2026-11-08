// Owner-supplied details. Replace the placeholders before launch.
export const site = {
  name: 'Veylo Media',
  tagline: 'Where Vision Meets Digital Evolution',
  whatsapp: '910000000000', // TODO(owner): WhatsApp number with country code, digits only
  phone: '', // TODO(owner): e.g. '+91 98xxx xxxxx'. Hidden on the site while empty.
  email: 'veylodigitalmedia@gmail.com',
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
