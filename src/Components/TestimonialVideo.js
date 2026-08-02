import "../assets/styles/testimonial-video.scss";

function TestimonialVideo() {
  return (
    <div className="testimonial-video container" data-aos="fade-up">
      <div className="testimonial-video__header">
        <span className="testimonial-video__eyebrow">
          <i className="fa-solid fa-quote-left"></i> Client Testimonial
        </span>
        <h2 className="font-weight-bold">What Clients Say</h2>
        <p className="f-text-m">
          A quick word from Austin Gwaltney, serial entrepreneur, marketing
          agency owner, and business investor.
        </p>
      </div>
      <div className="testimonial-video__stage">
        <div className="testimonial-video__glow" />
        <div className="testimonial-video__media">
          <iframe
            src="https://drive.google.com/file/d/1k8NnfAKxhMadMYyl4w8s6MCWZ_FDagWI/preview"
            title="Client testimonial from Austin Gwaltney"
            allow="autoplay"
            allowFullScreen
            loading="lazy"
            className="testimonial-video__frame"
          />
        </div>
      </div>
      <div className="testimonial-video__caption">
        <strong>Austin Gwaltney</strong>
        <span>Serial Entrepreneur &amp; Marketing Agency Owner</span>
      </div>
    </div>
  );
}

export default TestimonialVideo;
