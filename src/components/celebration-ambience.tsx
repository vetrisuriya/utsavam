"use client";

import { useEffect, useRef } from "react";
import {
  getAmbience,
  type CursorKind,
} from "@/lib/celebrations/ambience";
import { cn } from "@/lib/utils";

const TAU = Math.PI * 2;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  rot: number;
  vr: number;
  gravity: number;
  color: string;
  phase: number;
  shape:
    | "circle"
    | "petal"
    | "rect"
    | "heart"
    | "balloon"
    | "lantern"
    | "flake"
    | "diya";
}

interface Rocket {
  x: number;
  y: number;
  vy: number;
  targetY: number;
  color: string;
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)] ?? list[0];
}

function heartPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
) {
  const s = size / 16;
  ctx.beginPath();
  ctx.moveTo(x, y + 4 * s);
  ctx.bezierCurveTo(x, y + 2 * s, x - 2 * s, y - 1 * s, x - 6 * s, y - 1 * s);
  ctx.bezierCurveTo(x - 12 * s, y - 1 * s, x - 12 * s, y + 5 * s, x, y + 11 * s);
  ctx.bezierCurveTo(x + 12 * s, y + 5 * s, x + 12 * s, y - 1 * s, x + 6 * s, y - 1 * s);
  ctx.bezierCurveTo(x + 2 * s, y - 1 * s, x, y + 2 * s, x, y + 4 * s);
  ctx.closePath();
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  shape: Particle["shape"],
  x: number,
  y: number,
  size: number,
  color: string,
  rot: number,
  alpha: number,
  glow = false,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;

  if (glow) {
    ctx.shadowColor = color;
    ctx.shadowBlur = size * 2.4;
  }

  switch (shape) {
    case "petal": {
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.42, 0, 0, TAU);
      ctx.fill();
      break;
    }
    case "rect": {
      ctx.fillRect(-size, -size * 0.45, size * 2, size * 0.9);
      break;
    }
    case "heart": {
      heartPath(ctx, 0, 0, size);
      ctx.fill();
      break;
    }
    case "balloon": {
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.72, size, 0, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = alpha * 0.55;
      ctx.beginPath();
      ctx.moveTo(-size * 0.12, size);
      ctx.quadraticCurveTo(0, size * 1.5, size * 0.18, size * 1.9);
      ctx.stroke();
      break;
    }
    case "lantern": {
      ctx.beginPath();
      ctx.roundRect(-size * 0.55, -size * 0.75, size * 1.1, size * 1.5, size * 0.3);
      ctx.fill();
      ctx.globalAlpha = alpha * 0.6;
      ctx.fillRect(-size * 0.12, size * 0.75, size * 0.24, size * 0.5);
      break;
    }
    case "flake": {
      ctx.lineWidth = Math.max(0.7, size * 0.24);
      for (let arm = 0; arm < 6; arm += 1) {
        ctx.save();
        ctx.rotate((arm * Math.PI) / 3);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.moveTo(0, -size * 0.55);
        ctx.lineTo(size * 0.3, -size * 0.8);
        ctx.moveTo(0, -size * 0.55);
        ctx.lineTo(-size * 0.3, -size * 0.8);
        ctx.stroke();
        ctx.restore();
      }
      break;
    }
    case "diya": {
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.52, 0, 0, TAU);
      ctx.fill();
      ctx.globalAlpha = alpha * 0.8;
      ctx.beginPath();
      ctx.ellipse(0, -size * 0.5, size * 0.24, size * 0.42, 0, 0, TAU);
      ctx.fillStyle = "#ffe4a3";
      ctx.fill();
      break;
    }
    default: {
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, TAU);
      ctx.fill();
    }
  }

  ctx.restore();
}

function drawCursorShape(
  ctx: CanvasRenderingContext2D,
  kind: CursorKind,
  x: number,
  y: number,
  size: number,
  color: string,
  rot: number,
  alpha: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = size * 3;

  if (kind === "spark" || kind === "ember") {
    ctx.beginPath();
    ctx.moveTo(0, -size * 2.2);
    ctx.lineTo(size * 0.5, 0);
    ctx.lineTo(0, size * 2.2);
    ctx.lineTo(-size * 0.5, 0);
    ctx.closePath();
    ctx.fill();
  } else if (kind === "star") {
    ctx.beginPath();
    for (let point = 0; point < 8; point += 1) {
      const radius = point % 2 === 0 ? size * 2 : size * 0.6;
      const angle = (point * Math.PI) / 4 - Math.PI / 2;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (point === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  } else if (kind === "petal") {
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 1.6, size * 0.65, 0, 0, TAU);
    ctx.fill();
  } else if (kind === "heart") {
    heartPath(ctx, 0, 0, size * 2.2);
    ctx.fill();
  } else if (kind === "confetti") {
    ctx.fillRect(-size, -size * 0.4, size * 2, size * 0.8);
  } else if (kind === "snow") {
    ctx.lineWidth = Math.max(0.7, size * 0.28);
    for (let arm = 0; arm < 6; arm += 1) {
      ctx.save();
      ctx.rotate((arm * Math.PI) / 3);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -size * 1.7);
      ctx.stroke();
      ctx.restore();
    }
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, TAU);
    ctx.fill();
  }

  ctx.restore();
}

export function CelebrationAmbience({
  slug,
  accent = "#f6b73c",
  accent2,
  className,
  cursor = true,
}: {
  slug: string;
  accent?: string;
  accent2?: string;
  className?: string;
  cursor?: boolean;
}) {
  const backgroundRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLCanvasElement>(null);
  const config = getAmbience(slug);

  useEffect(() => {
    const canvas = backgroundRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const palette = [
      accent,
      accent2 ?? accent,
      "#f6b73c",
      "#ffd98a",
      "#ff8fd1",
      "#7fe3c0",
      "#ff8a3d",
      "#fff3cc",
    ];
    const softPalette = [accent, accent2 ?? accent, "#ffd98a", "#fff3cc"];
    const kind = config.kind;
    const intensity = config.intensity;

    let width = 1;
    let height = 1;
    let dpr = 1;
    let raf = 0;
    let last = performance.now();
    let spawnTimer = 0;
    let rocketTimer = 0;
    let shootingTimer = rand(2, 5);
    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    const maxParticles = intensity === "full" ? 140 : intensity === "medium" ? 90 : 55;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    function spawn(props: Partial<Particle> & { x: number; y: number }) {
      if (particles.length > maxParticles) particles.shift();
      particles.push({
        x: props.x,
        y: props.y,
        vx: props.vx ?? 0,
        vy: props.vy ?? 0,
        size: props.size ?? 2,
        life: props.life ?? 1,
        maxLife: props.maxLife ?? props.life ?? 1,
        rot: props.rot ?? 0,
        vr: props.vr ?? 0,
        gravity: props.gravity ?? 0,
        color: props.color ?? palette[0]!,
        phase: props.phase ?? Math.random() * TAU,
        shape: props.shape ?? "circle",
      });
    }

    function explode(x: number, y: number, color: string) {
      const count = intensity === "soft" ? 18 : 32;
      for (let index = 0; index < count; index += 1) {
        const angle = (index / count) * TAU + rand(-0.08, 0.08);
        const speed = rand(45, intensity === "full" ? 230 : 170);
        spawn({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: rand(1, 2.4),
          life: rand(0.8, 1.7),
          gravity: 55,
          color: Math.random() > 0.3 ? color : pick(palette),
        });
      }
    }

    function updateFireworks(dt: number) {
      rocketTimer -= dt;
      if (rocketTimer <= 0) {
        rocketTimer = rand(0.75, 1.6);
        rockets.push({
          x: rand(width * 0.12, width * 0.88),
          y: height + 8,
          vy: -rand(300, 470),
          targetY: rand(height * 0.14, height * 0.46),
          color: pick(palette),
        });
      }

      for (let index = rockets.length - 1; index >= 0; index -= 1) {
        const rocket = rockets[index]!;
        rocket.y += rocket.vy * dt;
        ctx!.globalCompositeOperation = "lighter";
        ctx!.globalAlpha = 0.8;
        ctx!.fillStyle = rocket.color;
        ctx!.shadowColor = rocket.color;
        ctx!.shadowBlur = 12;
        ctx!.beginPath();
        ctx!.arc(rocket.x, rocket.y, 1.6, 0, TAU);
        ctx!.fill();
        if (rocket.y <= rocket.targetY) {
          explode(rocket.x, rocket.y, rocket.color);
          rockets.splice(index, 1);
        }
      }
      ctx!.globalCompositeOperation = "lighter";
      ctx!.shadowBlur = 0;
    }

    function updateColors(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.1) {
        spawnTimer -= 0.1;
        spawn({
          x: rand(-20, width + 20),
          y: rand(height * 0.25, height + 30),
          vx: rand(-24, 24),
          vy: rand(-58, -22),
          size: rand(16, 52),
          life: rand(3.5, 6),
          gravity: -6,
          color: pick(palette),
        });
      }
    }

    function updatePetals(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.16) {
        spawnTimer -= 0.16;
        spawn({
          x: rand(-30, width + 30),
          y: -20,
          vx: rand(-18, 18),
          vy: rand(34, 74),
          size: rand(3.5, 7.5),
          life: 16,
          maxLife: 16,
          rot: rand(0, TAU),
          vr: rand(-1.8, 1.8),
          color: pick([accent, "#ffd98a", "#ff8a3d", "#ff8fd1", "#fff3cc"]),
          shape: "petal",
        });
      }
    }

    function updateSnow(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.1) {
        spawnTimer -= 0.1;
        spawn({
          x: rand(-20, width + 20),
          y: -20,
          vx: rand(-16, 16),
          vy: rand(28, 68),
          size: rand(2, 5),
          life: 18,
          maxLife: 18,
          rot: rand(0, TAU),
          vr: rand(-0.8, 0.8),
          color: pick(["#ffffff", "#e6f2ff", "#cfe6ff"]),
          shape: "flake",
        });
      }
    }

    function updateConfetti(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.09) {
        spawnTimer -= 0.09;
        spawn({
          x: rand(-20, width + 20),
          y: -20,
          vx: rand(-30, 30),
          vy: rand(50, 120),
          size: rand(2.5, 5.5),
          life: 12,
          maxLife: 12,
          rot: rand(0, TAU),
          vr: rand(-4, 4),
          color: pick(palette),
          shape: "rect",
        });
      }
    }

    function updateHearts(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.5) {
        spawnTimer -= 0.5;
        spawn({
          x: rand(width * 0.05, width * 0.95),
          y: height + 20,
          vx: rand(-12, 12),
          vy: rand(-42, -22),
          size: rand(5, 11),
          life: 12,
          maxLife: 12,
          rot: rand(-0.25, 0.25),
          vr: rand(-0.3, 0.3),
          color: pick(["#ff8fd1", "#ff6fae", "#ffd0e6", accent]),
          shape: "heart",
        });
      }
    }

    function updateBubbles(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.22) {
        spawnTimer -= 0.22;
        spawn({
          x: rand(-10, width + 10),
          y: height + 24,
          vx: rand(-10, 10),
          vy: rand(-42, -20),
          size: rand(4, 14),
          life: 12,
          maxLife: 12,
          color: pick(softPalette),
          shape: "circle",
        });
      }
    }

    function updateDiyas(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.42) {
        spawnTimer -= 0.42;
        spawn({
          x: rand(width * 0.05, width * 0.95),
          y: height + 16,
          vx: rand(-8, 8),
          vy: rand(-30, -16),
          size: rand(3.5, 7),
          life: 14,
          maxLife: 14,
          color: pick(["#ffd98a", "#f6b73c", "#ff8a3d", "#fff3cc"]),
          shape: "diya",
        });
      }
    }

    function updateLanterns(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.8) {
        spawnTimer -= 0.8;
        spawn({
          x: rand(width * 0.08, width * 0.92),
          y: height + 24,
          vx: rand(-6, 6),
          vy: rand(-30, -16),
          size: rand(7, 14),
          life: 16,
          maxLife: 16,
          color: pick(["#ffd98a", "#f6b73c", "#ffb347"]),
          shape: "lantern",
        });
      }
    }

    function updateSparks(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.08) {
        spawnTimer -= 0.08;
        spawn({
          x: rand(0, width),
          y: height + 10,
          vx: rand(-12, 12),
          vy: rand(-90, -35),
          size: rand(1, 2.4),
          life: rand(2, 4),
          color: pick(["#ffd98a", "#ff8a3d", "#f6b73c"]),
        });
      }
    }

    function updateBalloons(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.6) {
        spawnTimer -= 0.6;
        spawn({
          x: rand(width * 0.04, width * 0.96),
          y: height + 40,
          vx: rand(-10, 10),
          vy: rand(-56, -32),
          size: rand(10, 20),
          life: 16,
          maxLife: 16,
          rot: rand(-0.2, 0.2),
          vr: rand(-0.2, 0.2),
          color: pick(palette),
          shape: "balloon",
        });
      }
    }

    function updateDust(dt: number) {
      spawnTimer += dt;
      while (spawnTimer > 0.4) {
        spawnTimer -= 0.4;
        spawn({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-8, 8),
          vy: rand(-14, -4),
          size: rand(0.8, 2.4),
          life: rand(5, 10),
          color: pick(softPalette),
        });
      }
    }

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      phase: number;
      speed: number;
    }> = [];
    function seedStars() {
      stars.length = 0;
      const count = Math.min(
        100,
        Math.max(24, Math.floor((width * height) / 12000)),
      );
      for (let index = 0; index < count; index += 1) {
        stars.push({
          x: rand(0, width),
          y: rand(0, height),
          size: rand(0.6, 1.9),
          phase: rand(0, TAU),
          speed: rand(0.7, 2.2),
        });
      }
    }
    seedStars();
    const observer = new ResizeObserver(() => {
      resize();
      seedStars();
    });
    observer.observe(canvas);

    function drawStars(time: number) {
      ctx!.globalCompositeOperation = "lighter";
      for (const star of stars) {
        const alpha = 0.2 + 0.7 * (0.5 + 0.5 * Math.sin(time * star.speed + star.phase));
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = "#fff6dc";
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, TAU);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function drawCrescent(time: number) {
      drawStars(time);
      const radius = Math.min(width, height) * 0.09;
      const x = width * 0.82;
      const y = height * 0.2;
      const pulse = 0.85 + Math.sin(time * 0.8) * 0.08;

      const glow = ctx!.createRadialGradient(x, y, radius * 0.2, x, y, radius * 2.4);
      glow.addColorStop(0, "rgba(255, 235, 180, 0.35)");
      glow.addColorStop(1, "rgba(255, 235, 180, 0)");
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(x, y, radius * 2.4, 0, TAU);
      ctx!.fill();

      ctx!.globalAlpha = pulse;
      ctx!.fillStyle = "#fff3cc";
      ctx!.shadowColor = "#ffe6a3";
      ctx!.shadowBlur = 22;
      ctx!.beginPath();
      ctx!.arc(x, y, radius, 0, TAU);
      ctx!.fill();

      ctx!.shadowBlur = 0;
      ctx!.globalAlpha = 1;
      ctx!.fillStyle = "rgba(10, 7, 18, 0.94)";
      ctx!.beginPath();
      ctx!.arc(x + radius * 0.42, y - radius * 0.16, radius * 0.88, 0, TAU);
      ctx!.fill();
    }

    let shooting:
      | { x: number; y: number; vx: number; vy: number; life: number }
      | undefined;

    function drawShootingStar(dt: number) {
      shootingTimer -= dt;
      if (!shooting && shootingTimer <= 0) {
        shootingTimer = rand(3, 7);
        shooting = {
          x: rand(width * 0.1, width * 0.8),
          y: rand(height * 0.05, height * 0.35),
          vx: rand(180, 280),
          vy: rand(60, 120),
          life: 0.9,
        };
      }
      if (!shooting) return;
      shooting.x += shooting.vx * dt;
      shooting.y += shooting.vy * dt;
      shooting.life -= dt;
      const alpha = Math.max(0, shooting.life);
      ctx!.globalCompositeOperation = "lighter";
      ctx!.strokeStyle = `rgba(255, 244, 214, ${alpha})`;
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      ctx!.moveTo(shooting.x, shooting.y);
      ctx!.lineTo(shooting.x - shooting.vx * 0.12, shooting.y - shooting.vy * 0.12);
      ctx!.stroke();
      if (shooting.life <= 0) shooting = undefined;
    }

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const time = now / 1000;

      ctx!.clearRect(0, 0, width, height);
      ctx!.globalAlpha = 1;
      ctx!.shadowBlur = 0;
      ctx!.globalCompositeOperation = "source-over";

      if (kind === "fireworks") updateFireworks(dt);
      else if (kind === "colors") updateColors(dt);
      else if (kind === "petals") updatePetals(dt);
      else if (kind === "snow") updateSnow(dt);
      else if (kind === "confetti") updateConfetti(dt);
      else if (kind === "hearts") updateHearts(dt);
      else if (kind === "bubbles") updateBubbles(dt);
      else if (kind === "diyas") updateDiyas(dt);
      else if (kind === "lanterns") updateLanterns(dt);
      else if (kind === "sparks") updateSparks(dt);
      else if (kind === "balloons") updateBalloons(dt);
      else if (kind === "dust") updateDust(dt);

      if (kind === "stars") {
        drawStars(time);
        drawShootingStar(dt);
      } else if (kind === "crescent") {
        drawCrescent(time);
        drawShootingStar(dt);
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index]!;
        particle.life -= dt;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.vy += particle.gravity * dt;
        particle.rot += particle.vr * dt;

        if (kind === "petals" || kind === "snow") {
          particle.x += Math.sin(time * 1.1 + particle.phase) * 12 * dt;
        }
        if (kind === "hearts" || kind === "bubbles") {
          particle.x += Math.sin(time * 0.8 + particle.phase) * 9 * dt;
        }

        if (
          particle.life <= 0 ||
          particle.y < -80 ||
          particle.y > height + 90 ||
          particle.x < -100 ||
          particle.x > width + 100
        ) {
          particles.splice(index, 1);
          continue;
        }

        const fade = Math.min(1, particle.life / Math.min(particle.maxLife, 1.4));
        const baseAlpha = kind === "colors" ? 0.16 : kind === "dust" ? 0.5 : 0.85;

        if (kind === "colors") {
          const gradient = ctx!.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size,
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, "rgba(0,0,0,0)");
          ctx!.globalAlpha = baseAlpha * fade;
          ctx!.fillStyle = gradient;
          ctx!.beginPath();
          ctx!.arc(particle.x, particle.y, particle.size, 0, TAU);
          ctx!.fill();
        } else if (kind === "diyas" || kind === "lanterns") {
          const glow = ctx!.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3.5,
          );
          glow.addColorStop(0, "rgba(255, 220, 140, 0.55)");
          glow.addColorStop(1, "rgba(255, 180, 80, 0)");
          ctx!.fillStyle = glow;
          ctx!.globalAlpha = fade;
          ctx!.beginPath();
          ctx!.arc(particle.x, particle.y, particle.size * 3.5, 0, TAU);
          ctx!.fill();
          drawShape(
            ctx!,
            particle.shape,
            particle.x,
            particle.y,
            particle.size,
            particle.color,
            particle.rot,
            fade,
          );
        } else if (kind === "bubbles") {
          ctx!.globalAlpha = fade * 0.5;
          ctx!.strokeStyle = particle.color;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.arc(particle.x, particle.y, particle.size, 0, TAU);
          ctx!.stroke();
        } else if (kind === "stars") {
          // Stars are drawn as a fixed field; the extra particles are sparkles.
          ctx!.globalCompositeOperation = "lighter";
          drawShape(
            ctx!,
            "circle",
            particle.x,
            particle.y,
            particle.size,
            particle.color,
            particle.rot,
            fade,
            true,
          );
        } else {
          drawShape(
            ctx!,
            particle.shape,
            particle.x,
            particle.y,
            particle.size,
            particle.color,
            particle.rot,
            fade,
            kind === "fireworks" || kind === "sparks" || kind === "confetti",
          );
        }
      }

      ctx!.globalAlpha = 1;
      ctx!.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [config.kind, config.intensity, accent, accent2]);

  useEffect(() => {
    if (!cursor) return;
    const canvas = cursorRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const kind = config.cursor;
    const palette = [
      accent,
      accent2 ?? accent,
      "#ffd98a",
      "#ff8fd1",
      "#7fe3c0",
      "#fff3cc",
    ];
    let width = 1;
    let height = 1;
    let dpr = 1;
    let raf = 0;
    let last = performance.now();
    let lastSpawn = 0;

    interface TrailParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      rot: number;
      vr: number;
      color: string;
    }

    const trail: TrailParticle[] = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    function spawnTrail(x: number, y: number) {
      const count = kind === "spark" || kind === "ember" ? 2 : 1;
      for (let index = 0; index < count; index += 1) {
        trail.push({
          x: x + rand(-4, 4),
          y: y + rand(-4, 4),
          vx: rand(-26, 26),
          vy: rand(-34, 10),
          size: rand(1.2, kind === "heart" || kind === "petal" ? 4.2 : 2.8),
          life: rand(0.45, 0.95),
          maxLife: 0.95,
          rot: rand(0, TAU),
          vr: rand(-3, 3),
          color: pick(palette),
        });
      }
      if (trail.length > 160) trail.splice(0, trail.length - 160);
    }

    let pointerX = -100;
    let pointerY = -100;
    function onPointerMove(event: PointerEvent) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const now = performance.now();
      if (now - lastSpawn < 18) return;
      lastSpawn = now;
      spawnTrail(pointerX, pointerY);
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      ctx!.clearRect(0, 0, width, height);

      for (let index = trail.length - 1; index >= 0; index -= 1) {
        const particle = trail[index]!;
        particle.life -= dt;
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt;
        particle.vy += 42 * dt;
        particle.rot += particle.vr * dt;
        const alpha = Math.max(0, particle.life / particle.maxLife);
        if (particle.life <= 0) {
          trail.splice(index, 1);
          continue;
        }
        drawCursorShape(
          ctx!,
          kind,
          particle.x,
          particle.y,
          particle.size,
          particle.color,
          particle.rot,
          alpha,
        );
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [config.cursor, accent, accent2, cursor]);

  return (
    <>
      <canvas
        ref={backgroundRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-0 h-svh w-full",
          className,
        )}
      />
      {cursor ? (
        <canvas
          ref={cursorRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] h-full w-full"
        />
      ) : null}
    </>
  );
}
