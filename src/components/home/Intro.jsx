import React from "react";
import pic from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpg";
import png1 from "../../assets/png1.png";

const Intro = () => {
  return (
    <div className="container">
      {/* <div className="pic">
        <img src={pic} alt="" width="" height="" />
      </div> */}
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="box">
        <p>
          <img src={png1} alt="" width="500" height="600" />
        </p>
        <h2>Medicine</h2>
        <p>MS & MD</p>
      </div>
      <div className="introduction">
        <h2>why we Are Here</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          blanditiis, maiores accusantium odit error maxime aliquid illum earum
          delectus dolore temporibus eaque est ab consequuntur autem nisi id.
          Magni blanditiis non molestiae exercitationem expedita reiciendis ab,
          aperiam reprehenderit sequi, necessitatibus sint distinctio excepturi
          minima veniam fugiat et autem impedit. Soluta quo voluptatem adipisci
          provident quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ad molestiae exercitationem impedit! Quod aperiam similique
          magnam quaerat assumenda sunt est, accusamus quibusdam, explicabo
          pariatur nostrum? Quod alias cum quibusdam sunt labore suscipit
          sapiente adipisci harum consequatur tenetur, deleniti tempore velit,
          unde quo reprehenderit id hic, cumque accusamus assumenda! Id repellat
          esse quibusdam aut nulla. Modi vel, eligendi eum accusamus sunt
          incidunt alias doloremque rerum neque nobis odio omnis ipsum sit,
          temporibus asperiores repellendus sapiente magnam quo aperiam
          consequuntur nemo pariatur facere a. In esse ea quod, recusandae,
          tempore deleniti quo cupiditate ut enim fugit consequuntur excepturi
          voluptatibus iusto accusantium. Optio necessitatibus impedit iure
          placeat perferendis? Veniam accusamus quod cupiditate repudiandae
          alias iure dolores, laboriosam assumenda earum iusto vitae sed fuga
          odit necessitatibus. Nam.
        </p>
      </div>
    </div>
  );
};

export default Intro;
