"use client";

const orbs = [
  { className: "top-[5%] left-[10%] h-[200px] w-[200px] sm:h-[350px] sm:w-[350px] bg-emerald-500/15", delay: 0 },
  { className: "top-[15%] right-[5%] h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] bg-emerald-400/10", delay: 2 },
  { className: "top-[25%] left-[60%] h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] bg-emerald-500/8", delay: 4 },
  { className: "top-[40%] right-[15%] h-[120px] w-[120px] sm:h-[200px] sm:w-[200px] bg-emerald-400/12", delay: 1 },
  { className: "top-[45%] left-[5%] h-[160px] w-[160px] sm:h-[280px] sm:w-[280px] bg-emerald-500/10", delay: 3 },
  { className: "top-[60%] right-[10%] h-[140px] w-[140px] sm:h-[250px] sm:w-[250px] bg-emerald-500/12", delay: 5 },
  { className: "top-[65%] left-[20%] h-[100px] w-[100px] sm:h-[180px] sm:w-[180px] bg-emerald-400/8", delay: 2 },
  { className: "top-[80%] left-[50%] h-[200px] w-[200px] sm:h-[320px] sm:w-[320px] bg-emerald-500/10", delay: 1 },
  { className: "top-[90%] right-[20%] h-[130px] w-[130px] sm:h-[220px] sm:w-[220px] bg-emerald-400/8", delay: 3 },
];

const particles = [
  { className: "top-[8%] left-[25%]", size: 3, delay: 0 },
  { className: "top-[12%] right-[30%]", size: 2, delay: 1 },
  { className: "top-[30%] left-[15%]", size: 4, delay: 2 },
  { className: "top-[35%] right-[25%]", size: 2, delay: 0.5 },
  { className: "top-[50%] left-[40%]", size: 3, delay: 1.5 },
  { className: "top-[55%] right-[10%]", size: 2, delay: 3 },
  { className: "top-[70%] left-[30%]", size: 3, delay: 2 },
  { className: "top-[75%] right-[35%]", size: 4, delay: 1 },
  { className: "top-[85%] left-[60%]", size: 2, delay: 2.5 },
  { className: "top-[92%] left-[10%]", size: 3, delay: 0 },
];

export default function FloatingObjects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Large floating orbs - pure CSS animations for buttery smoothness */}
      {orbs.map((orb, i) => (
        <div
          key={`orb-${i}`}
          className={`floating-orb ${orb.className} ${i % 2 === 0 ? "animate-float-slow" : "animate-float-medium"}`}
          style={{ animationDelay: `${orb.delay}s` }}
        />
      ))}

      {/* Tiny floating particles - also pure CSS */}
      {particles.map((p, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute rounded-full bg-emerald-500/25 animate-float-particle ${p.className}`}
          style={{
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${6 + i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
