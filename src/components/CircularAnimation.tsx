import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";


/**
 * Kept your original dashboardCards (types/content) intact.
 * Positioning logic added below uses measured DOM sizes so cards
 * of varying widths/heights align perfectly with the circular boundary.

 * ROTATING EFFECTS REMOVED as requested.
 */
const dashboardCards = [
  {
    title: "SEO/CRO AVI",
    subtitle: "Sales & Marketing",
    type: "grid",
    metrics: ["37", "16", "3", "3", "19"],

    offsetX: 130,
    offsetY: -20,
  },
  {
    title: "SUPPORT AVI",
    subtitle: "Support Operations",
    type: "metrics",
    value: "17.46K",
    percentage: "69.23%",

    offsetX: 120,
    offsetY: 20,
  },
  {
    title: "LEAD AVI",
    subtitle: "Lead Pipeline Report",
    type: "chart",
    chartData: [20, 35, 45, 60, 75, 85, 65],

    offsetX: 10,
    offsetY: 35,
  },
  {
    title: "CRO AVI",
    subtitle: "Conversion Tracking",
    type: "list",
    value: "7 Steps",

    offsetX: -120,
    offsetY: 15,
  },
  {
    title: "CUSTOMER AVI",
    subtitle: "Customer Experience",
    type: "dashboard",

    offsetX: -140,
    offsetY: -20,
  },
  {
    title: "CX AVI",
    subtitle: "Customer Experience",
    type: "split",
    value: "65",
    percentage: "40%",

    offsetX: -140,
    offsetY: -70,
  },
  {
    title: "IT AVI",
    subtitle: "System Performance",
    type: "line",

    offsetX: -15,
    offsetY: -90,
  },
  {
    title: "HR REQ AVI",
    subtitle: "Recruitment Metrics",
    type: "bar",
    chartData: [10, 25, 35, 45, 55, 40, 30],

    offsetX: 140,
    offsetY: -70
  },
];

export function CircularAnimation() {
  // Container size (keep in sync with w-[700px] h-[700px] below)
  const containerSize = 700;
  const borderWidth = 4; // same as border-4 used for the circle
  const orbitRadius = containerSize / 2 - borderWidth / 2; // outer circle radius in px
  const paddingFromBorder = 6; // tiny gap so cards don't overlap border pixel-perfectly


  // Refs & measured sizes per card
  const refs = useRef([]);
  const [sizes, setSizes] = useState({});

  useEffect(() => {
    // measure helper
    const measure = () => {
      const newSizes = {};
      refs.current.forEach((el, i) => {
        if (el) {
          newSizes[i] = {
            w: el.offsetWidth,
            h: el.offsetHeight,
          };
        }
      });
      setSizes((prev) => {
        // quick equality check to avoid unnecessary updates
        const same =
          Object.keys(prev).length ===
            Object.keys(newSizes).length &&
          Object.keys(newSizes).every(
            (k) =>
              prev[k] &&
              prev[k].w === newSizes[k].w &&
              prev[k].h === newSizes[k].h,
          );
        return same ? prev : newSizes;
      });
    };


    // initial measure
    measure();

    // ResizeObserver to re-measure if card content or images load/change
    const ro = new (window.ResizeObserver ||
      function () {
        return { observe() {}, disconnect() {} };
      })(measure);


    refs.current.forEach((el) => {
      if (el && ro && typeof ro.observe === "function")
        ro.observe(el);
    });


    // re-measure on window resize & on load (images)
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      if (ro && typeof ro.disconnect === "function")
        ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [dashboardCards.length]);


  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Background blur/glow only (no full purple fill) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-purple-500/12 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-40 w-[360px] h-[360px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>


      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* fixed container (keeps layout simple & predictable) */}
          <div
            className="relative mx-auto"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
            }}
          >
            {/* Single purple circular boundary (stroke only) */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: `${borderWidth}px solid rgba(139,92,246,0.85)`, // purple-500-ish
              }}
            />


            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
                  Every department.
                </h2>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
                  One platform.
                </h2>
              </div>
            </div>


            {/* Cards (kept your original markup & sizes) - NO ROTATION */}
            {dashboardCards.map((card, index) => {
              const angle =
                (index / dashboardCards.length) * 2 * Math.PI; // even spacing
              // measured size (fallback to original w-48 h-32)
              const w = sizes[index]?.w || 192; // w-48 -> 192px
              const h = sizes[index]?.h || 128; // h-32 -> 128px


              // support function for axis-aligned rectangle in direction (cos,sin)
              // the required outward offset (so the rectangle outermost point touches the orbit) is:
              // offset = (w/2)*|cos(angle)| + (h/2)*|sin(angle)|
              const halfW = w / 2;
              const halfH = h / 2;
              const offset =
                halfW * Math.abs(Math.cos(angle)) +
                halfH * Math.abs(Math.sin(angle));


              // center distance from center = orbitRadius - offset - padding
              const centerDistance = Math.max(
                0,
                orbitRadius - offset - paddingFromBorder,
              );


              // final coordinates for the CARD CENTER
              const finalX =
                centerDistance * Math.cos(angle) +
                (card.offsetX || 0);
              const finalY =
                centerDistance * Math.sin(angle) +
                (card.offsetY || 0);


              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${finalX}px)`,
                    top: `calc(50% + ${finalY}px)`,
                    transform: "translate(-50%, -50%)",
                  }}

                >
                  {/* Static cards - no rotation animations */}
                  <motion.div
                    ref={(el) => (refs.current[index] = el)}
                    className="w-48 h-32 bg-white rounded-xl shadow-xl p-4 cursor-pointer relative overflow-hidden"
                    whileHover={{
                      scale: 1.06,
                      transition: { duration: 0.18 },
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-xs">
                          🤖
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-gray-800 leading-tight">
                          {card.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {card.subtitle}
                        </div>
                      </div>
                    </div>


                    {/* Content (kept your rendering logic) */}
                    <div className="h-16 flex items-center justify-center">
                      {card.type === "chart" &&
                        card.chartData &&
                        card.chartData.map((hgt, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-blue-400 to-cyan-400 w-2 rounded-sm mx-[1px]"
                            style={{
                              height: `${(hgt / 100) * 48}px`,
                            }}
                          />
                        ))}


                      {card.type === "bar" &&
                        card.chartData &&
                        card.chartData.map((hgt, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-green-400 to-teal-400 w-3 rounded-sm mx-[1px]"
                            style={{
                              height: `${(hgt / 60) * 48}px`,
                            }}
                          />
                        ))}


                      {card.type === "line" && (
                        <svg
                          className="w-full h-12"
                          viewBox="0 0 80 30"
                        >
                          <path
                            d="M5 20 L15 15 L25 18 L35 12 L45 8 L55 14 L65 10 L75 6"
                            stroke="url(#lineGradient)"
                            strokeWidth="2"
                            fill="none"
                          />
                          <defs>
                            <linearGradient
                              id="lineGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#8B5CF6"
                              />
                              <stop
                                offset="100%"
                                stopColor="#06B6D4"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}


                      {card.type === "metrics" && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-800 mb-1">
                            {card.value}
                          </div>
                          <div className="text-sm text-green-500 font-medium">
                            {card.percentage}
                          </div>
                        </div>
                      )}


                      {card.type === "split" && (
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-xl font-bold text-gray-800">
                              {card.value}
                            </div>
                            <div className="text-xs text-gray-500">
                              Total
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-500">
                              {card.percentage}
                            </div>
                            <div className="text-xs text-gray-500">
                              Success
                            </div>
                          </div>
                        </div>
                      )}


                      {card.type === "grid" &&
                        card.metrics &&
                        card.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="text-center mx-1"
                          >
                            <div className="text-sm font-bold text-gray-800">
                              {metric}
                            </div>
                            <div className="w-4 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto mt-1"></div>
                          </div>
                        ))}


                      {card.type === "list" && (
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800 mb-1">
                            {card.value}
                          </div>
                          <div className="flex justify-center space-x-1">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}


                      {card.type === "dashboard" && (
                        <div className="w-full">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs text-gray-600">
                              Active
                            </div>
                            <div className="text-xs font-bold text-gray-800">
                              ⚡ 24/7
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-1">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-sm"
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}