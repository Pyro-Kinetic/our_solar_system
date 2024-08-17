export class Background {
  constructor(solarSystem) {
    this.solarSystem = solarSystem;
    this.image = document.getElementById("bg_sky");
    this.dx = 0;
    this.dy = 0;
    this.sunWidth = 2000;
    this.sunHeight = 2065;
    this.dWidth = this.solarSystem.width;
    this.dHeight = this.solarSystem.height;
    this.screenSizes();
  }

  screenSizes() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.sunWidth = 1200;
      this.sunHeight = 1265;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.sunWidth = 1300;
      this.sunHeight = 1365;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.sunWidth = 1400;
      this.sunHeight = 1365;
    } else {
      this.dx;
      this.dy;
      this.sunWidth;
      this.sunHeight;
    }

    return this.sunWidth, this.sunHeight, this.dx, this.dy;
  }

  update() {}

  draw(context) {
    context.drawImage(this.image, this.dx, this.dy, this.dWidth, this.dHeight);
  }
}

// Sun
export class Sun extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("sun");
    this.dx = -1000;
    this.dy = -410;
    this.dWidth = this.sunWidth;
    this.dHeight = this.sunHeight;
  }

  updatePosition() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = -600;
      this.dy = -175;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = -650;
      this.dy = -105;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = -670;
      this.dy = -230;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.updatePosition();
  }
}

// Mercury
export class Mercury extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("mercury");
    this.dx = 420;
    this.dy = 700;
    this.scaledWidth = 0.05; // 0.05x smaller than the sun
    this.scaledHeight = 0.05; // 0.05x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  updatePosition() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 250;
      this.dy = 500;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 250;
      this.dy = 690;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 290;
      this.dy = 550;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.updatePosition();
  }
}

// Venus
export class Venus extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("venus");
    this.dx = 450;
    this.dy = 100;
    this.scaledWidth = 0.15; // 0.14x smaller than the sun
    this.scaledHeight = 0.14; // 0.14x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 280;
      this.dy = 140;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 260;
      this.dy = 170;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 290;
      this.dy = 120;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// Earth
export class Earth extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("earth");
    this.dx = 650;
    this.dy = 450;
    this.scaledWidth = 0.1; // 0.1x smaller than the sun
    this.scaledHeight = 0.1; // 0.1x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 395;
      this.dy = 340;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 395;
      this.dy = 450;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 410;
      this.dy = 335;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// Moon
export class Moon extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("moon");
    this.dx = 830;
    this.dy = 450;
    this.scaledWidth = 0.02; // 0.03x snaller than the sun
    this.scaledHeight = 0.02; // 0.02x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 503;
      this.dy = 340;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 503;
      this.dy = 440;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 540;
      this.dy = 340;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// mars
export class Mars extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("mars");
    this.dx = 800;
    this.dy = 710;
    this.scaledWidth = 0.1; // 0.1x smaller than the sun
    this.scaledHeight = 0.1; // 0.1x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 487;
      this.dy = 505;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 500;
      this.dy = 700;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 510;
      this.dy = 550;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// jupiter
export class Jupiter extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("jupiter");
    this.dx = 880;
    this.dy = 200;
    this.scaledWidth = 0.25; // 0.25x smaller than the sun
    this.scaledHeight = 0.27; // 0.27x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 550;
      this.dy = 190;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 550;
      this.dy = 250;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 585;
      this.dy = 170;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// saturn
export class Saturn extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("saturn");
    this.dx = 1250;
    this.dy = -100;
    this.scaledWidth = 0.35; // 0.35x smaller than the sun
    this.scaledHeight = 0.31; // 0.31x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 785;
      this.dy = -5;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 785;
      this.dy = 30;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 835;
      this.dy = -50;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// uranus
export class Uranus extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("uranus");
    this.dx = 1700;
    this.dy = 700;
    this.scaledWidth = 0.11; // 0.11x smaller than the sun
    this.scaledHeight = 0.101; // 0.10x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 1072;
      this.dy = 540;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 1072;
      this.dy = 685;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 1140;
      this.dy = 540;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// neptune
export class Neptune extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("neptune");
    this.dx = 1700;
    this.dy = 50;
    this.scaledWidth = 0.22; // 0.22x smaller than the sun
    this.scaledHeight = 0.22; // 0.22x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 1070;
      this.dy = 65;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 1060;
      this.dy = 150;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 1130;
      this.dy = 60;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}

// pluto
export class Pluto extends Background {
  constructor(solarSystem) {
    super(solarSystem);
    this.image = document.getElementById("pluto");
    this.dx = 1940;
    this.dy = 500;
    this.scaledWidth = 0.04; // 0.04x smaller than the sun
    this.scaledHeight = 0.04; // 0.04x smaller than the sun
    this.dWidth = this.sunWidth * this.scaledWidth;
    this.dHeight = this.sunHeight * this.scaledHeight;
  }

  position() {
    if (this.solarSystem.width <= 1280 && this.solarSystem.height <= 800) {
      this.dx = 1225;
      this.dy = 415;
    } else if (
      this.solarSystem.width <= 1280 &&
      this.solarSystem.height <= 1024
    ) {
      this.dx = 1225;
      this.dy = 490;
    } else if (
      this.solarSystem.width <= 1366 &&
      this.solarSystem.height <= 768
    ) {
      this.dx = 1308;
      this.dy = 380;
    } else {
      this.dx;
      this.dy;
    }
    return this.dx, this.dy;
  }

  update() {
    this.position();
  }
}
