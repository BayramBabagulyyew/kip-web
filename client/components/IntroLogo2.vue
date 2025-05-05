<template>
  <div class="container">
    <div class="tilt-box-wrap">
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <span class="t_over"></span>
      <div class="tilt-box">
        <!-- <strong>KIP <br>KIP</strong> -->
        <img src="@/assets/img/logo-last.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onload = function () {
      var seconds = 0,
        milliseconds = 0,
        msec = document.getElementById("msec"),
        sec = document.getElementById("sec"),
        startBtn = document.getElementById("startBtn"),
        stopBtn = document.getElementById("stopBtn"),
        resetBtn = document.getElementById("resetBtn"),
        Interval;

      startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      };

      stopBtn.onclick = function () {
        clearInterval(Interval);
      };

      resetBtn.onclick = function () {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        msec.innerHTML = milliseconds;
        sec.innerHTML = seconds;
      };

      function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
          msec.innerHTML = "0" + milliseconds;
        }
        if (milliseconds > 9) {
          msec.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
          console.log("seconds");
          seconds++;
          sec.innerHTML = "0" + seconds;
          milliseconds = 0;
          msec.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
          sec.innerHTML = seconds;
        }
      }
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: arial;
  font-size: 16px;
  margin: 0;
  background-color: silver;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
}

.container {
  // background-image: url("@/assets/img/logo-last.png");
}
.tilt-box-wrap {
  width: 35vh;
  height: 35vh;
  position: relative;
  transition: all 0.6s ease-out;
  perspective: 1000px;
  @media (max-width: 767px) {
    width: 22vh;
    height: 22vh;
  }
}
.tilt-box-wrap:hover {
  transition: all 0.3s linear;
  transform: scale(1.1);
}
.tilt-box {
  width: 100%;
  height: 100%;
  /* background: #045276; */
  // background-image: url("@/assets/img/logo-last.png");
  background-position: center;
  background-repeat: no-repeat;
  border-color: red;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  color: #fff;
  font-size: 90px;
  text-transform: uppercase;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
  img {
    width: 100%;
    height: 100%;
  }
}

.tilt-box strong {
  transform: translateZ(40px);
}

.t_over {
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}

.t_over:nth-child(1) {
  left: 0;
  top: 0;
}
.t_over:nth-child(2) {
  left: 33.333%;
  top: 0;
}
.t_over:nth-child(3) {
  left: 66.666%;
  top: 0;
}
.t_over:nth-child(4) {
  left: 0;
  top: 33.333%;
}
.t_over:nth-child(5) {
  left: 33.333%;
  top: 33.333%;
}
.t_over:nth-child(6) {
  left: 66.666%;
  top: 33.333%;
}
.t_over:nth-child(7) {
  left: 0;
  top: 66.666%;
}
.t_over:nth-child(8) {
  left: 33.333%;
  top: 66.666%;
}
.t_over:nth-child(9) {
  left: 66.666%;
  top: 66.666%;
}

.t_over:nth-child(1):hover ~ .tilt-box {
  transform: rotateX(-20deg) rotateY(20deg);
}
.t_over:nth-child(2):hover ~ .tilt-box {
  transform: rotateX(-20deg) rotateY(0deg);
}
.t_over:nth-child(3):hover ~ .tilt-box {
  transform: rotateX(-20deg) rotateY(-20deg);
}
.t_over:nth-child(4):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(20deg);
}
.t_over:nth-child(5):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(0deg);
}
.t_over:nth-child(6):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(-20deg);
}
.t_over:nth-child(7):hover ~ .tilt-box {
  transform: rotateX(20deg) rotateY(20deg);
}
.t_over:nth-child(8):hover ~ .tilt-box {
  transform: rotateX(20deg) rotateY(0deg);
}
.t_over:nth-child(9):hover ~ .tilt-box {
  transform: rotateX(20deg) rotateY(-20deg);
}
</style>
