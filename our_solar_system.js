import {
  Background,
  Sun,
  Mercury,
  Venus,
  Earth,
  Moon,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
  Pluto,
} from "./static_planets.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const canvas_width = (canvas.width = window.innerWidth);
  const canvas_height = (canvas.height = window.innerHeight);
  const ctx = canvas.getContext("2d");

  class SolarSystem {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.planets = this.newPlanets();
      window.addEventListener("resize", function (event) {
        location.reload();
        // console.log(event);
      });
    }

    newPlanets() {
      const background = new Background(this);
      const sun = new Sun(this);
      const mercury = new Mercury(this);
      const venus = new Venus(this);
      const earth = new Earth(this);
      const moon = new Moon(this);
      const mars = new Mars(this);
      const jupiter = new Jupiter(this);
      const saturn = new Saturn(this);
      const uranus = new Uranus(this);
      const neptune = new Neptune(this);
      const pluto = new Pluto(this);

      const planets = [
        background,
        sun,
        mercury,
        venus,
        earth,
        moon,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
        pluto,
      ];
      return planets;
    }

    update() {
      for (let planet of this.planets) {
        planet.update();
      }
    }

    drawPlanets(context) {
      for (let planet of this.planets) {
        planet.draw(context);
      }
    }

    run(context) {
      this.update();
      this.drawPlanets(context);
      // console.log(canvas_width, canvas_height);
    }
  }

  const solarSystem = new SolarSystem(canvas_width, canvas_height);

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    solarSystem.run(ctx);
  }
  animate();
});
