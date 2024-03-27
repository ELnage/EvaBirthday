/// <reference types="../@types/jquery" />
const body = document.querySelector('body');
const all = `    <main id="root">
      <!-- <div class="Ready">
        <div
          class="d-flex align-items-center justify-content-center vh-100 w-100 position-relative text-white"
        >
          <h1 class="ml4">
            <span class="letters letters-1">Are</span>
            <span class="letters letters-2">You</span>
            <span class="letters letters-3">Ready!</span>
          </h1>
        </div>
      </div> -->


      <div>
        <section class="first" id="particles-js">
          <div class="outer">
            <div class="inner">
              <div class="bg one">
                <div class="section-heading top position-relative">
                  <h1 class="ml2">Happy Birthday !</h1>
                  <p>
                    MAY ALL YOUR DREAMS COME TRUE AND HAPPINESS BE WITH YOU
                    ALWAYS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="second">
          <div class="outer">
            <div class="inner">
              <div class="bg">
                <div class="">
                  <!-- <h2 class="position-absolute vw-100 my-text">
                    These moments will last a lifetime with us.
                  </h2> -->
                  <h2 class="ml10 my-text vw-100 position-absolute">
                    <span class="text-wrapper w-100">
                      <span class="letters"
                        >These moments will last a lifetime with us.</span
                      >
                    </span>
                  </h2>
                  <div class="content">
                    <!-- Pieces Slider -->
                    <div class="pieces-slider">
                      <!-- Each slide with corresponding image and text -->
                      <div class="pieces-slider__slide">
                        <img
                          class="pieces-slider__image"
                          src="images/screen1.jfif"
                          alt=""
                        />
                        <h2 class="pieces-slider__text">18/06/2023</h2>
                      </div>
                      <div class="pieces-slider__slide">
                        <img
                          class="pieces-slider__image"
                          src="images/screen2.jfif"
                          alt=""
                        />
                        <h2 class="pieces-slider__text">20/06/2023</h2>
                      </div>
                      <div class="pieces-slider__slide">
                        <img
                          class="pieces-slider__image"
                          src="images/screen3.jfif"
                          alt=""
                        />
                        <h2 class="pieces-slider__text">20/06/2023</h2>
                      </div>
                      <div class="pieces-slider__slide">
                        <img
                          class="pieces-slider__image"
                          src="images/screen4.jfif"
                          alt=""
                        />
                        <h2 class="pieces-slider__text">22/02/2024</h2>
                      </div>
                      <div class="pieces-slider__slide">
                        <img
                          class="pieces-slider__image"
                          src="images/screen5.jfif"
                          alt=""
                        />
                        <h2 class="pieces-slider__text">25/2/2024❤</h2>
                      </div>
                      <!-- Canvas to draw the pieces -->
                      <canvas class="pieces-slider__canvas"></canvas>
                      <!-- Slider buttons: prev and next -->
                      <button
                        class="pieces-slider__button pieces-slider__button--prev"
                      >
                        <i class="fa-solid fa-arrow-left"></i>
                      </button>
                      <button
                        class="pieces-slider__button pieces-slider__button--next"
                      >
                        <i class="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="third">
          <div class="outer">
            <div class="inner">
              <div class="bg">
                <!-- <h2 class="section-heading">GreenSock</h2> -->
                <div class="birthday-card">
                  <div class="cover-inner">
                    <img src="images/pic1.jpg" width="100%" />
                  </div>

                  <div class="cover-outer">
                    <img src="images/happy bd.jpg" width="100%" />
                  </div>

                  <div class="text">
                    <p class="title">اول صورة لينا مع بعض</p>
                    <p>
                      كنت لسه متعرف عليكي قريب و مكناش اصحاب اوي , و حتي يمكن
                      استغربت ساعتها شويه انك قولتيلي تعالي نتصور و مكنتش متخيل
                      اننا هنبقي اصحاب للدرجة دي
                    </p>
                    <p>و اتمني نفضل اصحاب طول العمر</p>
                  </div>
                </div>
                <div class="birthday-card">
                  <div class="cover-inner">
                    <img src="images/pic2.jfif" width="100%" />
                  </div>

                  <div class="cover-outer">
                    <img src="images/happy bd.jpg" width="100%" />
                  </div>

                  <div class="text">
                    <p class="title">اكتر صورة بحبها لينا</p>
                    <p>
                      من اكتر الصور اللي بحبها لينا علشان حسيت اننا شبه بعض شويه
                      فيها و كأننا اخوات و حقيقي انتي فعلا اختي مش صاحبتي بس
                    </p>
                    <p>و اتمني نفضل اخوات طول العمر</p>
                  </div>
                </div>
                <div class="birthday-card">
                  <div class="cover-inner">
                    <img src="images/pic3.jfif" width="100%" />
                  </div>

                  <div class="cover-outer">
                    <img src="images/happy bd.jpg" width="100%" />
                  </div>

                  <div class="text">
                    <p class="title mb-4">صورة عيد ميلادك اللي فات</p>
                    <p>
                      اليوم ده انا و انتي بس اللي نزلنا فيه الكلية و كنا بدأنا
                      نبقي اصحاب و نقرب اكتر و حقيقي انتي من اكتر الناس اللي
                      بحبها في حياتي
                    </p>
                    <p>و اتمني نفضل نحتفل باليوم ده سوا طول العمر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="fourth" id="particles-js2">
          <div class="outer">
            <div class="inner">
              <div class="bg">
                <h1 class="ml9 w-100 text-center">
                  <span class="text-wrapper w-100">
                    <span class="letters">Website Made With All Of Love</span>
                    <i class="fa-solid fa-heart"></i>
                  </span>
                </h1>
                <!-- <h2 class="">
                  website made with all of love
                </h2> -->
              </div>
            </div>
          </div>
        </section>
        <audio id="sound"
          src="assets/Happy Birthday To You  Birthday Songs 2024.mp3"
        preload="auto"
        loop
        autoplay
        ></audio>
      </div>



    </main>




    <script src="js/demo.js"></script>

    <script src="JS/confetti.min.js"></script>
    <script src="JS/main.js"></script>
`;
const readyHtml = `    <main id="root">
      <div class="Ready">
        <div
          class="d-flex align-items-center justify-content-center vh-100 w-100 position-relative text-white"
        >
          <h1 class="ml4">
            <span class="letters letters-1">Are</span>
            <span class="letters letters-2">You</span>
            <span class="letters letters-3">Ready!</span>
          </h1>
        </div>
      </div>

    </main>
`;
const count = document.getElementById('count');
const head = document.getElementById('head');
const giftbox = document.getElementById('merrywrap');
const canvasC = document.getElementById('c');

const config = {
  birthdate: 'mar 29, 2023',
  name: 'Eva'
};
function fireApp() {
  body.innerHTML = readyHtml;
  ready();
  setTimeout(function () {
    body.innerHTML = all;
    start();
    slider();
    balon();
  }, 5800);
}
function hideEverything() {
  head.style.display = 'none';
  count.style.display = 'none';
  giftbox.style.display = 'none';
  canvasC.style.display = 'none';
}

hideEverything();

const confettiSettings = { target: 'confetti' };
const confetti = new window.ConfettiGenerator(confettiSettings);
confetti.render();

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
let x = setInterval(function () {
  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor(
    (distance % day) / hour
  );
  document.getElementById('minute').innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );

  let w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    ctx = c.getContext('2d'),
    hw = w / 2, // half-width
    hh = h / 2,
    opts = {
      strings: ['HAPPY', 'BIRTHDAY!', config.name],
      charSize: 30,
      charSpacing: 35,
      lineHeight: 40,

      cx: w / 2,
      cy: h / 2,

      fireworkPrevPoints: 10,
      fireworkBaseLineWidth: 5,
      fireworkAddedLineWidth: 8,
      fireworkSpawnTime: 200,
      fireworkBaseReachTime: 30,
      fireworkAddedReachTime: 30,
      fireworkCircleBaseSize: 20,
      fireworkCircleAddedSize: 10,
      fireworkCircleBaseTime: 30,
      fireworkCircleAddedTime: 30,
      fireworkCircleFadeBaseTime: 10,
      fireworkCircleFadeAddedTime: 5,
      fireworkBaseShards: 5,
      fireworkAddedShards: 5,
      fireworkShardPrevPoints: 3,
      fireworkShardBaseVel: 4,
      fireworkShardAddedVel: 2,
      fireworkShardBaseSize: 3,
      fireworkShardAddedSize: 3,
      gravity: 0.1,
      upFlow: -0.1,
      letterContemplatingWaitTime: 360,
      balloonSpawnTime: 20,
      balloonBaseInflateTime: 10,
      balloonAddedInflateTime: 10,
      balloonBaseSize: 20,
      balloonAddedSize: 20,
      balloonBaseVel: 0.4,
      balloonAddedVel: 0.4,
      balloonBaseRadian: -(Math.PI / 2 - 0.5),
      balloonAddedRadian: -1
    },
    calc = {
      totalWidth:
        opts.charSpacing *
        Math.max(opts.strings[0].length, opts.strings[1].length)
    },
    Tau = Math.PI * 2,
    TauQuarter = Tau / 4,
    letters = [];

  ctx.font = opts.charSize + 'px Verdana';

  function Letter(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;

    this.dx = -ctx.measureText(char).width / 2;
    this.dy = +opts.charSize / 2;

    this.fireworkDy = this.y - hh;

    let hue = (x / calc.totalWidth) * 360;

    this.color = 'hsl(hue,80%,50%)'.replace('hue', hue);
    this.lightAlphaColor = 'hsla(hue,80%,light%,alp)'.replace('hue', hue);
    this.lightColor = 'hsl(hue,80%,light%)'.replace('hue', hue);
    this.alphaColor = 'hsla(hue,80%,50%,alp)'.replace('hue', hue);

    this.reset();
  }
  Letter.prototype.reset = function () {
    this.phase = 'firework';
    this.tick = 0;
    this.spawned = false;
    this.spawningTime = (opts.fireworkSpawnTime * Math.random()) | 0;
    this.reachTime =
      (opts.fireworkBaseReachTime +
        opts.fireworkAddedReachTime * Math.random()) |
      0;
    this.lineWidth =
      opts.fireworkBaseLineWidth + opts.fireworkAddedLineWidth * Math.random();
    this.prevPoints = [[0, hh, 0]];
  };
  Letter.prototype.step = function () {
    if (this.phase === 'firework') {
      if (!this.spawned) {
        ++this.tick;
        if (this.tick >= this.spawningTime) {
          this.tick = 0;
          this.spawned = true;
        }
      } else {
        ++this.tick;

        let linearProportion = this.tick / this.reachTime,
          armonicProportion = Math.sin(linearProportion * TauQuarter),
          x = linearProportion * this.x,
          y = hh + armonicProportion * this.fireworkDy;

        if (this.prevPoints.length > opts.fireworkPrevPoints)
          this.prevPoints.shift();

        this.prevPoints.push([x, y, linearProportion * this.lineWidth]);

        let lineWidthProportion = 1 / (this.prevPoints.length - 1);

        for (let i = 1; i < this.prevPoints.length; ++i) {
          let point = this.prevPoints[i],
            point2 = this.prevPoints[i - 1];

          ctx.strokeStyle = this.alphaColor.replace(
            'alp',
            i / this.prevPoints.length
          );
          ctx.lineWidth = point[2] * lineWidthProportion * i;
          ctx.beginPath();
          ctx.moveTo(point[0], point[1]);
          ctx.lineTo(point2[0], point2[1]);
          ctx.stroke();
        }

        if (this.tick >= this.reachTime) {
          this.phase = 'contemplate';

          this.circleFinalSize =
            opts.fireworkCircleBaseSize +
            opts.fireworkCircleAddedSize * Math.random();
          this.circleCompleteTime =
            (opts.fireworkCircleBaseTime +
              opts.fireworkCircleAddedTime * Math.random()) |
            0;
          this.circleCreating = true;
          this.circleFading = false;

          this.circleFadeTime =
            (opts.fireworkCircleFadeBaseTime +
              opts.fireworkCircleFadeAddedTime * Math.random()) |
            0;
          this.tick = 0;
          this.tick2 = 0;

          this.shards = [];

          let shardCount =
              (opts.fireworkBaseShards +
                opts.fireworkAddedShards * Math.random()) |
              0,
            angle = Tau / shardCount,
            cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = 1,
            y = 0;

          for (let i = 0; i < shardCount; ++i) {
            let x1 = x;
            x = x * cos - y * sin;
            y = y * cos + x1 * sin;

            this.shards.push(new Shard(this.x, this.y, x, y, this.alphaColor));
          }
        }
      }
    } else if (this.phase === 'contemplate') {
      ++this.tick;

      if (this.circleCreating) {
        ++this.tick2;
        let proportion = this.tick2 / this.circleCompleteTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 50 + 50 * proportion)
          .replace('alp', proportion);
        ctx.beginPath();
        ctx.arc(this.x, this.y, armonic * this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 > this.circleCompleteTime) {
          this.tick2 = 0;
          this.circleCreating = false;
          this.circleFading = true;
        }
      } else if (this.circleFading) {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        ++this.tick2;
        let proportion = this.tick2 / this.circleFadeTime,
          armonic = -Math.cos(proportion * Math.PI) / 2 + 0.5;

        ctx.beginPath();
        ctx.fillStyle = this.lightAlphaColor
          .replace('light', 100)
          .replace('alp', 1 - armonic);
        ctx.arc(this.x, this.y, this.circleFinalSize, 0, Tau);
        ctx.fill();

        if (this.tick2 >= this.circleFadeTime) this.circleFading = false;
      } else {
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);
      }

      for (let i = 0; i < this.shards.length; ++i) {
        this.shards[i].step();

        if (!this.shards[i].alive) {
          this.shards.splice(i, 1);
          --i;
        }
      }

      if (this.tick > opts.letterContemplatingWaitTime) {
        this.phase = 'balloon';

        this.tick = 0;
        this.spawning = true;
        this.spawnTime = (opts.balloonSpawnTime * Math.random()) | 0;
        this.inflating = false;
        this.inflateTime =
          (opts.balloonBaseInflateTime +
            opts.balloonAddedInflateTime * Math.random()) |
          0;
        this.size =
          (opts.balloonBaseSize + opts.balloonAddedSize * Math.random()) | 0;

        let rad =
            opts.balloonBaseRadian + opts.balloonAddedRadian * Math.random(),
          vel = opts.balloonBaseVel + opts.balloonAddedVel * Math.random();

        this.vx = Math.cos(rad) * vel;
        this.vy = Math.sin(rad) * vel;
      }
    } else if (this.phase === 'balloon') {
      ctx.strokeStyle = this.lightColor.replace('light', 80);

      if (this.spawning) {
        ++this.tick;
        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.spawnTime) {
          this.tick = 0;
          this.spawning = false;
          this.inflating = true;
        }
      } else if (this.inflating) {
        ++this.tick;

        let proportion = this.tick / this.inflateTime,
          x = (this.cx = this.x),
          y = (this.cy = this.y - this.size * proportion);

        ctx.fillStyle = this.alphaColor.replace('alp', proportion);
        ctx.beginPath();
        generateBalloonPath(x, y, this.size * proportion);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, this.y);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(this.char, this.x + this.dx, this.y + this.dy);

        if (this.tick >= this.inflateTime) {
          this.tick = 0;
          this.inflating = false;
        }
      } else {
        this.cx += this.vx;
        this.cy += this.vy += opts.upFlow;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        generateBalloonPath(this.cx, this.cy, this.size);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.cx, this.cy);
        ctx.lineTo(this.cx, this.cy + this.size);
        ctx.stroke();

        ctx.fillStyle = this.lightColor.replace('light', 70);
        ctx.fillText(
          this.char,
          this.cx + this.dx,
          this.cy + this.dy + this.size
        );

        if (this.cy + this.size < -hh || this.cx < -hw || this.cy > hw)
          this.phase = 'done';
      }
    }
  };

  function Shard(x, y, vx, vy, color) {
    let vel =
      opts.fireworkShardBaseVel + opts.fireworkShardAddedVel * Math.random();

    this.vx = vx * vel;
    this.vy = vy * vel;

    this.x = x;
    this.y = y;

    this.prevPoints = [[x, y]];
    this.color = color;

    this.alive = true;

    this.size =
      opts.fireworkShardBaseSize + opts.fireworkShardAddedSize * Math.random();
  }
  Shard.prototype.step = function () {
    this.x += this.vx;
    this.y += this.vy += opts.gravity;

    if (this.prevPoints.length > opts.fireworkShardPrevPoints)
      this.prevPoints.shift();

    this.prevPoints.push([this.x, this.y]);

    let lineWidthProportion = this.size / this.prevPoints.length;

    for (let k = 0; k < this.prevPoints.length - 1; ++k) {
      let point = this.prevPoints[k],
        point2 = this.prevPoints[k + 1];

      ctx.strokeStyle = this.color.replace('alp', k / this.prevPoints.length);
      ctx.lineWidth = k * lineWidthProportion;
      ctx.beginPath();
      ctx.moveTo(point[0], point[1]);
      ctx.lineTo(point2[0], point2[1]);
      ctx.stroke();
    }

    if (this.prevPoints[0][1] > hh) this.alive = false;
  };

  function generateBalloonPath(x, y, size) {
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x - size / 2,
      y - size / 2,
      x - size / 4,
      y - size,
      x,
      y - size
    );
    ctx.bezierCurveTo(x + size / 4, y - size, x + size / 2, y - size / 2, x, y);
  }

  function anim() {
    window.requestAnimationFrame(anim);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);

    ctx.translate(hw, hh);

    let done = true;
    for (let l = 0; l < letters.length; ++l) {
      letters[l].step();
      if (letters[l].phase !== 'done') done = false;
    }

    ctx.translate(-hw, -hh);

    if (done) for (let l = 0; l < letters.length; ++l) letters[l].reset();
  }

  for (let i = 0; i < opts.strings.length; ++i) {
    for (let j = 0; j < opts.strings[i].length; ++j) {
      letters.push(
        new Letter(
          opts.strings[i][j],
          j * opts.charSpacing +
            opts.charSpacing / 2 -
            (opts.strings[i].length * opts.charSize) / 2,
          i * opts.lineHeight +
            opts.lineHeight / 2 -
            (opts.strings.length * opts.lineHeight) / 2
        )
      );
    }
  }

  window.addEventListener('resize', function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;

    hw = w / 2;
    hh = h / 2;

    ctx.font = opts.charSize + 'px Verdana';
  });

  if (distance > 0) {
    head.classList.remove('d-none');
    count.classList.remove('d-none');
    head.style.display = 'initial';
    count.style.display = 'initial';
  } else {
    head.classList.add('d-none');
    count.classList.add('d-none');
    giftbox.style.display = 'initial';
    clearInterval(x);
    let merrywrap = document.getElementById('merrywrap');
    let box = merrywrap.getElementsByClassName('giftbox')[0];
    let step = 1;
    let stepMinutes = [2000, 2000, 1000, 1000];

    function init() {
      box.addEventListener('click', openBox, false);
      box.addEventListener('click', showfireworks, false);
      box.addEventListener('click', function () {
        setTimeout(fireApp, 13800);
      });
    }

    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }

    function openBox() {
      if (step === 1) {
        box.removeEventListener('click', openBox, false);
      }
      stepClass(step);
      if (step === 3) {
      }
      if (step === 4) {
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
      //   setTimeout(anim, 1900);
    }

    function showfireworks() {
      canvasC.style.display = 'initial';
      setTimeout(anim, 1500);
    }

    init();
  }
}, second);

function ready() {
  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 10;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml4 .letters-1',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: '.ml4 .letters-1',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay
    })
    .add({
      targets: '.ml4 .letters-2',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: '.ml4 .letters-2',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay
    })
    .add({
      targets: '.ml4 .letters-3',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    })
    .add({
      targets: '.ml4 .letters-3',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: 'easeInExpo',
      delay: ml4.delay
    })
    .add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      delay: 500
    });
}
function start() {
  gsap.registerPlugin(Observer);

  let sections = document.querySelectorAll('section'),
    images = document.querySelectorAll('.bg'),
    headings = gsap.utils.toArray('.section-heading'),
    outerWrappers = gsap.utils.toArray('.outer'),
    innerWrappers = gsap.utils.toArray('.inner'),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length),
    animating;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  function gotoSection(index, direction) {
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => (animating = false)
      });
    if (currentIndex >= 0) {
      // The first time this function runs, current is -1
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: i => (i ? -100 * dFactor : 100 * dFactor)
      },
      {
        yPercent: 0
      },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        [index].chars,
        {
          autoAlpha: 0,
          yPercent: 150 * dFactor
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: 'power2',
          stagger: {
            each: 0.02,
            from: 'random'
          }
        },
        0.2
      );

    currentIndex = index;
  }

  Observer.create({
    type: 'wheel,touch,pointer',
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true
  });

  gotoSection(0, 1);
  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml2 .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 950,
      delay: (el, i) => 70 * i
    })
    .add({
      targets: '.ml2',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1500
    });

  var textWrapper = document.querySelector('.ml9 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml9 .letter',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1)
    })
    .add({
      targets: '.ml9',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1500
    });

  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    })
    .add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1500
    });

  document.onclick = function () {
    document.getElementById('sound').play();
  };
}

function slider() {
  // Get all images and texts, get the `canvas` element, and save slider length
  var sliderCanvas = document.querySelector('.pieces-slider__canvas');
  var imagesEl = [].slice.call(
    document.querySelectorAll('.pieces-slider__image')
  );
  var textEl = [].slice.call(document.querySelectorAll('.pieces-slider__text'));
  var slidesLength = imagesEl.length;

  // Define indexes related variables and functions
  var currentIndex = 0,
    currentImageIndex,
    currentTextIndex,
    currentNumberIndex;
  // Update current indexes for image, text and number
  function updateIndexes() {
    currentImageIndex = currentIndex * 3;
    currentTextIndex = currentImageIndex + 1;
    currentNumberIndex = currentImageIndex + 2;
  }
  updateIndexes();
  var textIndexes = [];
  var numberIndexes = [];

  // Some other useful variables
  var windowWidth = window.innerWidth;
  var piecesSlider;

  // Options for images
  var imageOptions = {
    angle: 45,
    extraSpacing: { extraX: 100, extraY: 200 },
    piecesWidth: function () {
      return Pieces.random(50, 200);
    },
    ty: function () {
      return Pieces.random(-400, 400);
    }
  };

  // Options for texts
  var textOptions = {
    color: 'white',
    backgroundColor: '#5104ab',
    fontSize: function () {
      return windowWidth > 720 ? 50 : 30;
    },
    padding: '15 20 10 20',
    angle: -45,
    piecesSpacing: 2,
    extraSpacing: { extraX: 0, extraY: 300 },
    piecesWidth: function () {
      return Pieces.random(50, 200);
    },
    ty: function () {
      return Pieces.random(-200, 200);
    },
    translate: function () {
      if (windowWidth > 1120) return { translateX: 200, translateY: 200 };
      if (windowWidth > 720) return { translateX: 0, translateY: 200 };
      return { translateX: 0, translateY: 100 };
    }
  };

  // Options for numbers
  var numberOptions = {
    color: 'white',
    backgroundColor: '#5104ab',
    fontSize: function () {
      return windowWidth > 720 ? 60 : 20;
    },
    padding: function () {
      return windowWidth > 720 ? '18 35 10 38' : '18 25 10 28';
    },
    angle: 0,
    piecesSpacing: 2,
    extraSpacing: { extraX: 10, extraY: 10 },
    piecesWidth: 35,
    ty: function () {
      return Pieces.random(-200, 200);
    },
    translate: function () {
      if (windowWidth > 1120) return { translateX: -340, translateY: -180 };
      if (windowWidth > 720) return { translateX: -240, translateY: -180 };
      return { translateX: -140, translateY: -100 };
    }
  };

  // Build the array of items to draw using Pieces
  var items = [];
  var imagesReady = 0;
  for (var i = 0; i < slidesLength; i++) {
    // Wait for all images to load before initializing the slider and event listeners
    var slideImage = new Image();
    slideImage.onload = function () {
      if (++imagesReady == slidesLength) {
        initSlider();
        initEvents();
      }
    };
    // Push all elements for each slide with the corresponding options
    items.push({ type: 'image', value: imagesEl[i], options: imageOptions });
    items.push({
      type: 'text',
      value: textEl[i].textContent,
      options: textOptions
    });
    items.push({ type: 'text', value: i + 1, options: numberOptions });
    // Save indexes
    textIndexes.push(i * 3 + 1);
    numberIndexes.push(i * 3 + 2);
    // Set image src
    slideImage.src = imagesEl[i].src;
  }

  // Initialize a Pieces instance with all items we want to draw
  function initSlider() {
    // Stop any current animation if the slider was initialized before
    if (piecesSlider) {
      piecesSlider.stop();
    }

    // Save the new Pieces instance
    piecesSlider = new Pieces({
      canvas: sliderCanvas,
      items: items,
      x: 'centerAll',
      y: 'centerAll',
      piecesSpacing: 1,
      fontFamily: ["'Helvetica Neue', sans-serif"],
      animation: {
        duration: function () {
          return Pieces.random(1000, 2000);
        },
        easing: 'easeOutQuint'
      }
      // debug: true
    });

    // Animate all numbers to rotate clockwise indefinitely
    piecesSlider.animateItems({
      items: numberIndexes,
      duration: 20000,
      angle: 360,
      loop: true
    });

    // Show current items: image, text and number
    showItems();
  }

  // Init Event Listeners
  function initEvents() {
    // Select prev or next slide using buttons
    document
      .querySelector('.pieces-slider__button--prev')
      .addEventListener('click', prevItem);
    document
      .querySelector('.pieces-slider__button--next')
      .addEventListener('click', nextItem);

    // Select prev or next slide using arrow keys
    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 37) {
        // left
        prevItem();
      } else if (e.keyCode == 39) {
        // right
        nextItem();
      }
    });

    // Handle `resize` event
    window.addEventListener('resize', resizeStart);
  }

  // Show current items: image, text and number
  function showItems() {
    // Show image pieces
    piecesSlider.showPieces({
      items: currentImageIndex,
      ignore: ['tx'],
      singly: true,
      update: anim => {
        // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
        if (anim.progress > 60) {
          var piece = anim.animatables[0].target;
          var ty = piece.ty;
          anime.remove(piece);
          anime({
            targets: piece,
            ty:
              piece.h_ty < 300
                ? [
                    { value: ty + 10, duration: 1000 },
                    { value: ty - 10, duration: 2000 },
                    { value: ty, duration: 1000 }
                  ]
                : [
                    { value: ty - 10, duration: 1000 },
                    { value: ty + 10, duration: 2000 },
                    { value: ty, duration: 1000 }
                  ],
            duration: 2000,
            easing: 'linear',
            loop: true
          });
        }
      }
    });
    // Show pieces for text and number, using alternate `ty` values
    piecesSlider.showPieces({ items: currentTextIndex });
    piecesSlider.showPieces({
      items: currentNumberIndex,
      ty: function (p, i) {
        return p.s_ty - [-3, 3][i % 2];
      }
    });
  }

  // Hide current items: image, text and number
  function hideItems() {
    piecesSlider.hidePieces({
      items: [currentImageIndex, currentTextIndex, currentNumberIndex]
    });
  }

  // Select the prev item: hide current items, update indexes, and show the new current item
  function prevItem() {
    hideItems();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
    updateIndexes();
    showItems();
  }

  // Select the next item: hide current items, update indexes, and show the new current item
  function nextItem() {
    hideItems();
    currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
    updateIndexes();
    showItems();
  }

  // Handle `resize` event

  var initial = true,
    hideTimer,
    resizeTimer;

  // User starts resizing, so wait 300 ms before reinitialize the slider
  function resizeStart() {
    if (initial) {
      initial = false;
      if (hideTimer) clearTimeout(hideTimer);
      sliderCanvas.classList.add('pieces-slider__canvas--hidden');
    }
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeEnd, 300);
  }

  // User ends resizing, then reinitialize the slider
  function resizeEnd() {
    initial = true;
    windowWidth = window.innerWidth;
    initSlider();
    hideTimer = setTimeout(() => {
      sliderCanvas.classList.remove('pieces-slider__canvas--hidden');
    }, 500);
  }
}

function balon() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'image',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '../images/balon.png',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 35,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  particlesJS('particles-js2', {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'image',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '../images/balon.png',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 35,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}
