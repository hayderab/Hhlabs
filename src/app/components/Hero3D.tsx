'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Pre-calculate static positions for initial render
const roundToFixed = (num: number) => Number(num.toFixed(2));

const generateStaticNodes = (count: number, centerX: number, centerY: number, radius: number) => {
  return Array(count).fill(0).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      x: roundToFixed(centerX + Math.cos(angle) * radius),
      y: roundToFixed(centerY + Math.sin(angle) * radius)
    };
  });
};

// Static node positions
const staticLayer1 = generateStaticNodes(6, 200, 300, 80);
const staticLayer2 = generateStaticNodes(8, 400, 300, 100);
const staticLayer3 = generateStaticNodes(6, 600, 300, 80);

// Static grid positions
const staticGridVertical = Array(40).fill(0).map((_, i) => ({
  d: `M${roundToFixed(75 + i * 20)},75 L${roundToFixed(75 + i * 20)},525`
}));

const staticGridHorizontal = Array(30).fill(0).map((_, i) => ({
  d: `M75,${roundToFixed(75 + i * 20)} L725,${roundToFixed(75 + i * 20)}`
}));

export default function Hero3D() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([]);

  // Only run animations and generate particles after component mounts
  useEffect(() => {
    setIsClient(true);
    const newParticles = Array(20).fill(0).map(() => ({
      x: roundToFixed(200 + Math.random() * 400),
      y: roundToFixed(200 + Math.random() * 200),
      duration: roundToFixed(2 + Math.random() * 2),
      delay: roundToFixed(Math.random() * 2 + 2.5)
    }));
    setParticles(newParticles);
  }, []);

  // Device frame paths
  const mobileFrame = {
    outer: "M240,180 h120 a15,15 0 0 1 15,15 v210 a15,15 0 0 1 -15,15 h-120 a15,15 0 0 1 -15,-15 v-210 a15,15 0 0 1 15,-15",
    screen: "M247,217 h105 v150 h-105 v-150",
    camera: "M292,195 a7,7 0 1 1 14,0 a7,7 0 1 1 -14,0",
    speaker: "M270,195 h60 a3,3 0 0 1 0,6 h-60 a3,3 0 0 1 0,-6",
    button: "M285,382 h30 a3,3 0 0 1 0,6 h-30 a3,3 0 0 1 0,-6"
  };

  const webFrame = {
    outer: "M420,180 h240 a15,15 0 0 1 15,15 v210 a15,15 0 0 1 -15,15 h-240 a15,15 0 0 1 -15,-15 v-210 a15,15 0 0 1 15,-15",
    topBar: "M427,187 h225 v37 h-225 v-37",
    buttons: [
      "M435,202 a4,4 0 1 1 8,0 a4,4 0 1 1 -8,0",
      "M450,202 a4,4 0 1 1 8,0 a4,4 0 1 1 -8,0",
      "M465,202 a4,4 0 1 1 8,0 a4,4 0 1 1 -8,0"
    ],
    addressBar: "M487,198 h150 a4,4 0 0 1 0,8 h-150 a4,4 0 0 1 0,-8"
  };

  return (
    <div className="relative h-[800px] w-full">
      <motion.svg
        viewBox="0 0 800 600"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Grid */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.5 }}
        >
          {staticGridVertical.map((grid, i) => (
            <path
              key={`grid-${i}`}
              d={grid.d}
              stroke="black"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          ))}
          {staticGridHorizontal.map((grid, i) => (
            <path
              key={`grid-h-${i}`}
              d={grid.d}
              stroke="black"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          ))}
        </motion.g>

        {/* Neural Network Nodes */}
        <motion.g
          animate={isClient ? { opacity: [1, 1, 0] } : { opacity: 1 }}
          transition={{ 
            opacity: { 
              times: [0, 0.7, 1],
              duration: 4
            }
          }}
        >
          {/* Layer 1 Nodes */}
          {staticLayer1.map((node, i) => (
            <motion.circle
              key={`l1-${i}`}
              cx={node.x}
              cy={node.y}
              r="6"
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          ))}

          {/* Layer 2 Nodes */}
          {staticLayer2.map((node, i) => (
            <motion.circle
              key={`l2-${i}`}
              cx={node.x}
              cy={node.y}
              r="6"
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
            />
          ))}

          {/* Layer 3 Nodes */}
          {staticLayer3.map((node, i) => (
            <motion.circle
              key={`l3-${i}`}
              cx={node.x}
              cy={node.y}
              r="6"
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            />
          ))}

          {/* Neural Connections */}
          {staticLayer1.map((node1, i) => 
            staticLayer2.map((node2, j) => (
              <motion.line
                key={`l1-l2-${i}-${j}`}
                x1={node1.x}
                y1={node1.y}
                x2={node2.x}
                y2={node2.y}
                stroke="black"
                strokeWidth="0.75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isClient ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            ))
          )}

          {staticLayer2.map((node1, i) =>
            staticLayer3.map((node2, j) => (
              <motion.line
                key={`l2-l3-${i}-${j}`}
                x1={node1.x}
                y1={node1.y}
                x2={node2.x}
                y2={node2.y}
                stroke="black"
                strokeWidth="0.75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isClient ? { pathLength: 1, opacity: 0.2 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
            ))
          )}
        </motion.g>

        {/* Device Frames */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isClient ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {/* Mobile Frame */}
          <motion.g>
            <motion.path
              d={mobileFrame.outer}
              fill="none"
              stroke="black"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isClient ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
            
            <motion.path
              d={mobileFrame.screen}
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isClient ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            />

            <motion.path
              d={mobileFrame.camera}
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 3.2 }}
            />

            <motion.path
              d={mobileFrame.speaker}
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 3.3 }}
            />

            <motion.path
              d={mobileFrame.button}
              fill="black"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 3.4 }}
            />

            <motion.g
              initial={{ opacity: 0 }}
              animate={isClient ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              <rect x="255" y="225" width="90" height="15" rx="3" fill="black" opacity="0.2" />
              <rect x="255" y="247" width="90" height="60" rx="3" fill="black" opacity="0.1" />
              <rect x="255" y="315" width="90" height="45" rx="3" fill="black" opacity="0.1" />
            </motion.g>
          </motion.g>

          {/* Web Frame */}
          <motion.g>
            <motion.path
              d={webFrame.outer}
              fill="none"
              stroke="black"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isClient ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            />

            <motion.path
              d={webFrame.topBar}
              fill="black"
              fillOpacity="0.05"
              stroke="black"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={isClient ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            />

            {webFrame.buttons.map((button, i) => (
              <motion.path
                key={`button-${i}`}
                d={button}
                fill="black"
                initial={{ scale: 0 }}
                animate={isClient ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 3.2 + i * 0.1 }}
              />
            ))}

            <motion.path
              d={webFrame.addressBar}
              fill="black"
              fillOpacity="0.1"
              initial={{ scale: 0 }}
              animate={isClient ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 3.5 }}
            />

            <motion.g
              initial={{ opacity: 0 }}
              animate={isClient ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 3.7, duration: 0.5 }}
            >
              <rect x="427" y="232" width="225" height="22" rx="3" fill="black" opacity="0.2" />
              <rect x="427" y="262" width="225" height="60" rx="3" fill="black" opacity="0.1" />
              <rect x="427" y="330" width="225" height="60" rx="3" fill="black" opacity="0.1" />
            </motion.g>
          </motion.g>
        </motion.g>

        {/* Floating Particles - Only render on client side */}
        {isClient && particles.map((particle, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={particle.x}
            cy={particle.y}
            r="1.5"
            fill="black"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [-8, 8],
              x: [-5, 5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}

        {/* Data Flow Lines - Only animate on client side */}
        {isClient && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              opacity: { 
                times: [0, 0.2, 0.8, 1],
                duration: 4,
                delay: 1.5
              }
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`flow-${i}`}
                r="3"
                fill="black"
                initial={{ 
                  opacity: 0,
                  cx: 200,
                  cy: 300
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  cx: [200, 600],
                  cy: [300, 300]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "linear"
                }}
              />
            ))}
          </motion.g>
        )}
      </motion.svg>
    </div>
  );
}
