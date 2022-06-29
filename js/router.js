
function locationChangeByLoad(event){
    event.preventDefault()
    let location=event.target['baseURI']
    let htmlName=location.split('/')
    htmlName=htmlName[htmlName['length']-1] 
    let name=sessionStorage.getItem('name')
    name==null?htmlName=htmlName:htmlName=name
    history.pushState({},'','index.html')
    history.pushState({},'','pages/'+htmlName)
    let title
    htmlName=='index.html'?title='Главная':htmlName=='map.html'?title='Map':title='Timer'
    document.title=title
    loadCode(htmlName)
}
function locationChangeByLink(event,location){
    event.preventDefault();
    let htmlName
    htmlName=location.split('/')
    htmlName=htmlName[htmlName['length']-1] 
    history.pushState({},'',htmlName)
    let title
    htmlName=='index.html'?title='Главная':htmlName=='map.html'?title='Map':title='Timer'
    document.title=title
    loadCode(htmlName)
}
function loadCode(htmlName){
    let app=document.getElementById("app")
    if(htmlName=='index.html'){
        app.innerHTML=`<div class="content-sectoring">
        <div class="row justify-content-between">
          <!-- левая часть -->
          <div class="col-lg-9">
            <!-- первый блок -->
            <div class="row content-block-style content-left-block-sectoring">
              <div>
                <img class="img-fluid" src="../images/poster.jpg" alt="" />
              </div>
              <div class="comment">
                <div class="d-flex comment-header">
                  <div>
                    <img src="../images/comments.png" alt="" />
                  </div>
                  <div class="d-flex-inline">
                    <a href="">Jason Anderson</a>
                    <span>commented:</span>
                  </div>
                </div>
                <div class="comment-content">
                  <div>
                    Don’t sit and wait. Get out there, feel life. Touch the sun,
                    and immerse in the sea. Keep love in your heart. A life
                    without it is like a sunless garden when the flowers are dead.
                    Because summer is passion, memories, light breeze, the sun
                    that appears on the skin and caresses the face.
                  </div>
                  <div class="author">– Jason, <i>10:30 am</i></div>
                </div>
                <div class="d-flex comment-footer">
                  <div>
                    <img src="../images/eye.png" alt="" />
                    <span>432</span>
                  </div>
                  <div>
                    <img src="../images/comments.png" alt="" />
                    <span>47</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-3 col-md-3 col-sm-4 col-4">Sunset Sunset Sunset</div>
                <div class="col-lg-4 col-md-9 col-sm-8 col-8 ">
                  <div class="row justify-content-end">
                    <div class="col-lg-1 col-md-1  col-sm-1 col-2">
                      <img src="../images/time.png" alt="" />
                    </div>
                    <div class="col-lg-6 col-md-3 col-sm-4 col-7">53 minutes ago</div>
                    <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                      <a
                        href=".collapse-post-content"
                        role="button"
                        data-bs-toggle="collapse"
                        onclick="dropIndexNavigationClick(this)"
                      >
                        <img src="../images/arrowDown.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="collapse collapse-post-content"
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                ipsum inventore error exercitationem est, deleniti accusamus
                nesciunt odio labore cum id, sit ad dolore explicabo quisquam,
                sapiente ullam? Asperiores, molestiae. Sint, porro sunt sapiente
                ea non et quasi tempora distinctio ad cum, magnam labore nam harum
                facilis praesentium ratione minima quos explicabo, deserunt nihil
                unde ab laudantium. Assumenda, ullam distinctio? Expedita saepe
                necessitatibus est quidem nisi ex iure beatae, eaque animi, ut
                distinctio dicta nam unde itaque possimus sed blanditiis
                perspiciatis atque fugit voluptas optio aperiam? Nisi harum
                corrupti sequi?
                </div>
              </div>
            </div>
          </div>
          <!-- правая часть -->
          <div class="col-lg-2 content-right-sectoring">
            <div
              class="row content-block-style text-center  justify-content-center"
              id="avatar"
            >
              <div>
                <img class="img-fluid" src="../images/avatar.jpg" alt="" />
              </div>
              <div>
                <p>Hanna Dorman</p>
                <p class="text-secondary"><small>UX/UI designer</small></p>
              </div>
              <div>
                <img src="../images/telegram.png" alt="" />
                <img src="../images/hh.png" alt="" />
                <img src="../images/twitter.png" alt="" />
              </div>
            </div>
            <div class="row content-block-style content-right-block-sectoring">
              <button
                class=" d-flex justify-content-between dropNavigation-header"
                onclick="dropIndexNavigationClick(this)"
                data-bs-toggle="collapse"
                href=".dropNavigation"
                aria-expanded="false"
              >
                <span>Navigation</span>
                <div>
                  <img src="../images/arrowDown.png" alt="" />
                </div>
              </button>
              <ul class="navbar-collapse collapse dropNavigation">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/myProfile.png" alt="" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="justify-content-between align-items-start d-flex">
                      <div class="d-flex">
                        <img src="../images/balance.png" alt="" />
                        <span>Balance</span>
                      </div>
                      <span class="fw-lighter">$ 1,430</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="d-flex justify-content-between align-items-start">
                      <div class="d-flex">
                        <div class="d-flex">
                          <img src="../images/connections.png" alt="" />
                        </div>
                        <span>Connections</span>
                      </div>
                      <span class="badge bg-danger rounded-pill fw-lighter"
                        >29</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/friends.png" alt="" />
                    <span>Friends</span>
                  </a>
                </li>
                <li></li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="d-flex justify-content-between align-items-start">
                      <div class="d-flex">
                        <img src="../images/events.png" alt="" />
                        <span>Events</span>
                      </div>
                      <span class="badge bg-success rounded-pill fw-lighter"
                        >45</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/settings.png" alt="" />
                    <span>Account settings</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row content-block-style content-right-block-sectoring">
              <button
                class="d-flex justify-content-between dropNavigation-header"
                onclick="dropIndexNavigationClick(this)"
                data-bs-toggle="collapse"
                href=".dropForm"
                aria-expanded="false"
              >
                <span class="">Share your thoughts</span>
    
                <div>
                  <img src="../images/arrowDown.png" alt="" />
                </div>
              </button>
              <div class="dropForm collapse">
                <div>
                  <textarea
                    class="form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div class="text-center">
                  <a href="">
                    <button type="button" class="btn btn-primary">Save</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    } else if(htmlName=='timer.html'){
        app.innerHTML=`<div class="content-sectoring">
        <div class="row content-block-style content-block-sectoring">
          <div class="row justify-content-between">
            <div class="col-lg-1 col-md-1 col-sm-1 col-1"   >
              <p >Timer</p>
            </div>
            <div class="col-lg-1 col-md-3 col-sm-2 col-5 justify-content-end">
              <a href="">
                <img onclick="setTimer(event)" src="../images/play.png" alt="" />
              </a>
              <a
                href=".map-collapse"
                data-bs-toggle="collapse"
                onclick="dropNavigationClick(this)"
              >
                <img src="../images/arrowUp.png" alt="" />
              </a>
              <a href="" onclick="setTimer(event)">
                <img src="../images/refresh.png" alt="" />
              </a>
  
              <img src="../images/close.png" alt="" />
            </div>
          </div>
          <div id="timer" class="map-collapse collapse show">
            <span  id="hour">0</span>
            <span id="minutes" >0</span>
            <span id="seconds">0</span>
          </div>
        </div>
      </div>`
    }   else if(htmlName=='map.html'){
        app.innerHTML=` <div class="content-sectoring">
        <div class="row content-block-style content-block-sectoring">
          <div class="row justify-content-between">
            <div class="col-lg-1 col-md-2 col-sm-2 col-5">
              <p>Basic map</p>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-2 col-4  justify-content-end">
              <a
                href=".map-collapse"
                data-bs-toggle="collapse"
                onclick="dropNavigationClick(this)"
              >
                <img src="../images/arrowUp.png" alt="" />
              </a>
              <a href="" onclick="mapLoad()">
                <img src="../images/refresh.png" alt="" />
              </a>
  
              <img src="../images/close.png" alt="" />
            </div>
          </div>
          <div class="map-collapse collapse show">
            <div
              class="row align-items-center map-preloader justify-content-center content-block-style content-block-sectoring"
              style="z-index: 2"
            >
              <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                <img src="../images/preloader.gif" alt="" />
              </div>
            </div>
            <div
              class="row map content-block-style justify-content-center content-block-sectoring"
              style="z-index: 1"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72959.56015355242!2d37.92433905!3d55.14851924999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1655039603927!5m2!1sru!2sru"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                onload="mapLoad()"
              ></iframe>
            </div>
          </div>
        </div>
      </div>`
    } else if(htmlName=='resume.html'){
        app.innerHTML=` <div class=" content-sectoring">
        <div class="row justify-content-between">
          <!-- левая часть -->
          <div class="col-lg-9">
            <!-- первый блок -->
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-1 col-md-3 col-sm-4 col-4">Introduction</div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowUp.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="collapse-post-content collapse show"
                id="collapse-post-content"
              >
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  ipsum inventore error exercitationem est, deleniti accusamus
                  nesciunt odio labore cum id, sit ad dolore explicabo quisquam,
                  sapiente ullam? Asperiores, molestiae. Sint, porro sunt sapiente
                  ea non et quasi tempora distinctio ad cum, magnam labore nam
                  harum facilis praesentium ratione minima quos explicabo,
                  deserunt nihil unde ab laudantium. Assumenda, ullam distinctio?
                  Expedita saepe necessitatibus est quidem nisi ex iure beatae,
                  eaque animi, ut distinctio dicta nam unde itaque possimus sed
                  blanditiis perspiciatis atque fugit voluptas optio aperiam? Nisi
                  harum corrupti sequi?
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-6 col-md-6 col-sm-9 col-11">
                  1. Prototyping, wireframing, user flows, mockups
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content1"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowDown.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="row collapse-post-content collapse justify-content-between"
                id="collapse-post-content1"
              >
                <div class="col-lg-4 card bg-dark" style="width: 18rem">
                  <img src="../images/Wireframe.jpg" alt="" />
                  <div class="card-body bg-white">
                    <h5>Wireframe</h5>
                    <p>
                      A web page layout stripped of visual design used to
                      prioritize page elements based on user needs
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 card bg-dark" style="width: 18rem">
                  <img src="../images/Protorype.jpg" alt="" />
                  <div class="card-body bg-white">
                    <h5>Prototype</h5>
                    <p>
                      A sample or simulation of a final product used to test and
                      gather feedback. Low-fidelity prototypes might be sketched
                      on paper and don’t allow user interaction. High-fidelity
                      prototypes are typically computer-based and allow for mouse
                      and keyboard interaction.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 card bg-dark" style="width: 18rem">
                  <img src="../images/Mockup.jpg" alt="" />
                  <div class="card-body bg-white">
                    <h5>Mockup</h5>
                    <p>
                      A realistic visual model of what a final webpage or
                      application will look like
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-5 col-md-5 col-sm-7 col-11">
                  2. Visual design and design software
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content2"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowDown.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="collapse collapse-post-content"
                id="collapse-post-content2"
              >
                <div>
                  Both UX designers and UI designers use visual design software,
                  like Figma, Sketch, Photoshop, and Illustrator, to create the
                  visual elements of a product. Besides proficiency in the tools,
                  you should build your knowledge of visual design best practices
                  for things like typography, color theory, layout, icons, and
                  general design theory.
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-5 col-md-5 col-sm-7 col-11">
                  3. User research and usability testing
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content3"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowDown.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="collapse collapse-post-content"
                id="collapse-post-content3"
              >
                <div>
                  To design a product that solves a user problem, meets a user
                  need, or generally delights a user, you first need to understand
                  who that user is. That’s where user research comes into play.
                  Conducting the right type of user research for the product or
                  feature you’re designing can empower you to make a product even
                  better. As you develop prototypes, you’ll conduct user testing
                  to validate your design choices. Knowing how to iterate through
                  these two user-centric phases can help make you a more effective
                  designer. This skill is so critical that some companies have a
                  specialized role on their UX team known as the UX researcher.
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-4 col-md-4 col-sm-5 col-5">4. Agile</div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content4"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowDown.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="collapse collapse-post-content"
                id="collapse-post-content4"
              >
                <div>
                  Agile, a set of project management practices popular in the
                  software development world, is based on an iterative approach to
                  building a product. Since many software development teams use
                  the agile methodology, it would make sense that UX designers
                  could benefit from an understanding of this popular product
                  management approach as well. UX and agile have begun to overlap
                  to the point that there’s a term for it—agile UX design. While
                  you don’t need to know every detail of project management to be
                  a UX designer, you can enhance your resume by knowing the
                  basics. Read more in our beginner’s guide to agile development.
                </div>
              </div>
            </div>
            <div class="content-block-style collapse-post">
              <div class="row collapse-post-header justify-content-between">
                <div class="col-lg-4 col-md-4 col-sm-5 col-11">
                  5. Information architecture
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                  <div>
                    <a
                      href="#collapse-post-content5"
                      role="button"
                      data-bs-toggle="collapse"
                      onclick="dropNavigationClick(this)"
                    >
                      <img src="../images/arrowDown.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="collapse collapse-post-content"
                id="collapse-post-content5"
              >
                <div>
                  Information architecture (IA) involves effectively organizing
                  and structuring content. When designed well, IA helps users find
                  the information they’re looking for or complete their task. UX
                  designers can facilitate this by making it easy for users to
                  understand where they are, where they need to go, and what’s
                  next. If you’re new to information architecture, start out by
                  studying some common website IA patterns. Much like you did with
                  wireframing, you can also practice by creating a sitemap of a
                  website or app you enjoy. Do this a few times, and try to
                  identify the elements that lead to good IA.
                </div>
              </div>
            </div>
          </div>
  
          <!-- правая часть -->
          <div class="col-lg-2 content-right-sectoring">
            <div
              class="row content-block-style text-center content-right-block-sectoring justify-content-center"
              id="avatar"
            >
              <div>
                <img class="img-fluid" src="../images/avatar.jpg" alt="" />
              </div>
              <div>
                <p>Hanna Dorman</p>
                <p class="text-secondary"><small>UX/UI designer</small></p>
              </div>
              <div>
                <img src="../images/telegram.png" alt="" />
                <img src="../images/hh.png" alt="" />
                <img src="../images/twitter.png" alt="" />
              </div>
            </div>
            <div class="row content-block-style content-right-block-sectoring">
              <button
                class="d-flex justify-content-between dropNavigation-header"
                onclick="dropNavigationClick(this)"
                data-bs-toggle="collapse"
                href=".dropNavigation"
                aria-expanded="false"
              >
                <span>Navigation</span>
                <div>
                  <img src="../images/arrowDown.png" alt="" />
                </div>
              </button>
              <ul class="navbar-collapse collapse dropNavigation">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/myProfile.png" alt="" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="justify-content-between align-items-start d-flex">
                      <div class="d-flex">
                        <img src="../images/balance.png" alt="" />
                        <span>Balance</span>
                      </div>
                      <span class="fw-lighter">$ 1,430</span>
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="d-flex justify-content-between align-items-start">
                      <div class="d-flex">
                        <div class="d-flex">
                          <img src="../images/connections.png" alt="" />
                        </div>
                        <span>Connections</span>
                      </div>
                      <span class="badge bg-danger rounded-pill fw-lighter"
                        >29</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/friends.png" alt="" />
                    <span>Friends</span>
                  </a>
                </li>
                <li></li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <div class="d-flex justify-content-between align-items-start">
                      <div class="d-flex">
                        <img src="../images/events.png" alt="" />
                        <span>Events</span>
                      </div>
                      <span class="badge bg-success rounded-pill fw-lighter"
                        >45</span
                      >
                    </div>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="../images/settings.png" alt="" />
                    <span>Account settings</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row content-block-style content-right-block-sectoring">
              <button
                class="d-flex justify-content-between dropNavigation-header"
                onclick="dropNavigationClick(this)"
                data-bs-toggle="collapse"
                href=".dropForm"
                aria-expanded="false"
              >
                <span class="">Contacts</span>
  
                <div>
                  <img src="../images/arrowDown.png" alt="" />
                </div>
              </button>
              <div class="dropForm collapse">
                  <div>
                      <img src="../images/phone.png" alt="">
                      <span>+7 977 588 18 24</span>
                    </div>
                <div>
                  <img src="../images/email.svg" alt="  ">
                  <span>hanna@mail.ru</span>
                </div>
                <div>
                  <img src="../images/vk.svg" alt="  ">
                  <span>vk.com/hanna_dorman</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    // let xhr_map=new XMLHttpRequest();
    // xhr_map.open('GET',htmlName,true);
    // xhr_map.onreadystatechange=function(){
    //     if(this.readyState!==4) return;
    //     if(this.status!==200) return
    //     app.innerHTML=this.responseText
    // }
    // xhr_map.send();
}

