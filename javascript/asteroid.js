class Asteroid {
  constructor(posXParam) {
    this.x = posXParam;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = "../images/asteroid2.png";
    this.asteroidSpeed = 2;
  }

  drawAsteroid = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  asteroidMove = () => {
    this.y = this.y + this.asteroidSpeed
  };
}
