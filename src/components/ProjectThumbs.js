
const Frame = ({ title, bg = "#111827", children }) => (
  <svg viewBox="0 0 320 180" className="projectThumb" role="img" aria-label={title}>
    <defs>
      <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity=".09" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity=".015" />
      </linearGradient>
    </defs>
    <rect width="320" height="180" fill={bg} />
    {children}
  </svg>
);

export function TodoThumb() {
  return (
    <Frame title="To-do app preview" bg="#172b4d">
      <rect x="65" y="18" width="190" height="144" rx="12" fill="#fff" />
      <text x="84" y="43" fill="#172b4d" fontSize="13" fontWeight="700">My Tasks</text>
      {[0, 1, 2, 3].map((n) => (
        <g key={n}>
          <rect x="83" y={57 + n * 25} width="15" height="15" rx="4"
            fill={n < 2 ? "#16a085" : "#e8edf4"} />
          {n < 2 && <path d={`M87 ${64+n*25} l4 4 l6 -7`} fill="none" stroke="#fff" strokeWidth="2" />}
          <rect x="107" y={61 + n * 25} width={n === 2 ? 82 : 112} height="6" rx="3"
            fill="#8a99ae" opacity={n < 2 ? ".45" : ".9"} />
          {n < 2 && <path d={`M107 ${68+n*25} h70`} stroke="#c5ceda" />}
        </g>
      ))}
      <circle cx="239" cy="132" r="17" fill="#16a085" />
      <path d="M239 123 v18 M230 132 h18" stroke="#fff" strokeWidth="3" />
    </Frame>
  );
}

export function WeatherThumb() {
  return (
    <Frame title="Weather app preview" bg="#173b68">
      <circle cx="224" cy="52" r="23" fill="#ffd166" className="thumbFloat" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line key={angle}
          x1={224 + Math.cos(angle * Math.PI / 180) * 31}
          y1={52 + Math.sin(angle * Math.PI / 180) * 31}
          x2={224 + Math.cos(angle * Math.PI / 180) * 39}
          y2={52 + Math.sin(angle * Math.PI / 180) * 39}
          stroke="#ffd166" strokeWidth="3" strokeLinecap="round" />
      ))}
      <path d="M85 100 Q85 79 108 81 Q121 51 147 68 Q166 67 172 91 Q195 91 194 109 H89 Q76 109 85 100Z" fill="#d9edff" />
      <text x="34" y="37" fill="#fff" fontSize="11" opacity=".8">CURRENT WEATHER</text>
      <text x="34" y="70" fill="#fff" fontSize="29" fontWeight="700">24°</text>
      <text x="34" y="145" fill="#b7d9ff" fontSize="12">Partly cloudy</text>
      <path d="M35 158 H285" stroke="#ffffff" strokeOpacity=".2" />
      {[0, 1, 2, 3, 4].map((n) => (
        <circle key={n} cx={48 + n * 54} cy="168" r="3" fill="#8bc6ff" />
      ))}
    </Frame>
  );
}

export function MemoryThumb() {
  const cards = [
    { x: 81, y: 28, c: "#9b8afb", symbol: "✦" },
    { x: 134, y: 28, c: "#4fd1c5", symbol: "●" },
    { x: 187, y: 28, c: "#ff9f68", symbol: "▲" },
    { x: 81, y: 91, c: "#4fd1c5", symbol: "●" },
    { x: 134, y: 91, c: "#9b8afb", symbol: "✦" },
    { x: 187, y: 91, c: "#334155", symbol: "?" },
  ];
  return (
    <Frame title="Memory game preview" bg="#17152e">
      {cards.map((card, i) => (
        <g key={i} className={i === 0 || i === 4 ? "thumbFloat" : ""}>
          <rect x={card.x} y={card.y} width="43" height="53" rx="7"
            fill={i === 5 ? "#25233f" : card.c} opacity={i === 5 ? "1" : ".95"} />
          <text x={card.x + 21.5} y={card.y + 33} textAnchor="middle"
            fontSize="21" fontWeight="700" fill="#fff">{card.symbol}</text>
        </g>
      ))}
      <text x="160" y="166" fill="#c4b5fd" fontSize="10" textAnchor="middle" letterSpacing="2">MATCH THE PAIRS</text>
    </Frame>
  );
}

export function PortfolioThumb() {
  return (
    <Frame title="Portfolio website preview" bg="#10131c">
      <rect x="36" y="20" width="248" height="140" rx="9" fill="#191e2b" stroke="#394257" />
      <circle cx="49" cy="31" r="3" fill="#f87171" />
      <circle cx="59" cy="31" r="3" fill="#fbbf24" />
      <circle cx="69" cy="31" r="3" fill="#4ade80" />
      <path d="M36 42 H284" stroke="#394257" />
      <text x="52" y="61" fill="#a5b4fc" fontSize="8">PORTFOLIO / HOME</text>
      <text x="52" y="88" fill="#fff" fontSize="23" fontWeight="700">Hello, I'm</text>
      <text x="52" y="113" fill="#8b9fff" fontSize="23" fontWeight="700">a developer.</text>
      <rect x="52" y="126" width="73" height="17" rx="5" fill="#7c83fd" />
      <text x="61" y="137" fill="#fff" fontSize="7">View projects ↗</text>
      <circle cx="239" cy="94" r="25" fill="#7c83fd" opacity=".15" />
      <circle cx="239" cy="84" r="10" fill="#b5bcff" />
      <path d="M220 111 Q222 91 239 94 Q256 91 258 111Z" fill="#818cf8" />
    </Frame>
  );
}

export function RestaurantThumb() {
  return (
    <Frame title="Restaurant website preview" bg="#2b211b">
      <rect x="18" y="16" width="284" height="148" rx="8" fill="#3c2b20" />
      <circle cx="248" cy="50" r="47" fill="#c47a42" opacity=".15" />
      <circle cx="248" cy="50" r="32" fill="#e2b777" />
      <circle cx="248" cy="50" r="25" fill="#f5e7ce" />
      <circle cx="248" cy="50" r="18" fill="#58734a" />
      <circle cx="243" cy="46" r="8" fill="#bd6543" />
      <circle cx="256" cy="55" r="6" fill="#e4b95a" />
      <text x="35" y="38" fill="#e8c79d" fontSize="9" letterSpacing="2">THE KITCHEN</text>
      <text x="35" y="71" fill="#fff3df" fontSize="24" fontWeight="700">Good food.</text>
      <text x="35" y="97" fill="#fff3df" fontSize="24" fontWeight="700">Good company.</text>
      <rect x="35" y="115" width="93" height="24" rx="4" fill="#bd8050" />
      <text x="47" y="130" fill="#fff" fontSize="9">Explore menu ↗</text>
      <path d="M35 151 H284" stroke="#8f6a4a" />
    </Frame>
  );
}

export function PlanetThumb() {
  const stars = [[25, 25], [67, 55], [286, 30], [278, 139], [42, 145], [194, 24], [206, 153], [88, 120], [293, 78]];
  return (
    <Frame title="3D planet viewer preview" bg="#080d20">
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1}
          fill="#dbeafe" opacity=".8" />
      ))}
      <ellipse cx="158" cy="91" rx="92" ry="27" fill="none" stroke="#818cf8"
        strokeWidth="1.5" opacity=".6" transform="rotate(-20 158 91)" />
      <circle cx="158" cy="91" r="48" fill="#244f91" />
      <circle cx="158" cy="91" r="48" fill="#63b3ed" opacity=".14" />
      <path d="M122 63 Q145 48 155 70 L144 82 L153 97 L135 107 L124 94 L111 83Z"
        fill="#57b879" />
      <path d="M165 53 L190 65 L183 80 L202 91 L186 112 L171 104 L160 83Z"
        fill="#57b879" />
      <path d="M112 109 Q151 143 193 111" fill="none" stroke="#9bd4ff" strokeWidth="5" opacity=".4" />
      <circle cx="235" cy="94" r="7" fill="#e7bd79" />
      <text x="19" y="171" fill="#9ab8ff" fontSize="9" letterSpacing="2">EXPLORE THE SOLAR SYSTEM</text>
    </Frame>
  );
}

export function ImageGeneratorThumb() {
  return (
    <Frame title="AI image generator preview" bg="#201638">
      <rect x="22" y="18" width="276" height="144" rx="10" fill="#2d2048" stroke="#574078" />
      <rect x="34" y="30" width="113" height="120" rx="6" fill="#44315f" />
      <circle cx="100" cy="62" r="18" fill="#f8c978" />
      <path d="M40 128 L75 82 L94 103 L114 74 L141 128Z" fill="#8d79d6" />
      <path d="M40 138 L84 105 L105 120 L125 95 L141 126 V150 H40Z" fill="#55a8a4" />
      <circle cx="127" cy="43" r="2" fill="#fff" />
      <circle cx="57" cy="53" r="2" fill="#fff" />
      <text x="160" y="46" fill="#d8b4fe" fontSize="9" letterSpacing="1">AI STUDIO</text>
      <text x="160" y="65" fill="#fff" fontSize="13" fontWeight="700">Imagine it.</text>
      <text x="160" y="81" fill="#fff" fontSize="13" fontWeight="700">Generate it.</text>
      <rect x="159" y="94" width="124" height="26" rx="5" fill="#3e305a" stroke="#7960a4" />
      <text x="167" y="110" fill="#c7b6dc" fontSize="8">A world beyond...</text>
      <rect x="159" y="128" width="80" height="15" rx="4" fill="#b38af3" />
      <text x="171" y="138" fill="#201638" fontSize="8" fontWeight="700">Generate ✦</text>
    </Frame>
  );
}
