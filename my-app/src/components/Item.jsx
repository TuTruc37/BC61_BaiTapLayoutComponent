import React from "react";

const Item = () => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4  text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-collection" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">Fresh new layout</h2>
                <p>
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4  text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-cloud-download" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">Free to download</h2>
                <p>
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4  text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-card-heading" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">Jumbotron hero header</h2>
                <p>
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4 p-lg-4 text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-bootstrap" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">Feature boxes</h2>
                <p>
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4  text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-code" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">Simple clean code</h2>
                <p>
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 px-5 mb-5">
            <div className="card bg-light border border-0">
              <div className="card_content pb-4  text-center pt-lg-0">
                <div className="card_icon text-white bg-primary ">
                  <i className="bi bi-patch-check" />
                </div>
                <h2 className="fs-4 fw-bold pt-4">A name you trust</h2>
                <p>
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
