import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel_Preview = ({ blok }) => (
  <div
    className="grid grid-cols-2 gap-8 p-20 text-black"
    {...storyblokEditable(blok)}
  >
    <div>
      <h2 className="text-h2-desktop mb-4">Interviews</h2>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-4 mb-4 border-b pb-2 border-red"
        >
          <img
            src="/path-to-placeholder.jpg"
            alt="Thumbnail"
            className="w-20 h-20 object-cover"
          />
          <div>
            <p className="text-label-desktop text-silver">11:03 · Marcel de Vries</p>
            <p className="text-p-large-desktop font-medium pt-1">
              Monteurs bij Transavia eisen meer loon en dreigen met acties
            </p>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h2 className="text-h2-desktop mb-4">Evenementen & Webinars</h2>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex items-start gap-4 mb-4 border-b pb-2 border-red"
        >
          <img
            src="/path-to-placeholder.jpg"
            alt="Thumbnail"
            className="w-20 h-20 object-cover"
          />
          <div className="flex-1">
            <p className="text-p-large-desktop text-red pb-1">Online Marketing Dag</p>
            <p className="text-label-desktop text-silver pb-1">
              Dinsdag 9 november, 09:30
            </p>
            <p className="text-alt-desktop font-semibold">
              Breda University of Applied Sciences
            </p>
          </div>
          <a
            href="#"
            className="ml-auto mt-12 text-label-desktop font-semibold hover:underline"
          >
            Meld je nu aan →
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Artikel_Preview;