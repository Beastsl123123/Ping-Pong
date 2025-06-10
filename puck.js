class Puck {
    constructor() {
        this.x = width / 2; // Initialize puck at center
        this.y = height / 2; // Initialize puck at center
        this.xspeed = 0; // Initial horizontal speed
        this.yspeed = 0; // Initial vertical speed
        this.r = 12; // Radius of the puck
        this.reset(); // Reset the puck position and speed
    }
    
    checkPaddleLeft(p) {
        // Check if the puck hits the left paddle
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x - this.r < p.x + p.w / 2) {
                
            if (this.x > p.x) {
                let diff = this.y - (p.y - p.h / 2);
                let rad = radians(45);
                let angle = map(diff, 0, p.h, -rad, rad);
                this.xspeed = 5 * cos(angle);
                this.yspeed = 5 * sin(angle);
                this.x = p.x + p.w / 2 + this.r;
            }
        }
    }
    
    checkPaddleRight(p) {
        // Check if the puck hits the right paddle
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x + this.r > p.x - p.w / 2) {
                
            if (this.x < p.x) {
                let diff = this.y - (p.y - p.h / 2);
                let angle = map(diff, 0, p.h, radians(225), radians(135));
                this.xspeed = 5 * cos(angle);
                this.yspeed = 5 * sin(angle);
                this.x = p.x - p.w / 2 - this.r;
            }
        }
    }
    
    update() {
        this.x += this.xspeed; // Update puck's horizontal position
        this.y += this.yspeed; // Update puck's vertical position
    }
    
    reset() {
        this.x = width / 2; // Reset puck to center
        this.y = height / 2; // Reset puck to center
        let angle = random(-PI / 4, PI / 4);
        this.xspeed = 5 * Math.cos(angle); // Set random initial horizontal speed
        this.yspeed = 5 * Math.sin(angle); // Set random initial vertical speed
        
        if (random(1) < 0.5) {
            this.xspeed *= -1; // Randomly reverse direction
        }
    }
    
    edges() {
        if (this.y < 0 || this.y > height) {
            this.yspeed *= -1; // Reverse vertical direction if hitting top or bottom
        }
        
        if (this.x - this.r > width) {
            ding.play(); // Play sound
            leftscore++; // Increase left score
            this.reset(); // Reset puck
        }
        
        if (this.x + this.r < 0) {
            ding.play(); // Play sound
            rightscore++; // Increase right score
            this.reset(); // Reset puck
        }
    }
    
    show() {
        fill(255); // Set color to white
        ellipse(this.x, this.y, this.r * 2); // Draw puck
    }
}
