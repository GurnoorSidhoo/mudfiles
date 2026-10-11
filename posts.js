// Every post on the site is one entry in this list.
// To add a new post: copy one block (from { to },), paste it at the TOP of the list, and change the details.
// The homepage builds its cards from this list automatically, newest date first.

const POSTS = [
  {
    title: "Pulse wave and the Windkessel effect",
    path: "academic/pulse-wave-windkessel/",            // folder that holds the post's index.html
    thumb: "academic/pulse-wave-windkessel/thumb.svg",  // small picture for the card
    category: "academic",                               // "academic" for now; "music" later
    subject: "Physiology",
    course: "MED1200 · Week 11",
    lecture: "Arteries, arterioles and the distribution of blood flow",
    type: "Interactive animation",
    description: "Watch one stroke volume leave the ventricle: a bit over a third runs straight on to the tissues, the rest is stored in the stretched aorta and released by elastic recoil in diastole. Tracks the pulse wave, aortic pressure and a single red cell from the aorta to the capillaries.",
    author: "Gurnoor",
    date: "2026-10-11"
  },
];
