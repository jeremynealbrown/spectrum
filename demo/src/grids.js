import Pixelspace from 'lib/pixelspace';

class Grids extends Pixelspace.Renderer {
  init() {
    this.bg = 'black';
  }

  render() {
    this.color('#222');
    this.grid(0, 0, this.height/10, this.width/10, this.width, this.height);
    this.color('cyan');
    this.grid(30, 50, 10, 10, 100, 100);
    this.color('magenta');
    this.grid(160, 50, 10, 10, 200, 200);
    this.color('yellow');
    this.grid(390, 50, 10, 10, 400, 400);
  }
}

module.exports = Grids;
