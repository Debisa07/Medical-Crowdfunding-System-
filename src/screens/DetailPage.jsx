import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
export default function DetailPage() {
  return (
    <>
      <TopNavbar />
      <div style={{ "margin-top": "150px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-8 mr-2">
              <h2 className="mb-3">Abebe Alemu</h2>
              {/* 
              carousel
              
              */}
              <div>
                <div
                  id="carouselExampleInterval"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="https://www.lommi.org/_next/image?url=https%3A%2F%2Flommi.org%2Fimg%2Ffundraiser%2Ffundraiser-tmNaZft393FaNo7uoWiMz.jpg&w=1920&q=75"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="https://www.lommi.org/_next/image?url=https%3A%2F%2Flommi.org%2Fimg%2Ffundraiser%2Ffundraiser-rdItPtGzCqzw1GPTDHzBA.jpg&w=1920&q=75"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://www.lommi.org/_next/image?url=https%3A%2F%2Flommi.org%2Fimg%2Ffundraiser%2Ffundraiser-IWuwFs4N4gktzwmi95wew.jpg&w=1920&q=75"
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              {/* description */}
              <div>
                <div className="donor-p">
                  <p className="lead">
                    Support 400 Transformative Plastic Surgeries 2022 has been a
                    success thus far! We’re glad to have supported life-changing
                    surgeries that gave hope to so many! Join us, as we enter
                    this new Plastic Surgery Campaign! This is the story of
                    Diriba. A child, which in prior had no access to a
                    life-changing cleft lip surgery! Diriba is the first and
                    only child of his parents. He was born with a cleft lip,
                    which many in his community interpreted it as a curse!
                    Relatives didn't want to kiss him during visits, he was used
                    as the boogie man for other children. Diriba's mother, a
                    beautiful gentle soul, always asked herself "Will my kid
                    ever go out and play like those normal kids? Will he ever go
                    to school?" All this worried Diriba's parents. The solution,
                    which is simple, seemed unattainable. As the African proverb
                    goes, “Yelem endalel, yemeshal yenegal | Ale endalel endehem
                    yihonal” Which roughly translates to; “for me to say He
                    doesn’t exist (God), the night and day switch to change one
                    another, for me to say He exists, this happens” This proverb
                    shows the dilemma one is faced with when facing such dire
                    conditions! With repeated exposures to the long and
                    never-ending governmental waiting lines, bureaucracy,
                    language barriers, and distance to treatment centers, many
                    in rural Ethiopia, have little to no hope when it comes to
                    access to surgery, let alone plastic surgery, which is found
                    at limited hospital sites. The second is affordability. When
                    many live hands to mouth, access to health care is a luxury.
                  </p>
                  <p>
                    His parents were unaware of the surgical solution. Although
                    the sudden realization of free surgery was now a
                    possibility, they could neither afford the transportation
                    nor the stay at the hospital. Thus, we arranged an ambulance
                    for the first visit. Booked a VIP room, where Diriba and his
                    parents can stay without worry. We gave three days for
                    Diriba to adjust to the new environment and finally, a
                    highly qualified Plastic Surgeon Performed the surgery.
                  </p>
                </div>
              </div>
            </div>
            {/* 
            
              colomn 2

            */}
            <div class="col-6 col-md-4">
              {/* 
                donate card
               */}
              <div class="card shadow-sm" style={{ width: "100%;" }}>
                <div class="card-body">
                  <h6 class="card-text my-3">
                    <u>28,133.533 Br</u> raised out of 7,014,286.364 Br
                  </h6>
                  <div class="progress mb-3">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-label="Info example"
                      style={{
                        width: "20%",
                        backgroundColor: "#5DADAA;",
                      }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      20%
                    </div>
                  </div>

                  <button
                    className="btn bir-button"
                    style={{
                      width: "100%",
                    }}
                  >
                    Donate
                  </button>
                </div>
              </div>
              {/* 
                shre the word div
               */}
              <div>
                <div class="card shadow-sm mt-5" style={{ width: "100%;" }}>
                  <div class="card-body">
                    <h6 class="card-text my-3 text-center ">Spread the word</h6>
                    <hr />
                    <div className="socials p-2 text-center">
                      <a href="">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i class="bi bi-telegram"></i>
                      </a>
                      <br />
                      <div className="mt-2">
                        <a href="">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-envelope-at-fill"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-link"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* recent donations */}
              <div>
                <div class="card shadow-sm mt-5" style={{ width: "100%;" }}>
                  <div class="card-body">
                    <h6 class="card-text my-3 text-center">Recent Donations</h6>
                    <hr />
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                    <div>
                      <div class="row">
                        <div class="col">
                          <div class="profile-container">
                            <div class="profile-icon">J</div>
                            <h6 class="profile-text">John Doe</h6>
                          </div>
                        </div>
                        <div class="col text-end">800 Birr</div>
                        <span className="mt-2 text-center">
                          "My comment belongs to here"
                        </span>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
