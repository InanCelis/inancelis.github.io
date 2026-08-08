import "../assets/styles/testimonial-video.scss";

const testimonials = [
  {
    src: "https://drive.google.com/file/d/1k8NnfAKxhMadMYyl4w8s6MCWZ_FDagWI/preview",
    name: "Austin Gwaltney",
    title: "Serial Entrepreneur & Marketing Agency Owner",
  },
  {
    src: "https://drive.google.com/file/d/17DCANF93hIAdL7B28uO42_246nDxdko-/preview",
    name: "Ahmad Gulzar Khan",
    title: "BlueApple LaunchPad - Project Manager",
  },
];

function TestimonialVideo() {
  return (
    <div className="testimonial-video container" data-aos="fade-up">
      <div className="testimonial-video__header">
        <span className="testimonial-video__eyebrow">
          <i className="fa-solid fa-quote-left"></i> Testimonial
        </span>
        <h2 className="font-weight-bold">What They Say</h2>
        <p className="f-text-m">
          A few quick words from people I've worked with.
        </p>
      </div>
      <div className="testimonial-video__list">
        {testimonials.map((testimonial) => (
          <div className="testimonial-video__item" key={testimonial.name}>
            <div className="testimonial-video__stage">
              <div className="testimonial-video__glow" />
              <div className="testimonial-video__media">
                <iframe
                  src={testimonial.src}
                  title={`Testimonial from ${testimonial.name}`}
                  allow="autoplay"
                  allowFullScreen
                  loading="lazy"
                  className="testimonial-video__frame"
                />
              </div>
            </div>
            <div className="testimonial-video__caption">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialVideo;
