import logo from './logo.svg';
import './App.css';
import Students from './Students.svg';

function App() {
  return (
    <div className="h-screen min-w-screen  px-6 lg:grid lg:grid-cols-2 flex-auto flex-col items-center justify-center content-center ">
     <div className='lg:h-screen w-full  text-center lg:text-9xl text-7xl mx-auto items-center justify-center content-center'>
       <div className="flex lg:h-screen  lg:mt-0 mt-24 flex-col items-center justify-center gap-8 lg:px-40 px-18">
       <div>
       <text class='font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600 via-pink-500 to-yellow-500'>
         Bulletin 
       </text>
       <br/>
       <text class='font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600 via-pink-500 to-yellow-500'>
       Buddy
       </text>
       </div>
       <div className="text-2xl text-white sm:mb-14">
       Online digital bullentin board to get involved on campus and meet classmates.
       </div>
       </div>
     </div>
     <div className='lg:h-screen w-full text-center text-8xl mx-auto items-center justify-center content-center'>
       <div className="flex lg:h-screen flex-col items-center justify-center gap-8 px-40 ">
         <div className="lg:grid lg:grid-rows-2 flex flex-col flex-wrap gap-8 items-center justify-center">
           <div className = "lg:grid lg:grid-cols-2 lg:gap-8  ">
           <div className="row-start-1 col-start-1 ">
           <svg className="w-72 h-72 transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-500" viewBox="0 0 280 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M0 38.2788V221.938C0 225.286 3.33296 228 7.44451 228H272.556C276.668 228 280.001 225.286 280.001 221.938V38.2788L131.206 33.6913L0 38.2788Z" fill="#FAE8FF"/>
<path d="M280 38.1627H0V6.06196C0 2.71398 3.33296 0 7.44451 0H272.556C276.667 0 280 2.71398 280 6.06196V38.1627Z" fill="#701A75"/>
<path d="M263.099 38.2788V221.938C263.099 225.286 259.766 228 255.654 228H272.555C276.667 228 280 225.286 280 221.938V38.2788L271.549 33.6913L263.099 38.2788Z" fill="#E879F9"/>
<path d="M272.555 0H255.654C259.766 0 263.099 2.71398 263.099 6.06196V38.1632H280V6.06196C280 2.71398 276.667 0 272.555 0V0Z" fill="#A21CAF"/>
<path d="M207.67 228V172.452C207.67 170.602 209.512 169.103 211.783 169.103H280L207.67 228Z" fill="#701A75"/>
<path d="M263.099 182.865L280 169.103H263.099V182.865Z" fill="#A21CAF"/>
<path d="M65.9611 94.21C64.4211 94.21 63.0411 93.96 61.8211 93.46C60.6011 92.96 59.6211 92.22 58.8811 91.24C58.1611 90.26 57.7811 89.08 57.7411 87.7H63.2011C63.2811 88.48 63.5511 89.08 64.0111 89.5C64.4711 89.9 65.0711 90.1 65.8111 90.1C66.5711 90.1 67.1711 89.93 67.6111 89.59C68.0511 89.23 68.2711 88.74 68.2711 88.12C68.2711 87.6 68.0911 87.17 67.7311 86.83C67.3911 86.49 66.9611 86.21 66.4411 85.99C65.9411 85.77 65.2211 85.52 64.2811 85.24C62.9211 84.82 61.8111 84.4 60.9511 83.98C60.0911 83.56 59.3511 82.94 58.7311 82.12C58.1111 81.3 57.8011 80.23 57.8011 78.91C57.8011 76.95 58.5111 75.42 59.9311 74.32C61.3511 73.2 63.2011 72.64 65.4811 72.64C67.8011 72.64 69.6711 73.2 71.0911 74.32C72.5111 75.42 73.2711 76.96 73.3711 78.94H67.8211C67.7811 78.26 67.5311 77.73 67.0711 77.35C66.6111 76.95 66.0211 76.75 65.3011 76.75C64.6811 76.75 64.1811 76.92 63.8011 77.26C63.4211 77.58 63.2311 78.05 63.2311 78.67C63.2311 79.35 63.5511 79.88 64.1911 80.26C64.8311 80.64 65.8311 81.05 67.1911 81.49C68.5511 81.95 69.6511 82.39 70.4911 82.81C71.3511 83.23 72.0911 83.84 72.7111 84.64C73.3311 85.44 73.6411 86.47 73.6411 87.73C73.6411 88.93 73.3311 90.02 72.7111 91C72.1111 91.98 71.2311 92.76 70.0711 93.34C68.9111 93.92 67.5411 94.21 65.9611 94.21ZM85.5281 89.65V94H82.9181C81.0581 94 79.6081 93.55 78.5681 92.65C77.5281 91.73 77.0081 90.24 77.0081 88.18V81.52H74.9681V77.26H77.0081V73.18H82.1381V77.26H85.4981V81.52H82.1381V88.24C82.1381 88.74 82.2581 89.1 82.4981 89.32C82.7381 89.54 83.1381 89.65 83.6981 89.65H85.5281ZM104.316 77.26V94H99.1856V91.72C98.6656 92.46 97.9556 93.06 97.0556 93.52C96.1756 93.96 95.1956 94.18 94.1156 94.18C92.8356 94.18 91.7056 93.9 90.7256 93.34C89.7456 92.76 88.9856 91.93 88.4456 90.85C87.9056 89.77 87.6356 88.5 87.6356 87.04V77.26H92.7356V86.35C92.7356 87.47 93.0256 88.34 93.6056 88.96C94.1856 89.58 94.9656 89.89 95.9456 89.89C96.9456 89.89 97.7356 89.58 98.3156 88.96C98.8956 88.34 99.1856 87.47 99.1856 86.35V77.26H104.316ZM106.38 85.6C106.38 83.88 106.7 82.37 107.34 81.07C108 79.77 108.89 78.77 110.01 78.07C111.13 77.37 112.38 77.02 113.76 77.02C114.86 77.02 115.86 77.25 116.76 77.71C117.68 78.17 118.4 78.79 118.92 79.57V71.8H124.05V94H118.92V91.6C118.44 92.4 117.75 93.04 116.85 93.52C115.97 94 114.94 94.24 113.76 94.24C112.38 94.24 111.13 93.89 110.01 93.19C108.89 92.47 108 91.46 107.34 90.16C106.7 88.84 106.38 87.32 106.38 85.6ZM118.92 85.63C118.92 84.35 118.56 83.34 117.84 82.6C117.14 81.86 116.28 81.49 115.26 81.49C114.24 81.49 113.37 81.86 112.65 82.6C111.95 83.32 111.6 84.32 111.6 85.6C111.6 86.88 111.95 87.9 112.65 88.66C113.37 89.4 114.24 89.77 115.26 89.77C116.28 89.77 117.14 89.4 117.84 88.66C118.56 87.92 118.92 86.91 118.92 85.63ZM142.942 85.36C142.942 85.84 142.912 86.34 142.852 86.86H131.242C131.322 87.9 131.652 88.7 132.232 89.26C132.832 89.8 133.562 90.07 134.422 90.07C135.702 90.07 136.592 89.53 137.092 88.45H142.552C142.272 89.55 141.762 90.54 141.022 91.42C140.302 92.3 139.392 92.99 138.292 93.49C137.192 93.99 135.962 94.24 134.602 94.24C132.962 94.24 131.502 93.89 130.222 93.19C128.942 92.49 127.942 91.49 127.222 90.19C126.502 88.89 126.142 87.37 126.142 85.63C126.142 83.89 126.492 82.37 127.192 81.07C127.912 79.77 128.912 78.77 130.192 78.07C131.472 77.37 132.942 77.02 134.602 77.02C136.222 77.02 137.662 77.36 138.922 78.04C140.182 78.72 141.162 79.69 141.862 80.95C142.582 82.21 142.942 83.68 142.942 85.36ZM137.692 84.01C137.692 83.13 137.392 82.43 136.792 81.91C136.192 81.39 135.442 81.13 134.542 81.13C133.682 81.13 132.952 81.38 132.352 81.88C131.772 82.38 131.412 83.09 131.272 84.01H137.692ZM155.248 77.08C157.208 77.08 158.768 77.72 159.928 79C161.108 80.26 161.698 82 161.698 84.22V94H156.598V84.91C156.598 83.79 156.308 82.92 155.728 82.3C155.148 81.68 154.368 81.37 153.388 81.37C152.408 81.37 151.628 81.68 151.048 82.3C150.468 82.92 150.178 83.79 150.178 84.91V94H145.048V77.26H150.178V79.48C150.698 78.74 151.398 78.16 152.278 77.74C153.158 77.3 154.148 77.08 155.248 77.08ZM173.993 89.65V94H171.383C169.523 94 168.073 93.55 167.033 92.65C165.993 91.73 165.473 90.24 165.473 88.18V81.52H163.433V77.26H165.473V73.18H170.603V77.26H173.963V81.52H170.603V88.24C170.603 88.74 170.723 89.1 170.963 89.32C171.203 89.54 171.603 89.65 172.163 89.65H173.993ZM183.06 94.24C181.6 94.24 180.3 93.99 179.16 93.49C178.02 92.99 177.12 92.31 176.46 91.45C175.8 90.57 175.43 89.59 175.35 88.51H180.42C180.48 89.09 180.75 89.56 181.23 89.92C181.71 90.28 182.3 90.46 183 90.46C183.64 90.46 184.13 90.34 184.47 90.1C184.83 89.84 185.01 89.51 185.01 89.11C185.01 88.63 184.76 88.28 184.26 88.06C183.76 87.82 182.95 87.56 181.83 87.28C180.63 87 179.63 86.71 178.83 86.41C178.03 86.09 177.34 85.6 176.76 84.94C176.18 84.26 175.89 83.35 175.89 82.21C175.89 81.25 176.15 80.38 176.67 79.6C177.21 78.8 177.99 78.17 179.01 77.71C180.05 77.25 181.28 77.02 182.7 77.02C184.8 77.02 186.45 77.54 187.65 78.58C188.87 79.62 189.57 81 189.75 82.72H185.01C184.93 82.14 184.67 81.68 184.23 81.34C183.81 81 183.25 80.83 182.55 80.83C181.95 80.83 181.49 80.95 181.17 81.19C180.85 81.41 180.69 81.72 180.69 82.12C180.69 82.6 180.94 82.96 181.44 83.2C181.96 83.44 182.76 83.68 183.84 83.92C185.08 84.24 186.09 84.56 186.87 84.88C187.65 85.18 188.33 85.68 188.91 86.38C189.51 87.06 189.82 87.98 189.84 89.14C189.84 90.12 189.56 91 189 91.78C188.46 92.54 187.67 93.14 186.63 93.58C185.61 94.02 184.42 94.24 183.06 94.24Z" fill="#A21CAF"/>
<path d="M166 168.141V117.609C166 115.609 163.97 114 161.446 114H99.2143C89.1585 114 81 120.467 81 128.438V176.562C81 184.533 89.1585 191 99.2143 191H161.446C163.97 191 166 189.391 166 187.391V184.984C166 183.856 165.336 182.834 164.311 182.172C163.515 179.856 163.515 173.254 164.311 170.938C165.336 170.291 166 169.269 166 168.141ZM105.286 134.152C105.286 133.656 105.798 133.25 106.424 133.25H146.647C147.273 133.25 147.786 133.656 147.786 134.152V137.16C147.786 137.656 147.273 138.062 146.647 138.062H106.424C105.798 138.062 105.286 137.656 105.286 137.16V134.152ZM105.286 143.777C105.286 143.281 105.798 142.875 106.424 142.875H146.647C147.273 142.875 147.786 143.281 147.786 143.777V146.785C147.786 147.281 147.273 147.688 146.647 147.688H106.424C105.798 147.688 105.286 147.281 105.286 146.785V143.777ZM153.364 181.375H99.2143C95.856 181.375 93.1429 179.224 93.1429 176.562C93.1429 173.916 95.875 171.75 99.2143 171.75H153.364C153.003 174.322 153.003 178.803 153.364 181.375Z" fill="#701A75"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="280" height="228" fill="white"/>
</clipPath>
</defs>
</svg>

           </div>
           <div className="row-start-1 col-start-2 ">
           <svg className="w-72 h-72 transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-500" viewBox="0 0 280 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M0 38.2788V221.938C0 225.286 3.33296 228 7.44451 228H272.556C276.668 228 280.001 225.286 280.001 221.938V38.2788L131.206 33.6913L0 38.2788Z" fill="#FCE7F3"/>
<path d="M280 38.1627H0V6.06196C0 2.71398 3.33296 0 7.44451 0H272.556C276.667 0 280 2.71398 280 6.06196V38.1627Z" fill="#DB2777"/>
<path d="M263.099 38.2788V221.938C263.099 225.286 259.766 228 255.654 228H272.555C276.667 228 280 225.286 280 221.938V38.2788L271.549 33.6913L263.099 38.2788Z" fill="#F472B6"/>
<path d="M272.555 0H255.654C259.766 0 263.099 2.71398 263.099 6.06196V38.1632H280V6.06196C280 2.71398 276.667 0 272.555 0V0Z" fill="#BE185D"/>
<path d="M207.67 228V172.452C207.67 170.602 209.512 169.103 211.783 169.103H280L207.67 228Z" fill="#DB2777"/>
<path d="M263.099 182.865L280 169.103H263.099V182.865Z" fill="#BE185D"/>
<path d="M38.1573 96.21C36.1773 96.21 34.3573 95.75 32.6973 94.83C31.0573 93.91 29.7473 92.63 28.7673 90.99C27.8073 89.33 27.3273 87.47 27.3273 85.41C27.3273 83.35 27.8073 81.5 28.7673 79.86C29.7473 78.22 31.0573 76.94 32.6973 76.02C34.3573 75.1 36.1773 74.64 38.1573 74.64C40.1373 74.64 41.9473 75.1 43.5873 76.02C45.2473 76.94 46.5473 78.22 47.4873 79.86C48.4473 81.5 48.9273 83.35 48.9273 85.41C48.9273 87.47 48.4473 89.33 47.4873 90.99C46.5273 92.63 45.2273 93.91 43.5873 94.83C41.9473 95.75 40.1373 96.21 38.1573 96.21ZM38.1573 91.53C39.8373 91.53 41.1773 90.97 42.1773 89.85C43.1973 88.73 43.7073 87.25 43.7073 85.41C43.7073 83.55 43.1973 82.07 42.1773 80.97C41.1773 79.85 39.8373 79.29 38.1573 79.29C36.4573 79.29 35.0973 79.84 34.0773 80.94C33.0773 82.04 32.5773 83.53 32.5773 85.41C32.5773 87.27 33.0773 88.76 34.0773 89.88C35.0973 90.98 36.4573 91.53 38.1573 91.53ZM56.3113 82.05C56.9113 81.13 57.6613 80.41 58.5613 79.89C59.4613 79.35 60.4613 79.08 61.5613 79.08V84.51H60.1513C58.8713 84.51 57.9113 84.79 57.2713 85.35C56.6313 85.89 56.3113 86.85 56.3113 88.23V96H51.1813V79.26H56.3113V82.05ZM69.7733 79.02C70.9533 79.02 71.9833 79.26 72.8633 79.74C73.7633 80.22 74.4533 80.85 74.9333 81.63V79.26H80.0633V95.97C80.0633 97.51 79.7533 98.9 79.1333 100.14C78.5333 101.4 77.6033 102.4 76.3433 103.14C75.1033 103.88 73.5533 104.25 71.6933 104.25C69.2133 104.25 67.2033 103.66 65.6633 102.48C64.1233 101.32 63.2433 99.74 63.0233 97.74H68.0933C68.2533 98.38 68.6333 98.88 69.2333 99.24C69.8333 99.62 70.5733 99.81 71.4533 99.81C72.5133 99.81 73.3533 99.5 73.9733 98.88C74.6133 98.28 74.9333 97.31 74.9333 95.97V93.6C74.4333 94.38 73.7433 95.02 72.8633 95.52C71.9833 96 70.9533 96.24 69.7733 96.24C68.3933 96.24 67.1433 95.89 66.0233 95.19C64.9033 94.47 64.0133 93.46 63.3533 92.16C62.7133 90.84 62.3933 89.32 62.3933 87.6C62.3933 85.88 62.7133 84.37 63.3533 83.07C64.0133 81.77 64.9033 80.77 66.0233 80.07C67.1433 79.37 68.3933 79.02 69.7733 79.02ZM74.9333 87.63C74.9333 86.35 74.5733 85.34 73.8533 84.6C73.1533 83.86 72.2933 83.49 71.2733 83.49C70.2533 83.49 69.3833 83.86 68.6633 84.6C67.9633 85.32 67.6133 86.32 67.6133 87.6C67.6133 88.88 67.9633 89.9 68.6633 90.66C69.3833 91.4 70.2533 91.77 71.2733 91.77C72.2933 91.77 73.1533 91.4 73.8533 90.66C74.5733 89.92 74.9333 88.91 74.9333 87.63ZM82.1546 87.6C82.1546 85.88 82.4746 84.37 83.1146 83.07C83.7746 81.77 84.6646 80.77 85.7846 80.07C86.9046 79.37 88.1546 79.02 89.5346 79.02C90.7146 79.02 91.7446 79.26 92.6246 79.74C93.5246 80.22 94.2146 80.85 94.6946 81.63V79.26H99.8246V96H94.6946V93.63C94.1946 94.41 93.4946 95.04 92.5946 95.52C91.7146 96 90.6846 96.24 89.5046 96.24C88.1446 96.24 86.9046 95.89 85.7846 95.19C84.6646 94.47 83.7746 93.46 83.1146 92.16C82.4746 90.84 82.1546 89.32 82.1546 87.6ZM94.6946 87.63C94.6946 86.35 94.3346 85.34 93.6146 84.6C92.9146 83.86 92.0546 83.49 91.0346 83.49C90.0146 83.49 89.1446 83.86 88.4246 84.6C87.7246 85.32 87.3746 86.32 87.3746 87.6C87.3746 88.88 87.7246 89.9 88.4246 90.66C89.1446 91.4 90.0146 91.77 91.0346 91.77C92.0546 91.77 92.9146 91.4 93.6146 90.66C94.3346 89.92 94.6946 88.91 94.6946 87.63ZM113.136 79.08C115.096 79.08 116.656 79.72 117.816 81C118.996 82.26 119.586 84 119.586 86.22V96H114.486V86.91C114.486 85.79 114.196 84.92 113.616 84.3C113.036 83.68 112.256 83.37 111.276 83.37C110.296 83.37 109.516 83.68 108.936 84.3C108.356 84.92 108.066 85.79 108.066 86.91V96H102.936V79.26H108.066V81.48C108.586 80.74 109.286 80.16 110.166 79.74C111.046 79.3 112.036 79.08 113.136 79.08ZM125.131 77.52C124.231 77.52 123.491 77.26 122.911 76.74C122.351 76.2 122.071 75.54 122.071 74.76C122.071 73.96 122.351 73.3 122.911 72.78C123.491 72.24 124.231 71.97 125.131 71.97C126.011 71.97 126.731 72.24 127.291 72.78C127.871 73.3 128.161 73.96 128.161 74.76C128.161 75.54 127.871 76.2 127.291 76.74C126.731 77.26 126.011 77.52 125.131 77.52ZM127.681 79.26V96H122.551V79.26H127.681ZM135.598 91.77H142.858V96H129.868V91.92L136.828 83.49H129.928V79.26H142.708V83.34L135.598 91.77ZM144.061 87.6C144.061 85.88 144.381 84.37 145.021 83.07C145.681 81.77 146.571 80.77 147.691 80.07C148.811 79.37 150.061 79.02 151.441 79.02C152.621 79.02 153.651 79.26 154.531 79.74C155.431 80.22 156.121 80.85 156.601 81.63V79.26H161.731V96H156.601V93.63C156.101 94.41 155.401 95.04 154.501 95.52C153.621 96 152.591 96.24 151.411 96.24C150.051 96.24 148.811 95.89 147.691 95.19C146.571 94.47 145.681 93.46 145.021 92.16C144.381 90.84 144.061 89.32 144.061 87.6ZM156.601 87.63C156.601 86.35 156.241 85.34 155.521 84.6C154.821 83.86 153.961 83.49 152.941 83.49C151.921 83.49 151.051 83.86 150.331 84.6C149.631 85.32 149.281 86.32 149.281 87.6C149.281 88.88 149.631 89.9 150.331 90.66C151.051 91.4 151.921 91.77 152.941 91.77C153.961 91.77 154.821 91.4 155.521 90.66C156.241 89.92 156.601 88.91 156.601 87.63ZM174.173 91.65V96H171.563C169.703 96 168.253 95.55 167.213 94.65C166.173 93.73 165.653 92.24 165.653 90.18V83.52H163.613V79.26H165.653V75.18H170.783V79.26H174.143V83.52H170.783V90.24C170.783 90.74 170.903 91.1 171.143 91.32C171.383 91.54 171.783 91.65 172.343 91.65H174.173ZM179.01 77.52C178.11 77.52 177.37 77.26 176.79 76.74C176.23 76.2 175.95 75.54 175.95 74.76C175.95 73.96 176.23 73.3 176.79 72.78C177.37 72.24 178.11 71.97 179.01 71.97C179.89 71.97 180.61 72.24 181.17 72.78C181.75 73.3 182.04 73.96 182.04 74.76C182.04 75.54 181.75 76.2 181.17 76.74C180.61 77.26 179.89 77.52 179.01 77.52ZM181.56 79.26V96H176.43V79.26H181.56ZM192.298 96.24C190.658 96.24 189.178 95.89 187.858 95.19C186.558 94.49 185.528 93.49 184.768 92.19C184.028 90.89 183.658 89.37 183.658 87.63C183.658 85.91 184.038 84.4 184.798 83.1C185.558 81.78 186.598 80.77 187.918 80.07C189.238 79.37 190.718 79.02 192.358 79.02C193.998 79.02 195.478 79.37 196.798 80.07C198.118 80.77 199.158 81.78 199.918 83.1C200.678 84.4 201.058 85.91 201.058 87.63C201.058 89.35 200.668 90.87 199.888 92.19C199.128 93.49 198.078 94.49 196.738 95.19C195.418 95.89 193.938 96.24 192.298 96.24ZM192.298 91.8C193.278 91.8 194.108 91.44 194.788 90.72C195.488 90 195.838 88.97 195.838 87.63C195.838 86.29 195.498 85.26 194.818 84.54C194.158 83.82 193.338 83.46 192.358 83.46C191.358 83.46 190.528 83.82 189.868 84.54C189.208 85.24 188.878 86.27 188.878 87.63C188.878 88.97 189.198 90 189.838 90.72C190.498 91.44 191.318 91.8 192.298 91.8ZM213.379 79.08C215.339 79.08 216.899 79.72 218.059 81C219.239 82.26 219.829 84 219.829 86.22V96H214.729V86.91C214.729 85.79 214.439 84.92 213.859 84.3C213.279 83.68 212.499 83.37 211.519 83.37C210.539 83.37 209.759 83.68 209.179 84.3C208.599 84.92 208.309 85.79 208.309 86.91V96H203.179V79.26H208.309V81.48C208.829 80.74 209.529 80.16 210.409 79.74C211.289 79.3 212.279 79.08 213.379 79.08ZM229.604 96.24C228.144 96.24 226.844 95.99 225.704 95.49C224.564 94.99 223.664 94.31 223.004 93.45C222.344 92.57 221.974 91.59 221.894 90.51H226.964C227.024 91.09 227.294 91.56 227.774 91.92C228.254 92.28 228.844 92.46 229.544 92.46C230.184 92.46 230.674 92.34 231.014 92.1C231.374 91.84 231.554 91.51 231.554 91.11C231.554 90.63 231.304 90.28 230.804 90.06C230.304 89.82 229.494 89.56 228.374 89.28C227.174 89 226.174 88.71 225.374 88.41C224.574 88.09 223.884 87.6 223.304 86.94C222.724 86.26 222.434 85.35 222.434 84.21C222.434 83.25 222.694 82.38 223.214 81.6C223.754 80.8 224.534 80.17 225.554 79.71C226.594 79.25 227.824 79.02 229.244 79.02C231.344 79.02 232.994 79.54 234.194 80.58C235.414 81.62 236.114 83 236.294 84.72H231.554C231.474 84.14 231.214 83.68 230.774 83.34C230.354 83 229.794 82.83 229.094 82.83C228.494 82.83 228.034 82.95 227.714 83.19C227.394 83.41 227.234 83.72 227.234 84.12C227.234 84.6 227.484 84.96 227.984 85.2C228.504 85.44 229.304 85.68 230.384 85.92C231.624 86.24 232.634 86.56 233.414 86.88C234.194 87.18 234.874 87.68 235.454 88.38C236.054 89.06 236.364 89.98 236.384 91.14C236.384 92.12 236.104 93 235.544 93.78C235.004 94.54 234.214 95.14 233.174 95.58C232.154 96.02 230.964 96.24 229.604 96.24Z" fill="#EC4899"/>
<path d="M173.219 129.75V132.469C173.219 132.829 173.072 133.175 172.811 133.43C172.551 133.685 172.197 133.828 171.828 133.828H167.656V135.867C167.656 136.993 166.722 137.906 165.57 137.906H97.4297C96.2777 137.906 95.3438 136.993 95.3438 135.867V133.828H91.1719C90.8031 133.828 90.4493 133.685 90.1886 133.43C89.9278 133.175 89.7812 132.829 89.7812 132.469V129.75C89.7813 129.481 89.8629 129.218 90.0157 128.995C90.1686 128.771 90.3859 128.597 90.6401 128.494L130.968 113.541C131.309 113.403 131.691 113.403 132.032 113.541L172.36 128.494C172.614 128.597 172.831 128.771 172.984 128.995C173.137 129.218 173.219 129.481 173.219 129.75ZM169.047 181.406H93.9531C91.649 181.406 89.7812 183.232 89.7812 185.484V188.203C89.7812 188.564 89.9278 188.909 90.1886 189.164C90.4493 189.419 90.8031 189.562 91.1719 189.562H171.828C172.197 189.562 172.551 189.419 172.811 189.164C173.072 188.909 173.219 188.564 173.219 188.203V185.484C173.219 183.232 171.351 181.406 169.047 181.406ZM103.688 140.625V173.25H97.4297C96.2777 173.25 95.3438 174.163 95.3438 175.289V178.687H167.656V175.289C167.656 174.163 166.722 173.25 165.57 173.25H159.312V140.625H148.188V173.25H137.062V140.625H125.938V173.25H114.812V140.625H103.688Z" fill="#DB2777"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="280" height="228" fill="white"/>
</clipPath>
</defs>
</svg>


           </div>
           </div>
           <div className="row-start-2 flex items-center justify-center">
           <svg className="w-72 h-72 transform hover:-translate-y-1 hover:scale-110 ease-in-out duration-500" viewBox="0 0 279 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M0 38.2788V221.938C0 225.286 3.32105 228 7.41792 228H271.583C275.68 228 279.001 225.286 279.001 221.938V38.2788L130.738 33.6913L0 38.2788Z" fill="#FED7AA"/>
<path d="M279 38.1627H0V6.06196C0 2.71398 3.32105 0 7.41792 0H271.583C275.679 0 279 2.71398 279 6.06196V38.1627Z" fill="#FB923C"/>
<path d="M262.159 38.2788V221.938C262.159 225.286 258.838 228 254.741 228H271.582C275.679 228 279 225.286 279 221.938V38.2788L270.579 33.6913L262.159 38.2788Z" fill="#FDBA74"/>
<path d="M271.582 0H254.741C258.838 0 262.159 2.71398 262.159 6.06196V38.1632H279V6.06196C279 2.71398 275.679 0 271.582 0V0Z" fill="#FDBA74"/>
<path d="M206.928 228V172.452C206.928 170.602 208.763 169.103 211.027 169.103H279L206.928 228Z" fill="#FB923C"/>
<path d="M262.159 182.865L279 169.103H262.159V182.865Z" fill="#FDBA74"/>
<path d="M98.1778 82.28H90.3178L89.0578 86H83.6878L91.3078 64.94H97.2478L104.868 86H99.4378L98.1778 82.28ZM96.8578 78.32L94.2478 70.61L91.6678 78.32H96.8578ZM111.717 71.63C112.197 70.85 112.887 70.22 113.787 69.74C114.687 69.26 115.717 69.02 116.877 69.02C118.257 69.02 119.507 69.37 120.627 70.07C121.747 70.77 122.627 71.77 123.267 73.07C123.927 74.37 124.257 75.88 124.257 77.6C124.257 79.32 123.927 80.84 123.267 82.16C122.627 83.46 121.747 84.47 120.627 85.19C119.507 85.89 118.257 86.24 116.877 86.24C115.697 86.24 114.667 86.01 113.787 85.55C112.907 85.07 112.217 84.44 111.717 83.66V86H106.587V63.8H111.717V71.63ZM119.037 77.6C119.037 76.32 118.677 75.32 117.957 74.6C117.257 73.86 116.387 73.49 115.347 73.49C114.327 73.49 113.457 73.86 112.737 74.6C112.037 75.34 111.687 76.35 111.687 77.63C111.687 78.91 112.037 79.92 112.737 80.66C113.457 81.4 114.327 81.77 115.347 81.77C116.367 81.77 117.237 81.4 117.957 80.66C118.677 79.9 119.037 78.88 119.037 77.6ZM133.968 86.24C132.328 86.24 130.848 85.89 129.528 85.19C128.228 84.49 127.198 83.49 126.438 82.19C125.698 80.89 125.328 79.37 125.328 77.63C125.328 75.91 125.708 74.4 126.468 73.1C127.228 71.78 128.268 70.77 129.588 70.07C130.908 69.37 132.388 69.02 134.028 69.02C135.668 69.02 137.148 69.37 138.468 70.07C139.788 70.77 140.828 71.78 141.588 73.1C142.348 74.4 142.728 75.91 142.728 77.63C142.728 79.35 142.338 80.87 141.558 82.19C140.798 83.49 139.748 84.49 138.408 85.19C137.088 85.89 135.608 86.24 133.968 86.24ZM133.968 81.8C134.948 81.8 135.778 81.44 136.458 80.72C137.158 80 137.508 78.97 137.508 77.63C137.508 76.29 137.168 75.26 136.488 74.54C135.828 73.82 135.008 73.46 134.028 73.46C133.028 73.46 132.198 73.82 131.538 74.54C130.878 75.24 130.548 76.27 130.548 77.63C130.548 78.97 130.868 80 131.508 80.72C132.168 81.44 132.988 81.8 133.968 81.8ZM161.38 69.26V86H156.25V83.72C155.73 84.46 155.02 85.06 154.12 85.52C153.24 85.96 152.26 86.18 151.18 86.18C149.9 86.18 148.77 85.9 147.79 85.34C146.81 84.76 146.05 83.93 145.51 82.85C144.97 81.77 144.7 80.5 144.7 79.04V69.26H149.8V78.35C149.8 79.47 150.09 80.34 150.67 80.96C151.25 81.58 152.03 81.89 153.01 81.89C154.01 81.89 154.8 81.58 155.38 80.96C155.96 80.34 156.25 79.47 156.25 78.35V69.26H161.38ZM173.795 81.65V86H171.185C169.325 86 167.875 85.55 166.835 84.65C165.795 83.73 165.275 82.24 165.275 80.18V73.52H163.235V69.26H165.275V65.18H170.405V69.26H173.765V73.52H170.405V80.24C170.405 80.74 170.525 81.1 170.765 81.32C171.005 81.54 171.405 81.65 171.965 81.65H173.795Z" fill="#F97316"/>
<path d="M128.576 98C115.648 98 107.274 103.429 100.699 113.112C99.5066 114.868 99.8743 117.276 101.538 118.569L108.525 124C110.205 125.305 112.596 125 113.911 123.311C117.969 118.101 120.978 115.102 127.316 115.102C132.299 115.102 138.462 118.389 138.462 123.341C138.462 127.085 135.447 129.008 130.527 131.835C124.789 135.132 117.196 139.235 117.196 149.5V151.125C117.196 153.326 118.937 155.109 121.084 155.109H132.822C134.969 155.109 136.71 153.326 136.71 151.125V150.167C136.71 143.051 157 142.755 157 123.5C157 109 142.325 98 128.576 98ZM126.953 160C120.766 160 115.733 165.159 115.733 171.5C115.733 177.841 120.766 183 126.953 183C133.14 183 138.173 177.841 138.173 171.5C138.173 165.159 133.14 160 126.953 160Z" fill="#FB923C"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="279" height="228" fill="white"/>
</clipPath>
</defs>
</svg>


           </div>
         </div>
         </div>
         </div>
    </div>
  );
}

export default App;
