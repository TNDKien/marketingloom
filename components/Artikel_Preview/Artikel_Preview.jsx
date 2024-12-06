import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel_Preview = ({ blok }) => {
  const interviews = [
    {
      tijd: [blok.Tijd1, " · ", blok.Auteur1],
      titel: blok.Titel1,
      afbeelding: blok.Afbeelding1.filename,
    },
    {
      tijd: [blok.Tijd2, " · ", blok.Auteur2],
      titel: blok.Titel2,
      afbeelding: blok.Afbeelding2.filename,
    },
    {
      tijd: [blok.Tijd3, " · ", blok.Auteur3],
      titel: blok.Titel3,
      afbeelding: blok.Afbeelding3.filename,
    },
  ];

  const evenementen = [
    {
      titel: blok.Titel4,
      datum: [blok.Datum1, ", ", blok.Tijd4],
      locatie: blok.Locatie1,
      afbeelding: blok.Afbeelding4.filename,
      link: "#",
    },
    {
      titel: blok.Titel5,
      datum: [blok.Datum2, ", ", blok.Tijd5],
      locatie: blok.Locatie2,
      afbeelding: blok.Afbeelding5.filename,
      link: "#",
    },
    {
      titel: blok.Titel6,
      datum: [blok.Datum3, ", ", blok.Tijd6],
      locatie: blok.Locatie3,
      afbeelding: blok.Afbeelding6.filename,
      link: "#",
    },
  ];

  return (
    <div
      className="hidden sm:flex grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4 sm:px-24 text-black"
      {...storyblokEditable(blok)}
    >
      {/* Interviews Sectie */}
      <div className="w-1/2">
        <h2 className="text-h2-desktop mb-4">Interviews</h2>
        {interviews.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 mb-4 border-b pb-2 border-red"
          >
            <img
              src={item.afbeelding}
              alt="Thumbnail"
              className="w-28 h-20 object-cover"
            />
            <div>
              <p className="text-label-desktop text-silver">{item.tijd}</p>
              <p className="text-p-large-desktop font-medium pt-1">
                {item.titel}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Evenementen & Webinars Sectie */}
      <div className="w-1/2">
        <h2 className="text-h2-desktop mb-4">Evenementen & Webinars</h2>
        {evenementen.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-4 mb-4 border-b pb-2 border-red"
          >
            <img
              src={item.afbeelding}
              alt="Thumbnail"
              className="w-28 h-20 object-cover"
            />
            <div className="flex-1">
              <p className="text-p-large-desktop text-red pb-1">{item.titel}</p>
              <p className="text-label-desktop text-silver pb-1">{item.datum}</p>
              <p className="text-alt-desktop font-semibold">{item.locatie}</p>
            </div>
            <a
              href={item.link}
              className="mt-4 md:mt-12 self-start text-label-desktop font-semibold hover:underline"
            >
              Meld je nu aan →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artikel_Preview;