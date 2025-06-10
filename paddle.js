class Paddle {
    constructor(isLeft) {
        this.y = height / 2; // Initialize paddle at center vertically
        this.w = 20; // Width of the paddle
        this.h = 100; // Height of the paddle
        this.ychange = 0; // Initial vertical change

        // Position paddle on left or right
        if (isLeft) {
            this.x = this.w; // Left paddle
        } else {
            this.x = width - this.w; // Right paddle
        }
    }
    
    update() {
        this.y += this.ychange; // Update paddle's vertical position
        this.y = constrain(this.y, this.h / 2, height - this.h / 2); // Keep paddle within canvas
    }
    
    move(steps) {
        this.ychange = steps; // Set paddle's vertical change
    }
    
    show() {
        fill(255); // Set color to white
        rectMode(CENTER); // Draw rectangle from center
        rect(this.x, this.y, this.w, this.h); // Draw paddle
    }
}
