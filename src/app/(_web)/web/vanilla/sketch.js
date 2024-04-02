import { forwardRef, useEffect } from "react";

const Sketch = ({}, ref) => {
  if (typeof window !== "undefined") {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    const root = document.querySelector(":root");

    const speed = 0.7;

    let { width, height } = canvasSketch();
    let agents = [];

    class Agent {
      constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(
          randomRange(-speed, speed),
          randomRange(-speed, speed)
        );
        this.radius = randomRange(1, 6);
      }

      update() {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
      }

      draw() {
        context.fillStyle = backColor;
        context.lineWidth = 0.7;

        context.save();
        context.translate(this.pos.x, this.pos.y);

        context.beginPath();
        context.arc(0, 0, this.radius, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = color;
        context.stroke();

        context.restore();
      }
    }

    class Vector {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      getDistance(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
      }
    }

    window.addEventListener("resize", sketch, false);

    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    function canvasSketch() {
      canvas.height = window.innerHeight;
      window.innerWidth > 1000
        ? (canvas.width = 1000)
        : (canvas.width = window.innerWidth);

      let width = canvas.width;
      let height = canvas.height;

      //   sketch(width, height);
      return { width, height };
    }

    const createAgents = () => {
      const numberOfAgents = (width * 2) / 10;
      for (let i = 0; i < numberOfAgents; i++) {
        const x = randomRange(0, width);
        const y = randomRange(0, height);

        agents.push(new Agent(x, y));
      }
    };

    createAgents();

    function sketch() {
      // clear canvas with full white rectangle
      context.save();
      context.fillStyle = backColor;

      context.beginPath();
      context.rect(0, 0, width, height);
      context.fill();

      context.restore();

      // resize validation
      if (window.innerWidth != width || window.innerHeight != height) {
        if (window.innerWidth > 1000 && width === 1000) {
        } else if (window.innerWidth > 1000 && width !== 1000) {
          width = 1000;
          height = window.innerHeight;
          agents = [];
          canvasSketch();
          createAgents();
        } else if (window.innerWidth <= 1000) {
          width = window.innerWidth;
          height = window.innerHeight;
          agents = [];
          canvasSketch();
          createAgents();
        }
      }

      for (let i = 0; i < agents.length; i++) {
        const agent = agents[i];
        for (let j = i + 1; j < agents.length; j++) {
          const other = agents[j];
          const distBetween = 200;

          const dist = agent.pos.getDistance(other.pos);

          if (dist > distBetween) continue;

          context.save();

          context.lineWidth = mapRange(dist, 0, distBetween, 0.7, 0);
          context.beginPath();
          context.moveTo(agent.pos.x, agent.pos.y);
          context.lineTo(other.pos.x, other.pos.y);
          context.strokeStyle = color;
          context.stroke();

          context.restore();
        }
      }

      // animation
      agents.forEach((agent) => {
        agent.update();
        if (agent.pos.x <= 0 || agent.pos.x >= width) {
          agent.vel.x *= -1;
        }
        if (agent.pos.y <= 0 || agent.pos.y >= height) {
          agent.vel.y *= -1;
        }
        agent.draw();
      });
    }

    const animate = () => {
      sketch();
      requestAnimationFrame(animate);
    };

    let color;
    let backColor;

    const sketchColors = () => {
      color = getComputedStyle(root).getPropertyValue("--color");
      backColor = getComputedStyle(root).getPropertyValue("--background-color");
    };
    sketchColors();

    animate();
  }

  return;
};

export default forwardRef(Sketch);
