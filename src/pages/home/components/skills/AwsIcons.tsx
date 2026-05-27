import { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

const sz = (style?: React.CSSProperties) => (style?.fontSize as string | number) ?? '1.6rem';

const base = (style?: React.CSSProperties) => ({
  display: 'inline-block' as const,
  ...style,
});

export function AwsS3({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          points="21.54 23.23 16.08 25.96 16.08 73.93 21.54 76.66 34.94 49.94 21.54 23.23"
          fill="#8c3123"
        />
        <polygon
          points="50 69.76 21.54 76.65 21.54 23.23 50 30.12 63.45 50.02 50 69.76"
          fill="#e05243"
        />
        <polygon
          points="50 69.76 78.45 76.65 83.37 50.62 78.45 23.23 50 30.12 50 69.76"
          fill="#8c3123"
        />
        <polygon
          points="78.45 23.23 83.92 25.96 83.92 73.93 78.45 76.66 78.45 23.23"
          fill="#e05243"
        />
        <polygon
          points="37.59 58.78 50 60.37 59.84 50.02 50 39.68 37.59 41.24 37.59 58.78"
          fill="#8c3123"
        />
        <polygon points="62.41 32.75 50 35.01 37.59 32.75 50 9 62.41 32.75" fill="#5e1f18" />
        <polygon points="62.41 67.25 50 64.97 37.59 67.25 50 91 62.41 67.25" fill="#f2b0a9" />
        <polygon points="62.41 32.75 50 29.68 50 9 62.41 15.2 62.41 32.75" fill="#e05243" />
        <polygon points="37.59 32.75 50 29.68 50 9 37.59 15.2 37.59 32.75" fill="#8c3123" />
        <polygon points="50 91 62.41 84.8 62.41 67.25 50 70.32 50 91" fill="#e05243" />
        <polygon points="50 91 37.59 84.8 37.59 67.25 50 70.32 50 91" fill="#8c3123" />
        <polygon points="62.41 58.78 50 60.37 50 39.68 62.41 41.24 62.41 58.78" fill="#e05243" />
      </g>
    </svg>
  );
}

export function AwsLambda({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          style={{ fill: '#9d5025' }}
          points="15.91 74.12 20.25 76.29 27.92 50.04 20.25 23.71 15.91 25.88 15.91 74.12"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="28.65 25.71 20.25 23.74 20.25 76.29 28.65 74.32 28.65 25.71"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="25.47 21.1 31.84 17.91 39.79 50.04 31.84 82.09 25.47 78.9 25.47 21.1"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="44.89 77.81 31.84 81.97 31.84 17.91 44.89 22.08 44.89 77.81"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="74.52 29.17 79.74 29.17 79.74 69.12 74.52 68.83 74.52 29.17"
        />
        <polygon
          style={{ fill: '#6b3a19' }}
          points="54.27 29.75 60.13 26.73 79.33 29.17 79.9 34.28 74.64 35.02 54.27 29.75"
        />
        <polygon
          style={{ fill: '#fbbf93' }}
          points="54.44 70.25 60.29 73.27 80.06 65.71 74.81 64.98 54.44 70.25"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="55.92 61.77 66.37 63.17 66.37 36.83 55.92 38.22 55.92 61.77"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="39.79 86.06 49.99 91.16 58.75 49.94 49.99 8.84 39.79 13.94 39.79 86.06"
        />
        <path
          style={{ fill: '#f58536' }}
          d="M50,8.84V91.16l34.1-17.05V25.89ZM79.74,65.77,60.19,71.64V28.36l19.54,5.86Z"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="66.37 36.83 66.37 63.25 77.24 50.04 66.37 36.83"
        />
      </g>
    </svg>
  );
}

export function AwsECS({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          style={{ fill: '#9d5025' }}
          points="19.64 22.51 16 24.32 16 75.68 19.64 77.49 33.98 51.07 19.64 22.51"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="30.72 31.78 36.08 24.19 60.1 34.87 54.5 35.76 30.72 31.78"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="26.56 68.77 32.46 76.88 60.1 64.95 54.76 64.12 26.56 68.77"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="28.12 75.5 19.64 77.49 19.64 22.51 28.12 24.44 28.12 75.5"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="23.66 20.5 28.12 18.27 36.52 53.56 28.12 81.73 23.66 79.5 23.66 20.5"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="54.46 64.08 60.1 64.95 65.26 50.58 60.1 34.87 54.46 35.76 54.46 64.08"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="36.8 79.28 28.12 81.73 28.12 18.27 36.8 20.73 36.8 79.28"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="66.01 63.84 28.12 70.88 28.12 81.73 66.01 71.03 66.01 63.84"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="66.08 36 28.12 28.79 28.12 18.27 66.08 29.04 66.08 36"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="60.1 27.34 66.19 29.02 66.19 71.03 60.1 72.7 60.1 27.34"
        />
        <polygon
          style={{ fill: '#6b3a19' }}
          points="84 44.45 67.7 45.22 61.94 44.83 78.42 31.55 84 44.45"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="61.94 44.83 78.42 43.9 78.42 31.55 61.94 34.22 61.94 44.83"
        />
        <polygon
          style={{ fill: '#6b3a19' }}
          points="46.43 43.79 63.13 26.96 71.62 43.22 54.31 44.32 46.43 43.79"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="46.43 43.79 63.13 42.37 63.13 26.96 46.43 30.87 46.43 43.79"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="61.94 55.39 84 55.77 78.42 68.67 61.94 66 61.94 55.39"
        />
        <polygon
          style={{ fill: '#9d5025' }}
          points="46.43 56.43 71.62 57.01 63.13 73.26 46.43 69.36 46.43 56.43"
        />
        <polygon
          style={{ fill: '#fbbf93' }}
          points="46.43 56.43 63.13 57.86 71.62 57.01 54.31 55.9 46.43 56.43"
        />
        <polygon
          style={{ fill: '#fbbf93' }}
          points="84 55.77 67.7 55.01 61.94 55.39 78.42 56.33 84 55.77"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="78.42 43.9 84 44.45 84 33.22 78.42 31.55 78.42 43.9"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="71.62 43.22 63.13 42.37 63.13 26.96 71.62 29.51 71.62 43.22"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="78.42 56.33 84 55.77 84 67 78.42 68.67 78.42 56.33"
        />
        <polygon
          style={{ fill: '#f58536' }}
          points="71.62 57.01 63.13 57.86 63.13 73.26 71.62 70.72 71.62 57.01"
        />
      </g>
    </svg>
  );
}

export function AwsWAF({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          style={{ fill: '#b7ca9d' }}
          points="15.9 54.82 21.09 54.61 25.68 55 20.26 74.7 15.9 54.82"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="35.59 70.38 50 74.7 61.69 44.31 50 8.84 35.59 16.04 35.59 70.38"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="64.41 70.38 50 74.7 50 8.84 64.41 16.04 64.41 70.38"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="74.32 64.58 79.74 65.32 79.74 55.26 74.32 55 74.32 64.58"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="25.68 64.58 20.26 65.32 20.26 55.26 25.68 55 25.68 64.58"
        />
        <polygon
          style={{ fill: '#b7ca9d' }}
          points="49.42 64.17 25.68 60 20.26 60.52 48.44 80.56 49.42 64.17"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="79.74 55.26 84.1 54.82 84.1 74.11 79.74 71.03 79.74 55.26"
        />
        <polygon
          style={{ fill: '#b7ca9d' }}
          points="84.1 54.82 78.91 54.61 74.32 55 79.74 55.26 84.1 54.82"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="15.9 59.65 50 66.47 50 91.16 15.9 74.11 15.9 59.65"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="20.26 55.26 15.9 54.82 15.9 74.11 20.26 72.44 20.26 55.26"
        />
        <polygon
          style={{ fill: '#b7ca9d' }}
          points="50 64.3 50 86.63 79.74 60.52 74.33 60.01 50 64.3"
        />
        <polygon
          style={{ fill: '#b7ca9d' }}
          points="60.2 57.21 50 56.42 39.8 57.21 50 91.16 60.2 57.21"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="84.1 59.65 50 66.47 50 91.16 84.1 74.11 84.1 59.65"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="60.2 85.27 50 90.37 50 58.23 60.2 57.21 60.2 85.27"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="39.8 81.56 50 91.16 50 58.23 39.8 57.21 39.8 81.56"
        />
      </g>
    </svg>
  );
}

export function AwsCognito({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          points="37.87 58.58 50 60.06 61.21 50.87 50 39.92 37.87 41.42 37.87 58.58"
          fill="#692f56"
        />
        <polygon
          points="71.41 24.92 78.3 23.17 83.37 44.64 78.3 72.95 71.41 71.94 71.41 24.92"
          fill="#692f56"
        />
        <polygon points="78.3 70.96 83.96 74.02 83.96 26 78.3 23.17 78.3 70.96" fill="#ad688b" />
        <polygon points="71.41 65.11 78.3 66.11 50 91 42.43 72.33 71.41 65.11" fill="#cfb2c1" />
        <polygon
          points="28.59 75.08 21.7 76.83 17.79 27.96 28.59 29.66 28.59 75.08"
          fill="#ad688b"
        />
        <polygon points="28.59 34.89 21.7 33.89 50 9 57.57 27.67 28.59 34.89" fill="#512843" />
        <polygon
          points="57.57 72.33 39.24 67.76 31.92 69.16 50.04 90.22 57.57 72.33"
          fill="#cfb2c1"
        />
        <polygon
          points="42.43 27.67 49.97 9.02 68.08 30.84 60.76 32.24 42.43 27.67"
          fill="#512843"
        />
        <polygon points="62.13 58.58 50 60.06 50 39.92 62.13 41.42 62.13 58.58" fill="#ad688b" />
        <polygon
          points="83.96 74.02 50 91 50 74.6 80.17 65.55 82.22 66.16 83.96 74.02"
          fill="#ad688b"
        />
        <polygon points="31.92 69.16 50 74.59 50 90.98 31.92 81.94 31.92 69.16" fill="#692f56" />
        <polygon points="68.08 30.84 50 25.41 50 9.02 68.08 18.05 68.08 30.84" fill="#ad688b" />
        <polygon points="16.04 25.98 50 9 50 25.4 16.04 35.58 16.04 25.98" fill="#692f56" />
        <polygon points="21.7 29.62 16.04 25.98 16.04 74 21.7 76.83 21.7 29.62" fill="#692f56" />
      </g>
    </svg>
  );
}

export function AwsSES({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <polygon
          points="31.4 21.96 14.7 48.55 31.4 75.14 44.74 71.72 45.4 25.55 31.4 21.96"
          fill="#876929"
        />
        <polygon
          points="50.05 70.36 31.4 75.14 31.4 21.96 50.05 26.74 50.05 70.36"
          fill="#d9a741"
        />
        <polygon
          points="47.83 31.08 50.05 91.16 85.3 73.53 85.29 28.65 76.3 30.14 47.83 31.08"
          fill="#876929"
        />
        <polygon
          points="61.28 42.95 72.28 42.3 83.15 22.58 55.66 8.84 45.4 13.33 61.28 42.95"
          fill="#876929"
        />
        <polygon points="55.66 8.84 83.15 22.58 72.28 42.3 55.66 8.84" fill="#d9a741" />
        <polygon
          points="50.05 14.54 72.28 54.88 76.1 78.13 50.05 91.16 39.5 85.88 39.5 18.76 50.04 14.54 50.05 14.54"
          fill="#876929"
        />
        <polygon
          points="85.29 28.65 85.3 73.53 50.05 91.16 50.05 14.54 72.28 54.88 85.29 28.65"
          fill="#d9a741"
        />
      </g>
    </svg>
  );
}

export function AwsParameterStore({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <path
          style={{ fill: '#4b612c' }}
          d="M60.7,73.13h0a7.85,7.85,0,0,1,6.89-7.47v-34H27.37V76H60.7V73.13Z"
        />
        <path
          style={{ fill: '#759c3e' }}
          d="M60.65,71h0a7.85,7.85,0,0,1,6.94-7.48V29.67H27.37V73.85H60.65V71Z"
        />
        <path
          style={{ fill: '#4b612c' }}
          d="M74.59,77.44V72.82a6.15,6.15,0,0,0-12.21,0v4.63H59.23V87.69H77.66V77.44Zm-3,0H65.33l0-4.63A2.87,2.87,0,0,1,68.49,70a3,3,0,0,1,3.14,2.82Z"
        />
        <path
          style={{ fill: '#759c3e' }}
          d="M74.59,75.28V70.65a6.15,6.15,0,0,0-12.21,0v4.63H59.23V85.53H77.66V75.28Zm-3,0H65.33l0-4.63a2.87,2.87,0,0,1,3.14-2.82,3,3,0,0,1,3.14,2.82Z"
        />
        <polygon
          style={{ fill: '#4b612c' }}
          points="66.69 24.75 66.69 26.89 27.89 26.89 27.89 24.75 47.29 19.51 66.69 24.75"
        />
        <polygon
          style={{ fill: '#759c3e' }}
          points="61.21 19.23 33.78 19.23 27.89 24.75 28.31 24.75 66.69 24.75 61.21 19.23"
        />
        <rect style={{ fill: '#fff' }} x="40.6" y="56.54" width="13.76" height="2.81" />
        <rect style={{ fill: '#fff' }} x="40.6" y="50.15" width="13.76" height="2.81" />
        <rect style={{ fill: '#fff' }} x="40.6" y="43.76" width="13.76" height="2.81" />
        <path
          style={{ fill: '#fff' }}
          d="M35.29,37.37V65.74h24.4V37.37ZM56.88,62.93H38.09V40.18H56.88Z"
        />
      </g>
    </svg>
  );
}

export function AwsSecretsManager({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={sz(style)}
      height={sz(style)}
      style={base(style)}
    >
      <g>
        <rect
          style={{ fill: '#7d7c7c' }}
          x="23.5"
          y="31.28"
          width="53"
          height="39.92"
          rx="6.21"
          ry="6.21"
        />
        <rect
          style={{ fill: '#fff' }}
          x="23.5"
          y="28.8"
          width="53"
          height="39.92"
          rx="6.21"
          ry="6.21"
        />
        <circle style={{ fill: '#759c3e' }} cx="63.25" cy="41.52" r="9.53" />
        <circle style={{ fill: '#fff' }} cx="67.42" cy="41.52" r="2.49" />
        <polygon
          style={{ fill: '#759c3e' }}
          points="60.02 45.57 49 45.57 48 43.84 44.27 44.19 42.84 42.72 41.53 42.43 38.13 44.47 33.91 41.22 36.23 37.48 60.02 37.48 60.02 45.57"
        />
        <circle style={{ fill: '#7d7c7c' }} cx="36.75" cy="56.19" r="9.53" />
        <circle style={{ fill: '#fff' }} cx="32.58" cy="56.19" r="2.49" />
        <polygon
          style={{ fill: '#7d7c7c' }}
          points="39.98 52.14 51 52.14 52 53.88 55.73 53.53 57.16 54.99 58.47 55.28 61.87 53.24 66.09 56.49 63.77 60.24 39.98 60.24 39.98 52.14"
        />
      </g>
    </svg>
  );
}

export function AwsAmplify({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={sz(style)}
      height={sz(style)}
      fill="currentColor"
      style={base(style)}
    >
      <path d="M13 2L4.5 13.5H11L9.5 22 19.5 10H13L13 2z" />
    </svg>
  );
}

export function AwsAppRunner({ style }: P) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={sz(style)}
      height={sz(style)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={base(style)}
    >
      <path d="M21 12a9 9 0 01-9 9 9 9 0 01-6.36-2.64" />
      <path d="M3 12a9 9 0 019-9 9 9 0 016.36 2.64" />
      <path d="M17.5 7l1.5-3.5L22.5 5" />
      <path d="M6.5 17l-1.5 3.5L1.5 19" />
    </svg>
  );
}
