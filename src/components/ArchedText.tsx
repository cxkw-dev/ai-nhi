/**
 * Collegiate arch — the back-print motif.
 *
 * Text is set on a shallow circular arc inside a fixed 1000x300 viewBox, so
 * the whole thing scales with its container instead of with the font size.
 * Geometry is fixed; only the font size adapts to how long the word is.
 */

const R = 900;          // arc radius
const BASE_Y = 268;     // baseline height at the arc's endpoints
const X0 = 30;
const X1 = 970;

// arc length: 2r·asin(chord/2r)
const CHORD = X1 - X0;
const ARC_LEN = 2 * R * Math.asin(CHORD / (2 * R));

const FILL_RATIO = 0.94;                 // how much of the arc the word occupies
const AVG_ADVANCE = 0.7;                 // rough per-glyph width of Archivo Black, in em

export default function ArchedText({
  text,
  fill = 'currentColor',
  id = 'arch',
  style,
  ...rest
}: {
  text: string;
  fill?: string;
  id?: string;
  style?: React.CSSProperties;
} & React.SVGProps<SVGSVGElement>) {
  const span = ARC_LEN * FILL_RATIO;
  const fontSize = Math.min(150, span / (text.length * AVG_ADVANCE));
  const pathId = `${id}-path`;

  return (
    <svg
      viewBox="0 0 1000 300"
      role="img"
      aria-label={text}
      style={{ display: 'block', overflow: 'visible', ...style }}
      {...rest}
    >
      <defs>
        <path id={pathId} fill="none" d={`M ${X0} ${BASE_Y} A ${R} ${R} 0 0 1 ${X1} ${BASE_Y}`} />
      </defs>
      <text
        className="t-arch"
        fill={fill}
        fontSize={fontSize}
        style={{ textTransform: 'uppercase' }}
      >
        <textPath
          href={`#${pathId}`}
          startOffset="50%"
          textAnchor="middle"
          textLength={span}
          lengthAdjust="spacing"
        >
          {text.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}
