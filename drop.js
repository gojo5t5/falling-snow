function Drop() {
    this.x = random(-width, width);
    this.y = random(-height, -50);
    this.z = random(0, 50);
    this.len = map(this.z, 0, 50, 10, 20);
    this.xspeed = map(this.z, 0, 50, 0, 2)
    this.yspeed = map(this.z, 0, 50, 4, 10)

    this.fall = function() {
        this.y += this.yspeed;
        this.x += this.xspeed;
        var grav = map(this.z, 0, 50, 0, 0.2)
        var wind = map(this.z, 0, 50, 0, 0.02)
        // var wind = random(0, 0.05);

        this.yspeed += grav;
        this.xspeed += wind;

        if (this.y > height) {
            this.y = random(-500, -50);
            this.yspeed = map(this.z, 0, 50, 4, 10);
        }
        if (this.x > width) {
            this.x = random(-50, width);
            this.xspeed = map(this.z, 0, 50, 0.05, 2)
        }
    };

    this.show = function() {
        var thick = map(this.z, 0, 50, 1, 3);
        strokeWeight(thick);
        stroke(255, 255, 255);
        line(this.x, this.y, this.x + this.len /2, this.y + this.len);
    }
}