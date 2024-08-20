export default function Testimonials() {
  return (
    <section
      className="relative px-6 py-20 sm:py-24 md:py-32 lg:py-44 lg:px-8"
      id="testimonials"
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
        <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-[#747575] mb-10 sm:mb-14 md:mb-20 sm:leading-normal">
          Don't take my word for it.
        </h1>
        <figure className="text-center">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold leading-8 sm:leading-9 text-[#6482AD]">
            <p>
              “Their service is really Excellent, Professional Handling with
              High Defined Quality in Their Craft. I really Appreciate their
              Transparency and On Time Delivery of the Projects. Warmly felt
              Satisfied with their Designs.”
            </p>
          </blockquote>
          <figcaption className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            <img
              alt="J J Joshua"
              src="/profile.png"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full"
            />
            <div className="text-base sm:text-lg md:text-xl">
              <div className="font-semibold text-gray-900">J J Joshua</div>
              <div className="text-gray-600">CEO of XrossTalk</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
