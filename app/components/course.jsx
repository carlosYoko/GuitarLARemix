import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { content, title, image } = course;
  return (
    <section className="course">
      <style jsx="true">
        {`
          .course {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${image.data.attributes.formats.large.url});
          }
        `}
      </style>
      <div className="container course-grid">
        <div className="content">
          <h2 className="heading">{title}</h2>
          <p className="text">{content}</p>
        </div>
      </div>
    </section>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

export default Course;
