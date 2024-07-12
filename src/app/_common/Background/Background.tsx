// import React, { useEffect, useRef } from 'react';
// import './Stars.css'; // Create this CSS file to include the styles

// const Stars: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const particleCount = 40;
//     const flareCount = 10;
//     const motion = 0.05;
//     const tilt = 0.05;
//     const color = '#FFEED4';
//     const particleSizeBase = 1;
//     const particleSizeMultiplier = 0.5;
//     const flareSizeBase = 100;
//     const flareSizeMultiplier = 100;
//     const lineWidth = 1;
//     const linkChance = 75; // chance per frame of link, higher = smaller chance
//     const linkLengthMin = 5; // min linked vertices
//     const linkLengthMax = 7; // max linked vertices
//     const linkOpacity = 0.25; // number between 0 & 1
//     const linkFade = 90; // link fade-out frames
//     const linkSpeed = 1; // distance a link travels in 1 frame
//     const glareAngle = -60;
//     const glareOpacityMultiplier = 0.05;
//     const renderParticles = true;
//     const renderParticleGlare = true;
//     const renderFlares = true;
//     const renderLinks = true;
//     const renderMesh = false;
//     const flicker = true;
//     const flickerSmoothing = 15; // higher = smoother flicker
//     const blurSize = 0;
//     const orbitTilt = true;
//     const randomMotion = true;
//     const noiseLength = 1000;
//     const noiseStrength = 1;

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const context = canvas.getContext('2d');
//     if (!context) return;

//     let mouse = { x: 0, y: 0 };
//     let n = 0;
//     const nAngle = (Math.PI * 2) / noiseLength;
//     let nPos = { x: 0, y: 0 };
//     const particles: Particle[] = [];
//     const points: number[][] = [];
//     const vertices: number[] = [];
//     const triangles: number[][] = [];
//     const links: Link[] = [];
//     const flares: Flare[] = [];

//     class Particle {
//       x: number;
//       y: number;
//       z: number;
//       color: string;
//       opacity: number;
//       flicker: number;
//       neighbors: number[];

//       constructor() {
//         this.x = random(-0.1, 1.1, true);
//         this.y = random(-0.1, 1.1, true);
//         this.z = random(0, 4);
//         this.color = color;
//         this.opacity = random(0.1, 1, true);
//         this.flicker = 0;
//         this.neighbors = [];
//       }

//       render() {
//         if(context){
//         const pos = position(this.x, this.y, this.z);
//         const r = ((this.z * particleSizeMultiplier) + particleSizeBase) * (sizeRatio() / 1000);
//         let o = this.opacity;

//         if (flicker) {
//           const newVal = random(-0.5, 0.5, true);
//           this.flicker += (newVal - this.flicker) / flickerSmoothing;
//           if (this.flicker > 0.5) this.flicker = 0.5;
//           if (this.flicker < -0.5) this.flicker = -0.5;
//           o += this.flicker;
//           if (o > 1) o = 1;
//           if (o < 0) o = 0;
//         }

//         context.fillStyle = this.color;
//         context.globalAlpha = o;
//         context.beginPath();
//         context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
//         context.fill();
//         context.closePath();

//         if (renderParticleGlare) {
//           context.globalAlpha = o * glareOpacityMultiplier;
//           context.ellipse(pos.x, pos.y, r * 100, r, (glareAngle - ((nPos.x - 0.5) * noiseStrength * motion)) * (Math.PI / 180), 0, 2 * Math.PI, false);
//           context.fill();
//           context.closePath();
//         }

//         context.globalAlpha = 1;
//     }
//       }
//     }

//     class Flare {
//       x: number;
//       y: number;
//       z: number;
//       color: string;
//       opacity: number;

//       constructor() {
//         this.x = random(-0.25, 1.25, true);
//         this.y = random(-0.25, 1.25, true);
//         this.z = random(0, 2);
//         this.color = color;
//         this.opacity = random(0.001, 0.01, true);
//       }

//       render() {
//         const pos = position(this.x, this.y, this.z);
//         const r = ((this.z * flareSizeMultiplier) + flareSizeBase) * (sizeRatio() / 1000);
//         if(context){
//             context.beginPath();
//             context.globalAlpha = this.opacity;
//             context.arc(pos.x, pos.y, r, 0, 2 * Math.PI, false);
//             context.fillStyle = this.color;
//             context.fill();
//             context.closePath();
//             context.globalAlpha = 1;
//         }
//       }
//     }

//     class Link {
//       length: number;
//       verts: number[];
//       stage: number;
//       linked: number[];
//       distances: number[];
//       traveled: number;
//       fade: number;
//       finished: boolean;

//       constructor(startVertex: number, numPoints: number) {
//         this.length = numPoints;
//         this.verts = [startVertex];
//         this.stage = 0;
//         this.linked = [startVertex];
//         this.distances = [];
//         this.traveled = 0;
//         this.fade = 0;
//         this.finished = false;
//       }

//       render() {
//         let i, p, pos, points;

//         switch (this.stage) {
//           case 0:
//             const last = particles[this.verts[this.verts.length - 1]];
//             if (last && last.neighbors && last.neighbors.length > 0) {
//               const neighbor = last.neighbors[random(0, last.neighbors.length - 1)];
//               if (this.verts.indexOf(neighbor) === -1) {
//                 this.verts.push(neighbor);
//               }
//             } else {
//               this.stage = 3;
//               this.finished = true;
//             }

//             if (this.verts.length >= this.length) {
//               for (i = 0; i < this.verts.length - 1; i++) {
//                 const p1 = particles[this.verts[i]];
//                 const p2 = particles[this.verts[i + 1]];
//                 const dx = p1.x - p2.x;
//                 const dy = p1.y - p2.y;
//                 const dist = Math.sqrt(dx * dx + dy * dy);

//                 this.distances.push(dist);
//               }
//               this.stage = 1;
//             }
//             break;

//           case 1:
//             if (this.distances.length > 0) {
//                 if(canvas){
//               points = [];
//               const linkSpeedRel = linkSpeed * 0.00001 * canvas.width;
//               this.traveled += linkSpeedRel;
//               const d = this.distances[this.linked.length - 1];

//               if (this.traveled >= d) {
//                 this.traveled = 0;
//                 this.linked.push(this.verts[this.linked.length]);
//                 p = particles[this.linked[this.linked.length - 1]];
//                 pos = position(p.x, p.y, p.z);
//                 points.push([pos.x, pos.y]);

//                 if (this.linked.length >= this.verts.length) {
//                   this.stage = 2;
//                 }
//               } else {
//                 const a = particles[this.linked[this.linked.length - 1]];
//                 const b = particles[this.verts[this.linked.length]];
//                 const t = d - this.traveled;
//                 const x = ((this.traveled * b.x) + (t * a.x)) / d;
//                 const y = ((this.traveled * b.y) + (t * a.y)) / d;
//                 const z = ((this.traveled * b.z) + (t * a.z)) / d;

//                 pos = position(x, y, z);
//                 points.push([pos.x, pos.y]);
//               }

//               this.drawLine(points);
//             }
//             } else {
//               this.stage = 3;
//               this.finished = true;
//             }
//             break;

//           case 2:
//             if (this.verts.length > 1) {
//               if (this.fade < linkFade) {
//                 this.fade++;
//                 points = [];
//                 const alpha = (1 - (this.fade / linkFade)) * linkOpacity;
//                 for (i = 0; i < this.verts.length; i++) {
//                   p = particles[this.verts[i]];
//                   pos = position(p.x, p.y, p.z);
//                   points.push([pos.x, pos.y]);
//                 }
//                 this.drawLine(points, alpha);
//               } else {
//                 this.stage = 3;
//                 this.finished = true;
//               }
//             } else {
//               this.stage = 3;
//               this.finished = true;
//             }
//             break;

//           case 3:
//             this.finished = true;
//             break;
//         }
//       }

//       drawLine(points: number[][], alpha: number = linkOpacity) {
//         if (points.length > 1) {
//             if(context){
//                 context.beginPath();
//           context.moveTo(points[0][0], points[0][1]);
//           for (let i = 1; i < points.length; i++) {
//             context.lineTo(points[i][0], points[i][1]);
//           }
//           context.lineWidth = lineWidth;
//           context.strokeStyle = color;
//           context.globalAlpha = alpha;
//           context.stroke();
//           context.closePath();
//           context.globalAlpha = 1;
//             }
//         }
//       }
//     }

//     function init() {
//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle());
//       }
//       for (let i = 0; i < flareCount; i++) {
//         flares.push(new Flare());
//       }
//     }

//     function random(min: number, max: number, float: boolean = false) {
//       return float ? (Math.random() * (max - min)) + min : Math.floor((Math.random() * (max - min)) + min);
//     }

//     function position(x: number, y: number, z: number) {
//       return {
//         x: (x - 0.5) * sizeRatio() + canvas.width / 2,
//         y: (y - 0.5) * sizeRatio() + canvas.height / 2
//       };
//     }

//     function sizeRatio() {
//       return Math.min(canvas.width, canvas.height);
//     }

//     function resizeCanvas() {
//       if (canvas) {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       }
//     }

//     function render() {
//       if (context) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         particles.forEach(p => p.render());
//         flares.forEach(f => f.render());
//       }

//       requestAnimationFrame(render);
//     }

//     window.addEventListener('resize', resizeCanvas, false);
//     resizeCanvas();
//     init();
//     render();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas, false);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="canvas" />;
// };

// export default Stars;
