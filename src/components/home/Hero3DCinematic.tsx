"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Maximize2, Sparkles, Activity, Layers } from "lucide-react";

export const Hero3DCinematic: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideo, setHasVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/assets/hero-3d-cinematic.mp4";
    video.oncanplay = () => setHasVideo(true);
    video.onerror = () => setHasVideo(false);
  }, []);

  // 2. Procedural 10-Second Looping 3D Optical Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let startTime = performance.now();

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track mouse for 3D parallax tilt
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mousePos.current.targetX = x * 20;
      mousePos.current.targetY = y * 20;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Data stream packets
    const streamPackets: { progress: number; speed: number; pathIdx: number }[] = [];
    for (let i = 0; i < 18; i++) {
      streamPackets.push({
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
        pathIdx: Math.floor(Math.random() * 6),
      });
    }

    // 10-second precise choreography render loop
    const render = (now: number) => {
      const elapsed = (now - startTime) % 10000; // 0 to 10000 ms
      const t = elapsed / 1000; // 0.0 to 10.0 seconds
      setCurrentTime(t);

      // Smooth mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.06;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.06;

      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5 + mousePos.current.x;
      const cy = h * 0.52 + mousePos.current.y;

      // PHASE CHOREOGRAPHY
      // 0–2s: Blue particle emergence & thin network trace genesis
      // 2–5s: Precision assembly of geometric optical slabs
      // 5–8s: High-speed cyan data streams + central core activation
      // 8–10s: Wide settled architecture smoothly transitioning to origin loop

      // Phase 1 (0-2s) & Phase 4 (8-10s) Particle Emergence
      const particleAlpha = t < 2 ? t / 2 : t > 8 ? (10 - t) / 2 : 1;

      // Central Core Glow (Peaks at 5-8s)
      const corePulse = t >= 5 && t <= 8
        ? 0.55 + Math.sin((t - 5) * Math.PI) * 0.35
        : 0.35 + Math.sin(t * 1.5) * 0.1;

      // Draw Ambient Radiant Aura
      const coreGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 180);
      coreGrad.addColorStop(0, `rgba(6, 182, 212, ${corePulse * 0.5})`);
      coreGrad.addColorStop(0.5, `rgba(37, 99, 235, ${corePulse * 0.25})`);
      coreGrad.addColorStop(1, "rgba(11, 21, 40, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.fill();

      // Interconnected Network Vector Paths (Isometric Geometry)
      const nodes = [
        { x: cx - 110, y: cy - 45, label: "INGRESS" },
        { x: cx + 110, y: cy - 45, label: "EDGE" },
        { x: cx - 140, y: cy + 35, label: "CONTAINER" },
        { x: cx + 140, y: cy + 35, label: "K8S" },
        { x: cx, y: cy - 85, label: "API GATEWAY" },
        { x: cx, y: cy + 85, label: "DATA TIER" },
      ];

      // Draw Network Circuit Traces
      ctx.lineWidth = 1.2;
      nodes.forEach((node, i) => {
        // Line assembly factor based on time
        const assembleFactor = t < 2 ? t / 2 : 1;
        const targetX = cx + (node.x - cx) * assembleFactor;
        const targetY = cy + (node.y - cy) * assembleFactor;

        ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * particleAlpha})`;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(targetX, targetY);
        ctx.stroke();

        // Node peripheral rings
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 * particleAlpha})`;
        ctx.beginPath();
        ctx.arc(targetX, targetY, 4, 0, Math.PI * 2);
        ctx.stroke();

        // Node glow
        ctx.fillStyle = `rgba(37, 99, 235, ${0.7 * particleAlpha})`;
        ctx.beginPath();
        ctx.arc(targetX, targetY, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Data Stream Packets (Phase 5-8s accelerates)
      if (t >= 2) {
        streamPackets.forEach((p) => {
          p.progress += p.speed * (t >= 5 && t <= 8 ? 1.6 : 1.0);
          if (p.progress > 1) p.progress = 0;

          const node = nodes[p.pathIdx % nodes.length];
          const px = cx + (node.x - cx) * p.progress;
          const py = cy + (node.y - cy) * p.progress;

          ctx.fillStyle = "#38BDF8";
          ctx.shadowColor = "#06B6D4";
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Central Optical Glass Core Module (Isometric Slab)
      ctx.save();
      ctx.translate(cx, cy);

      // Glass Slab Dimensions
      const slabW = 60;
      const slabH = 34;

      // Base shadow
      ctx.fillStyle = "rgba(2, 6, 23, 0.6)";
      ctx.beginPath();
      ctx.ellipse(0, 18, 45, 20, 0, 0, Math.PI * 2);
      ctx.fill();

      // Optical Glass Diamond Facets
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.75 + Math.sin(t * 3) * 0.2})`;
      ctx.lineWidth = 1.6;
      ctx.fillStyle = "rgba(15, 23, 42, 0.75)";

      ctx.beginPath();
      ctx.moveTo(0, -slabH);
      ctx.lineTo(slabW, 0);
      ctx.lineTo(0, slabH);
      ctx.lineTo(-slabW, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Inner Luminous Core
      ctx.fillStyle = `rgba(6, 182, 212, ${0.45 + corePulse * 0.4})`;
      ctx.beginPath();
      ctx.moveTo(0, -slabH * 0.6);
      ctx.lineTo(slabW * 0.6, 0);
      ctx.lineTo(0, slabH * 0.6);
      ctx.lineTo(-slabW * 0.6, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Video Layer (If MP4 file is available) */}
      {hasVideo ? (
        <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden bg-slate-950">
          <video
            ref={videoRef}
            src="/assets/hero-3d-cinematic.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        /* 2. Interactive High-Res 3D Architectural Base + Live Looping Canvas */
        <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden bg-slate-950">
          <Image
            src="/assets/enterprise_3d_architecture.jpg"
            alt="NexoraTech 3D Cinematic Software Engineering Architecture"
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            priority
          />

          {/* Interactive Looping 3D Canvas Layer */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90"
          />

          {/* Soft vignette and contrast gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />
        </div>
      )}

      {/* Top Telemetry Header Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
          <span>3D ARCHITECTURE MESH</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-emerald-400">
          <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>SUB-20MS</span>
        </div>
      </div>

      {/* Bottom Telemetry & 10s Loop Progress Bar */}
      <div className="p-5 bg-slate-950 border-t border-slate-800 text-white relative z-10">
        {/* Seamless 10-Second Looping Progress Indicator */}
        <div className="w-full bg-slate-800/80 h-1 rounded-full overflow-hidden mb-3.5">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-400 transition-all duration-100 ease-linear"
            style={{ width: `${(currentTime / 10) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Enterprise Optical Mesh</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300">
                10s Seamless Loop
              </span>
            </div>
            <div className="text-[11px] text-slate-400">
              Optical Glass &bull; Microservices Core &bull; Zero-Trust TLS
            </div>
          </div>
          <div className="text-right font-mono">
            <div className="text-xs font-bold text-cyan-400">
              {currentTime.toFixed(1)}s / 10.0s
            </div>
            <div className="text-[10px] text-slate-500">Loop Cadence</div>
          </div>
        </div>

        {/* 3 Technical Stage Cards */}
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-3 border-t border-slate-800/80 font-mono">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[9px]">0–2s EMERGE</span>
            Optic Rays
          </div>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[9px]">2–5s ASSEMBLE</span>
            Glass Slabs
          </div>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            <span className="text-slate-500 block text-[9px]">5–10s CONDUITS</span>
            Data Stream
          </div>
        </div>
      </div>
    </div>
  );
};
