let flag = false;

//div2
let div21 = [
  [
    "Search doctor",
    "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  ],

  [
    "Online pharmacy",
    "Buy  your medicines with our mobile application with a simple delivery system",
  ],

  [
    "Consultation",
    "Free consultation with our trusted doctors and get the best recomendations",
  ],

  [
    "Details info",
    "Free consultation with our trusted doctors and get the best recomendations",
  ],

  [
    "Emergency care",
    "You can get 24/7 urgent care for yourself or your children and your lovely family",
  ],

  ["Tracking", "Track and save your medical history and health data "],
];

function div2anim() {
  if (!flag) {
    let a = 0;

    let rgo = setInterval(() => {
      ++a;
      let bx = document.getElementById(`bx${a}`);
      bx.innerHTML += `<div id ="abox" class = "abox">

                          <div id="icona" class="icona">
                              <img src="img/icon${a}.png" alt="ico">
                          </div>

                          <div id="texta" class="texta">
                              <div id="intexta" class="intexta">
                                  <h5>${div21[a - 1][0]}</h5>
                                  <p>${div21[a - 1][1]}</p>
                              </div>
                          </div>

                        </div>`;
    }, 250);

    setTimeout(() => {
      clearInterval(rgo);
    }, 1500);

    flag = true;
  }
}

//progbar

window.addEventListener("scroll", (event) => {
  let whole = document.getElementById("global");
  let maxheight = whole.scrollHeight - window.innerHeight;
  let depth = this.scrollY;
  let perc = 100 * (depth / maxheight);
  document.getElementById("pb").style.width = perc + "%";

  let divo = document.getElementById("div1");
  let var1 = divo.scrollHeight / 2;

  if (depth >= var1 && !flag) {
    div2anim();
  }
});

//div3

let i = 0;

let arr = [
  [
    "Skyler White",
    "Founder circle",
    "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
  ],
  [
    "Dasha Taran",
    "Customer",
    "“I am giving ThoughtCo. a 5 star rating because the folks that schedule appointments really go out of their way above to really try to get as many needed appointments on the same day.”",
  ],
  [
    "Steve Carell",
    "Customer",
    "“The service was quick and easy, simple photo sent to an online page, quick questions online about symptoms etc and antibiotics were prescribed and sent by the next day.”",
  ],
  [
    "Kim Wexler",
    "Employee",
    "“I love my work here. If I didn’t have bills to pay I would do it for free. I consider it a blessing to be a part of the ThoughtCo family. This is the best hospital in the country.”",
  ],
];

setInterval(() => {
  if (i == 4) {
    document.getElementById(`d${i}`).style.borderStyle = "hidden";
    i = 0;
  }

  i++;

  document.getElementById("pfp").style.backgroundImage = `url('img/${i}.jpg')`;

  document.getElementById("pname").innerHTML = `<div id="trid" class="trid">
                                                  <h2 id="rev-name" class="rev-name">${
                                                    arr[i - 1][0]
                                                  }</h2>
                                                  <p id="rev-post" class="rev-post">${
                                                    arr[i - 1][1]
                                                  }</p>
                                                </div>`;

  document.getElementById(
    "cont"
  ).innerHTML = `<div id="review" class="review">${arr[i - 1][2]}</div>`;

  if (i > 1) {
    document.getElementById(`d${i - 1}`).style.borderStyle = "hidden";
  }
  document.getElementById(`d${i}`).style.borderStyle = "solid";
}, 3000);

function gof() {
  if (i == 4) {
    document.getElementById(`d${i}`).style.borderStyle = "hidden";
    i = 0;
  }

  i++;

  document.getElementById("pfp").style.backgroundImage = `url('img/${i}.jpg')`;

  document.getElementById("pname").innerHTML = `<div id="trid" class="trid">
                                                  <h2 id="rev-name" class="rev-name">${
                                                    arr[i - 1][0]
                                                  }</h2>
                                                  <p id="rev-post" class="rev-post">${
                                                    arr[i - 1][1]
                                                  }</p>
                                                </div>`;

  document.getElementById(
    "cont"
  ).innerHTML = `<div id="review" class="review">${arr[i - 1][2]}</div>`;

  if (i > 1) {
    document.getElementById(`d${i - 1}`).style.borderStyle = "hidden";
  }
  document.getElementById(`d${i}`).style.borderStyle = "solid";
}

function gob() {
  if (i == 1) {
    document.getElementById(`d${i}`).style.borderStyle = "hidden";
    i = 5;
  }

  i--;

  document.getElementById("pfp").style.backgroundImage = `url('img/${i}.jpg')`;

  document.getElementById("pname").innerHTML = `<div id="trid" class="trid">
                                                  <h2 id="rev-name" class="rev-name">${
                                                    arr[i - 1][0]
                                                  }</h2>
                                                  <p id="rev-post" class="rev-post">${
                                                    arr[i - 1][1]
                                                  }</p>
                                                </div>`;

  document.getElementById(
    "cont"
  ).innerHTML = `<div id="review" class="review">${arr[i - 1][2]}</div>`;

  if (i < 4) {
    document.getElementById(`d${i + 1}`).style.borderStyle = "hidden";
  }
  document.getElementById(`d${i}`).style.borderStyle = "solid";
}
