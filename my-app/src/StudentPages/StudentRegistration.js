import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function StudentReg() {
	const [isFirstStep, setisFirstStep] = useState(true);

	if (!isFirstStep) {
		var firstStep = document.getElementById("step-1");
		var secondStep = document.getElementById("step-2");

		firstStep.className = "hidden";
		secondStep.className =
			"w-auto m-36 bg-white rounded-lg h-auto min-h-3/6 p-10 flex flex-col items-center text-center justify-center gap-4";
	}

	return (
		<div>
			{/*lOGO*/}
			<div className="absolute w-full mb-8 top-0 pt-5 px-10 font-black text-3xl  text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600  to-yellow-500">
				{" "}
				<Link to="/">
					<svg
						className="lg:h-14 h-8"
						viewBox="0 0 377 55"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M104.24 29.52C105.893 29.8933 107.2 30.72 108.16 32C109.147 33.2533 109.64 34.6933 109.64 36.32C109.64 38.72 108.813 40.6 107.16 41.96C105.507 43.32 103.187 44 100.2 44H86.24V15.8H99.76C102.64 15.8 104.893 16.44 106.52 17.72C108.173 19 109 20.8 109 23.12C109 24.7733 108.56 26.16 107.68 27.28C106.827 28.3733 105.68 29.12 104.24 29.52ZM94.08 27H98.04C100.013 27 101 26.1867 101 24.56C101 22.88 100.013 22.04 98.04 22.04H94.08V27ZM98.64 37.68C100.613 37.68 101.6 36.8533 101.6 35.2C101.6 34.3467 101.333 33.6933 100.8 33.24C100.293 32.7867 99.56 32.56 98.6 32.56H94.08V37.68H98.64ZM135.236 21.56V44H127.356V40.8C126.689 41.8133 125.769 42.64 124.596 43.28C123.423 43.8933 122.076 44.2 120.556 44.2C117.943 44.2 115.876 43.3467 114.356 41.64C112.863 39.9067 112.116 37.56 112.116 34.6V21.56H119.916V33.6C119.916 34.88 120.249 35.8933 120.916 36.64C121.609 37.36 122.516 37.72 123.636 37.72C124.783 37.72 125.689 37.36 126.356 36.64C127.023 35.8933 127.356 34.88 127.356 33.6V21.56H135.236ZM146.738 14.4V44H138.898V14.4H146.738ZM158.242 14.4V44H150.402V14.4H158.242ZM183.347 32.52C183.347 33.1333 183.307 33.7467 183.227 34.36H168.387C168.467 35.5867 168.801 36.5067 169.387 37.12C170.001 37.7067 170.774 38 171.707 38C173.014 38 173.947 37.4133 174.507 36.24H182.867C182.521 37.7867 181.841 39.1733 180.827 40.4C179.841 41.6 178.587 42.5467 177.067 43.24C175.547 43.9333 173.867 44.28 172.027 44.28C169.814 44.28 167.841 43.8133 166.107 42.88C164.401 41.9467 163.054 40.6133 162.067 38.88C161.107 37.1467 160.627 35.1067 160.627 32.76C160.627 30.4133 161.107 28.3867 162.067 26.68C163.027 24.9467 164.361 23.6133 166.067 22.68C167.801 21.7467 169.787 21.28 172.027 21.28C174.241 21.28 176.201 21.7333 177.907 22.64C179.614 23.5467 180.947 24.8533 181.907 26.56C182.867 28.24 183.347 30.2267 183.347 32.52ZM175.347 30.56C175.347 29.6 175.027 28.8533 174.387 28.32C173.747 27.76 172.947 27.48 171.987 27.48C171.027 27.48 170.241 27.7467 169.627 28.28C169.014 28.7867 168.614 29.5467 168.427 30.56H175.347ZM198.996 37.32V44H195.596C189.862 44 186.996 41.16 186.996 35.48V28.08H184.236V21.56H186.996V16.12H194.876V21.56H198.956V28.08H194.876V35.6C194.876 36.2133 195.009 36.6533 195.276 36.92C195.569 37.1867 196.049 37.32 196.716 37.32H198.996ZM205.752 19.48C204.365 19.48 203.245 19.1067 202.392 18.36C201.565 17.5867 201.152 16.6267 201.152 15.48C201.152 14.3067 201.565 13.3333 202.392 12.56C203.245 11.7867 204.365 11.4 205.752 11.4C207.112 11.4 208.205 11.7867 209.032 12.56C209.885 13.3333 210.312 14.3067 210.312 15.48C210.312 16.6267 209.885 17.5867 209.032 18.36C208.205 19.1067 207.112 19.48 205.752 19.48ZM209.632 21.56V44H201.792V21.56H209.632ZM227.976 21.36C230.563 21.36 232.616 22.2267 234.136 23.96C235.656 25.6667 236.416 27.9867 236.416 30.92V44H228.576V31.96C228.576 30.68 228.243 29.68 227.576 28.96C226.91 28.2133 226.016 27.84 224.896 27.84C223.723 27.84 222.803 28.2133 222.136 28.96C221.47 29.68 221.136 30.68 221.136 31.96V44H213.296V21.56H221.136V24.76C221.83 23.7467 222.763 22.9333 223.936 22.32C225.11 21.68 226.456 21.36 227.976 21.36ZM264.774 29.52C266.428 29.8933 267.734 30.72 268.694 32C269.681 33.2533 270.174 34.6933 270.174 36.32C270.174 38.72 269.348 40.6 267.694 41.96C266.041 43.32 263.721 44 260.734 44H246.774V15.8H260.294C263.174 15.8 265.428 16.44 267.054 17.72C268.708 19 269.534 20.8 269.534 23.12C269.534 24.7733 269.094 26.16 268.214 27.28C267.361 28.3733 266.214 29.12 264.774 29.52ZM254.614 27H258.574C260.548 27 261.534 26.1867 261.534 24.56C261.534 22.88 260.548 22.04 258.574 22.04H254.614V27ZM259.174 37.68C261.148 37.68 262.134 36.8533 262.134 35.2C262.134 34.3467 261.868 33.6933 261.334 33.24C260.828 32.7867 260.094 32.56 259.134 32.56H254.614V37.68H259.174ZM295.77 21.56V44H287.89V40.8C287.224 41.8133 286.304 42.64 285.13 43.28C283.957 43.8933 282.61 44.2 281.09 44.2C278.477 44.2 276.41 43.3467 274.89 41.64C273.397 39.9067 272.65 37.56 272.65 34.6V21.56H280.45V33.6C280.45 34.88 280.784 35.8933 281.45 36.64C282.144 37.36 283.05 37.72 284.17 37.72C285.317 37.72 286.224 37.36 286.89 36.64C287.557 35.8933 287.89 34.88 287.89 33.6V21.56H295.77ZM298.152 32.76C298.152 30.44 298.566 28.4133 299.392 26.68C300.246 24.9467 301.406 23.6133 302.872 22.68C304.339 21.7467 305.966 21.28 307.752 21.28C309.192 21.28 310.472 21.5867 311.592 22.2C312.739 22.7867 313.632 23.6 314.272 24.64V14.4H322.152V44H314.272V40.88C313.659 41.92 312.792 42.7467 311.672 43.36C310.552 43.9733 309.232 44.28 307.712 44.28C305.926 44.28 304.299 43.8133 302.832 42.88C301.392 41.9467 300.246 40.6133 299.392 38.88C298.566 37.12 298.152 35.08 298.152 32.76ZM314.312 32.76C314.312 31.32 313.912 30.1867 313.112 29.36C312.339 28.5333 311.379 28.12 310.232 28.12C309.059 28.12 308.086 28.5333 307.312 29.36C306.539 30.16 306.152 31.2933 306.152 32.76C306.152 34.2 306.539 35.3467 307.312 36.2C308.086 37.0267 309.059 37.44 310.232 37.44C311.379 37.44 312.339 37.0267 313.112 36.2C313.912 35.3733 314.312 34.2267 314.312 32.76ZM324.54 32.76C324.54 30.44 324.953 28.4133 325.78 26.68C326.633 24.9467 327.793 23.6133 329.26 22.68C330.726 21.7467 332.353 21.28 334.14 21.28C335.58 21.28 336.86 21.5867 337.98 22.2C339.126 22.7867 340.02 23.6 340.66 24.64V14.4H348.54V44H340.66V40.88C340.046 41.92 339.18 42.7467 338.06 43.36C336.94 43.9733 335.62 44.28 334.1 44.28C332.313 44.28 330.686 43.8133 329.22 42.88C327.78 41.9467 326.633 40.6133 325.78 38.88C324.953 37.12 324.54 35.08 324.54 32.76ZM340.7 32.76C340.7 31.32 340.3 30.1867 339.5 29.36C338.726 28.5333 337.766 28.12 336.62 28.12C335.446 28.12 334.473 28.5333 333.7 29.36C332.926 30.16 332.54 31.2933 332.54 32.76C332.54 34.2 332.926 35.3467 333.7 36.2C334.473 37.0267 335.446 37.44 336.62 37.44C337.766 37.44 338.726 37.0267 339.5 36.2C340.3 35.3733 340.7 34.2267 340.7 32.76ZM376.367 21.56L362.127 54.68H353.607L358.967 43.04L349.767 21.56H358.487L363.207 34.28L367.767 21.56H376.367Z"
							fill="url(#paint0_linear)"
						/>
						<path
							d="M0 8.89812V51.5908C0 52.3691 0.714203 53 1.59525 53H58.4046C59.2858 53 60 52.3691 60 51.5908V8.89812L28.1155 7.83173L0 8.89812Z"
							fill="#FCE7F3"
						/>
						<path
							d="M59.9998 8.87115H0V1.40914C0 0.630881 0.714203 0 1.59525 0H58.4046C59.2856 0 59.9998 0.630881 59.9998 1.40914V8.87115Z"
							fill="#DB2777"
						/>
						<path
							d="M56.3781 8.89812V51.5908C56.3781 52.3691 55.6639 53 54.7827 53H58.4043C59.2855 53 59.9997 52.3691 59.9997 51.5908V8.89812L58.1888 7.83173L56.3781 8.89812Z"
							fill="#F472B6"
						/>
						<path
							d="M58.4043 0H54.7827C55.6639 0 56.3781 0.630881 56.3781 1.40914V8.87127H59.9997V1.40914C59.9997 0.630881 59.2855 0 58.4043 0Z"
							fill="#BE185D"
						/>
						<path
							d="M44.5005 53V40.0875C44.5005 39.6575 44.8952 39.309 45.3818 39.309H59.9997L44.5005 53Z"
							fill="#DB2777"
						/>
						<path
							d="M56.3782 42.5081L59.9998 39.309H56.3782V42.5081Z"
							fill="#BE185D"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="106.863"
								y1="53.0624"
								x2="331.142"
								y2="53.0625"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0.0705395" stop-color="#D946EF" />
								<stop offset="0.484375" stop-color="#DB2777" />
								<stop offset="0.953125" stop-color="#FB923C" />
							</linearGradient>
						</defs>
					</svg>
				</Link>
			</div>
			<div className="w-screen h-screen flex items-center content-center justify-center">
				<div
					id="step-1"
					className="w-auto m-36 bg-white rounded-lg h-auto min-h-3/6 p-10 flex flex-col items-center text-center justify-center gap-4"
				>
					<svg
						width="147"
						height="42"
						viewBox="0 0 147 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M63.6407 28.14C62.614 28.14 61.694 27.9733 60.8807 27.64C60.0674 27.3067 59.414 26.8133 58.9207 26.16C58.4407 25.5067 58.1874 24.72 58.1607 23.8H61.8007C61.854 24.32 62.034 24.72 62.3407 25C62.6474 25.2667 63.0474 25.4 63.5407 25.4C64.0474 25.4 64.4474 25.2867 64.7407 25.06C65.034 24.82 65.1807 24.4933 65.1807 24.08C65.1807 23.7333 65.0607 23.4467 64.8207 23.22C64.594 22.9933 64.3074 22.8067 63.9607 22.66C63.6274 22.5133 63.1474 22.3467 62.5207 22.16C61.614 21.88 60.874 21.6 60.3007 21.32C59.7274 21.04 59.234 20.6267 58.8207 20.08C58.4074 19.5333 58.2007 18.82 58.2007 17.94C58.2007 16.6333 58.674 15.6133 59.6207 14.88C60.5674 14.1333 61.8007 13.76 63.3207 13.76C64.8674 13.76 66.114 14.1333 67.0607 14.88C68.0074 15.6133 68.514 16.64 68.5807 17.96H64.8807C64.854 17.5067 64.6874 17.1533 64.3807 16.9C64.074 16.6333 63.6807 16.5 63.2007 16.5C62.7874 16.5 62.454 16.6133 62.2007 16.84C61.9474 17.0533 61.8207 17.3667 61.8207 17.78C61.8207 18.2333 62.034 18.5867 62.4607 18.84C62.8874 19.0933 63.554 19.3667 64.4607 19.66C65.3674 19.9667 66.1007 20.26 66.6607 20.54C67.234 20.82 67.7274 21.2267 68.1407 21.76C68.554 22.2933 68.7607 22.98 68.7607 23.82C68.7607 24.62 68.554 25.3467 68.1407 26C67.7407 26.6533 67.154 27.1733 66.3807 27.56C65.6074 27.9467 64.694 28.14 63.6407 28.14ZM76.6854 25.1V28H74.9454C73.7054 28 72.7387 27.7 72.0454 27.1C71.3521 26.4867 71.0054 25.4933 71.0054 24.12V19.68H69.6454V16.84H71.0054V14.12H74.4254V16.84H76.6654V19.68H74.4254V24.16C74.4254 24.4933 74.5054 24.7333 74.6654 24.88C74.8254 25.0267 75.0921 25.1 75.4654 25.1H76.6854ZM89.2104 16.84V28H85.7904V26.48C85.4437 26.9733 84.9704 27.3733 84.3704 27.68C83.7837 27.9733 83.1304 28.12 82.4104 28.12C81.5571 28.12 80.8037 27.9333 80.1504 27.56C79.4971 27.1733 78.9904 26.62 78.6304 25.9C78.2704 25.18 78.0904 24.3333 78.0904 23.36V16.84H81.4904V22.9C81.4904 23.6467 81.6837 24.2267 82.0704 24.64C82.4571 25.0533 82.9771 25.26 83.6304 25.26C84.2971 25.26 84.8237 25.0533 85.2104 24.64C85.5971 24.2267 85.7904 23.6467 85.7904 22.9V16.84H89.2104ZM90.587 22.4C90.587 21.2533 90.8003 20.2467 91.227 19.38C91.667 18.5133 92.2603 17.8467 93.007 17.38C93.7536 16.9133 94.587 16.68 95.507 16.68C96.2403 16.68 96.907 16.8333 97.507 17.14C98.1203 17.4467 98.6003 17.86 98.947 18.38V13.2H102.367V28H98.947V26.4C98.627 26.9333 98.167 27.36 97.567 27.68C96.9803 28 96.2936 28.16 95.507 28.16C94.587 28.16 93.7536 27.9267 93.007 27.46C92.2603 26.98 91.667 26.3067 91.227 25.44C90.8003 24.56 90.587 23.5467 90.587 22.4ZM98.947 22.42C98.947 21.5667 98.707 20.8933 98.227 20.4C97.7603 19.9067 97.187 19.66 96.507 19.66C95.827 19.66 95.247 19.9067 94.767 20.4C94.3003 20.88 94.067 21.5467 94.067 22.4C94.067 23.2533 94.3003 23.9333 94.767 24.44C95.247 24.9333 95.827 25.18 96.507 25.18C97.187 25.18 97.7603 24.9333 98.227 24.44C98.707 23.9467 98.947 23.2733 98.947 22.42ZM114.961 22.24C114.961 22.56 114.941 22.8933 114.901 23.24H107.161C107.215 23.9333 107.435 24.4667 107.821 24.84C108.221 25.2 108.708 25.38 109.281 25.38C110.135 25.38 110.728 25.02 111.061 24.3H114.701C114.515 25.0333 114.175 25.6933 113.681 26.28C113.201 26.8667 112.595 27.3267 111.861 27.66C111.128 27.9933 110.308 28.16 109.401 28.16C108.308 28.16 107.335 27.9267 106.481 27.46C105.628 26.9933 104.961 26.3267 104.481 25.46C104.001 24.5933 103.761 23.58 103.761 22.42C103.761 21.26 103.995 20.2467 104.461 19.38C104.941 18.5133 105.608 17.8467 106.461 17.38C107.315 16.9133 108.295 16.68 109.401 16.68C110.481 16.68 111.441 16.9067 112.281 17.36C113.121 17.8133 113.775 18.46 114.241 19.3C114.721 20.14 114.961 21.12 114.961 22.24ZM111.461 21.34C111.461 20.7533 111.261 20.2867 110.861 19.94C110.461 19.5933 109.961 19.42 109.361 19.42C108.788 19.42 108.301 19.5867 107.901 19.92C107.515 20.2533 107.275 20.7267 107.181 21.34H111.461ZM123.165 16.72C124.472 16.72 125.512 17.1467 126.285 18C127.072 18.84 127.465 20 127.465 21.48V28H124.065V21.94C124.065 21.1933 123.872 20.6133 123.485 20.2C123.099 19.7867 122.579 19.58 121.925 19.58C121.272 19.58 120.752 19.7867 120.365 20.2C119.979 20.6133 119.785 21.1933 119.785 21.94V28H116.365V16.84H119.785V18.32C120.132 17.8267 120.599 17.44 121.185 17.16C121.772 16.8667 122.432 16.72 123.165 16.72ZM135.662 25.1V28H133.922C132.682 28 131.715 27.7 131.022 27.1C130.329 26.4867 129.982 25.4933 129.982 24.12V19.68H128.622V16.84H129.982V14.12H133.402V16.84H135.642V19.68H133.402V24.16C133.402 24.4933 133.482 24.7333 133.642 24.88C133.802 25.0267 134.069 25.1 134.442 25.1H135.662ZM141.707 28.16C140.734 28.16 139.867 27.9933 139.107 27.66C138.347 27.3267 137.747 26.8733 137.307 26.3C136.867 25.7133 136.62 25.06 136.567 24.34H139.947C139.987 24.7267 140.167 25.04 140.487 25.28C140.807 25.52 141.2 25.64 141.667 25.64C142.094 25.64 142.42 25.56 142.647 25.4C142.887 25.2267 143.007 25.0067 143.007 24.74C143.007 24.42 142.84 24.1867 142.507 24.04C142.174 23.88 141.634 23.7067 140.887 23.52C140.087 23.3333 139.42 23.14 138.887 22.94C138.354 22.7267 137.894 22.4 137.507 21.96C137.12 21.5067 136.927 20.9 136.927 20.14C136.927 19.5 137.1 18.92 137.447 18.4C137.807 17.8667 138.327 17.4467 139.007 17.14C139.7 16.8333 140.52 16.68 141.467 16.68C142.867 16.68 143.967 17.0267 144.767 17.72C145.58 18.4133 146.047 19.3333 146.167 20.48H143.007C142.954 20.0933 142.78 19.7867 142.487 19.56C142.207 19.3333 141.834 19.22 141.367 19.22C140.967 19.22 140.66 19.3 140.447 19.46C140.234 19.6067 140.127 19.8133 140.127 20.08C140.127 20.4 140.294 20.64 140.627 20.8C140.974 20.96 141.507 21.12 142.227 21.28C143.054 21.4933 143.727 21.7067 144.247 21.92C144.767 22.12 145.22 22.4533 145.607 22.92C146.007 23.3733 146.214 23.9867 146.227 24.76C146.227 25.4133 146.04 26 145.667 26.52C145.307 27.0267 144.78 27.4267 144.087 27.72C143.407 28.0133 142.614 28.16 141.707 28.16Z"
							fill="#A21CAF"
						/>
						<path
							d="M39 29.5315V1.96855C39 0.877637 38.0686 0 36.9105 0H8.35715C3.74331 0 0 3.52746 0 7.87527V34.1247C0 38.4725 3.74331 42 8.35715 42H36.9105C38.0686 42 39 41.1224 39 40.0315V38.7185C39 38.1033 38.6953 37.5458 38.225 37.1847C37.8598 35.9215 37.8598 32.3204 38.225 31.0571C38.6953 30.7042 39 30.1467 39 29.5315ZM11.143 10.992C11.143 10.7215 11.3779 10.5 11.6651 10.5H30.1204C30.4076 10.5 30.643 10.7215 30.643 10.992V12.6327C30.643 12.9033 30.4076 13.1247 30.1204 13.1247H11.6651C11.3779 13.1247 11.143 12.9033 11.143 12.6327V10.992ZM11.143 16.242C11.143 15.9715 11.3779 15.75 11.6651 15.75H30.1204C30.4076 15.75 30.643 15.9715 30.643 16.242V17.8827C30.643 18.1533 30.4076 18.3753 30.1204 18.3753H11.6651C11.3779 18.3753 11.143 18.1533 11.143 17.8827V16.242ZM33.2023 36.75H8.35715C6.81628 36.75 5.57145 35.5767 5.57145 34.1247C5.57145 32.6815 6.825 31.5 8.35715 31.5H33.2023C33.0367 32.9029 33.0367 35.3471 33.2023 36.75Z"
							fill="#701A75"
						/>
					</svg>
					<text className="text-4xl font-black text-dark-blueGray">
						{" "}
						Register Now{" "}
					</text>
					<div className=" flex items-center content-center justify-center"></div>
					<text className="text-2xl">
						{" "}
						Register for an account with your phone number.{" "}
					</text>
					{/* From TailwindCSS Samples */}
					<div className="flex items-center justify-center mb-8 flex-wrap">
						<div className="w-auto">
							<input
								className="bg-gray-200 mt-4 text-center appearance-none border-2 border-gray-200 rounded w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-fuchsia-600"
								type="tel"
								deafultValue=""
								placeholder="555-555-5555"
							/>
						</div>
						<button
							className="ml-4 mt-4  rounded h-full py-2 px-4 text-white font-bold  bg-fuchsia-600 hover:bg-fuchsia-500  focus:outline-none focus:ring-2 focus:bg-fuchsia-500  focus:ring-opacity-50"
							onClick={() => setisFirstStep(false)}
						>
							{" "}
							Authenticate{" "}
						</button>
					</div>
				</div>
				<div id="step-2" className="hidden">
					<svg
						width="147"
						height="42"
						viewBox="0 0 147 42"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M63.6407 28.14C62.614 28.14 61.694 27.9733 60.8807 27.64C60.0674 27.3067 59.414 26.8133 58.9207 26.16C58.4407 25.5067 58.1874 24.72 58.1607 23.8H61.8007C61.854 24.32 62.034 24.72 62.3407 25C62.6474 25.2667 63.0474 25.4 63.5407 25.4C64.0474 25.4 64.4474 25.2867 64.7407 25.06C65.034 24.82 65.1807 24.4933 65.1807 24.08C65.1807 23.7333 65.0607 23.4467 64.8207 23.22C64.594 22.9933 64.3074 22.8067 63.9607 22.66C63.6274 22.5133 63.1474 22.3467 62.5207 22.16C61.614 21.88 60.874 21.6 60.3007 21.32C59.7274 21.04 59.234 20.6267 58.8207 20.08C58.4074 19.5333 58.2007 18.82 58.2007 17.94C58.2007 16.6333 58.674 15.6133 59.6207 14.88C60.5674 14.1333 61.8007 13.76 63.3207 13.76C64.8674 13.76 66.114 14.1333 67.0607 14.88C68.0074 15.6133 68.514 16.64 68.5807 17.96H64.8807C64.854 17.5067 64.6874 17.1533 64.3807 16.9C64.074 16.6333 63.6807 16.5 63.2007 16.5C62.7874 16.5 62.454 16.6133 62.2007 16.84C61.9474 17.0533 61.8207 17.3667 61.8207 17.78C61.8207 18.2333 62.034 18.5867 62.4607 18.84C62.8874 19.0933 63.554 19.3667 64.4607 19.66C65.3674 19.9667 66.1007 20.26 66.6607 20.54C67.234 20.82 67.7274 21.2267 68.1407 21.76C68.554 22.2933 68.7607 22.98 68.7607 23.82C68.7607 24.62 68.554 25.3467 68.1407 26C67.7407 26.6533 67.154 27.1733 66.3807 27.56C65.6074 27.9467 64.694 28.14 63.6407 28.14ZM76.6854 25.1V28H74.9454C73.7054 28 72.7387 27.7 72.0454 27.1C71.3521 26.4867 71.0054 25.4933 71.0054 24.12V19.68H69.6454V16.84H71.0054V14.12H74.4254V16.84H76.6654V19.68H74.4254V24.16C74.4254 24.4933 74.5054 24.7333 74.6654 24.88C74.8254 25.0267 75.0921 25.1 75.4654 25.1H76.6854ZM89.2104 16.84V28H85.7904V26.48C85.4437 26.9733 84.9704 27.3733 84.3704 27.68C83.7837 27.9733 83.1304 28.12 82.4104 28.12C81.5571 28.12 80.8037 27.9333 80.1504 27.56C79.4971 27.1733 78.9904 26.62 78.6304 25.9C78.2704 25.18 78.0904 24.3333 78.0904 23.36V16.84H81.4904V22.9C81.4904 23.6467 81.6837 24.2267 82.0704 24.64C82.4571 25.0533 82.9771 25.26 83.6304 25.26C84.2971 25.26 84.8237 25.0533 85.2104 24.64C85.5971 24.2267 85.7904 23.6467 85.7904 22.9V16.84H89.2104ZM90.587 22.4C90.587 21.2533 90.8003 20.2467 91.227 19.38C91.667 18.5133 92.2603 17.8467 93.007 17.38C93.7536 16.9133 94.587 16.68 95.507 16.68C96.2403 16.68 96.907 16.8333 97.507 17.14C98.1203 17.4467 98.6003 17.86 98.947 18.38V13.2H102.367V28H98.947V26.4C98.627 26.9333 98.167 27.36 97.567 27.68C96.9803 28 96.2936 28.16 95.507 28.16C94.587 28.16 93.7536 27.9267 93.007 27.46C92.2603 26.98 91.667 26.3067 91.227 25.44C90.8003 24.56 90.587 23.5467 90.587 22.4ZM98.947 22.42C98.947 21.5667 98.707 20.8933 98.227 20.4C97.7603 19.9067 97.187 19.66 96.507 19.66C95.827 19.66 95.247 19.9067 94.767 20.4C94.3003 20.88 94.067 21.5467 94.067 22.4C94.067 23.2533 94.3003 23.9333 94.767 24.44C95.247 24.9333 95.827 25.18 96.507 25.18C97.187 25.18 97.7603 24.9333 98.227 24.44C98.707 23.9467 98.947 23.2733 98.947 22.42ZM114.961 22.24C114.961 22.56 114.941 22.8933 114.901 23.24H107.161C107.215 23.9333 107.435 24.4667 107.821 24.84C108.221 25.2 108.708 25.38 109.281 25.38C110.135 25.38 110.728 25.02 111.061 24.3H114.701C114.515 25.0333 114.175 25.6933 113.681 26.28C113.201 26.8667 112.595 27.3267 111.861 27.66C111.128 27.9933 110.308 28.16 109.401 28.16C108.308 28.16 107.335 27.9267 106.481 27.46C105.628 26.9933 104.961 26.3267 104.481 25.46C104.001 24.5933 103.761 23.58 103.761 22.42C103.761 21.26 103.995 20.2467 104.461 19.38C104.941 18.5133 105.608 17.8467 106.461 17.38C107.315 16.9133 108.295 16.68 109.401 16.68C110.481 16.68 111.441 16.9067 112.281 17.36C113.121 17.8133 113.775 18.46 114.241 19.3C114.721 20.14 114.961 21.12 114.961 22.24ZM111.461 21.34C111.461 20.7533 111.261 20.2867 110.861 19.94C110.461 19.5933 109.961 19.42 109.361 19.42C108.788 19.42 108.301 19.5867 107.901 19.92C107.515 20.2533 107.275 20.7267 107.181 21.34H111.461ZM123.165 16.72C124.472 16.72 125.512 17.1467 126.285 18C127.072 18.84 127.465 20 127.465 21.48V28H124.065V21.94C124.065 21.1933 123.872 20.6133 123.485 20.2C123.099 19.7867 122.579 19.58 121.925 19.58C121.272 19.58 120.752 19.7867 120.365 20.2C119.979 20.6133 119.785 21.1933 119.785 21.94V28H116.365V16.84H119.785V18.32C120.132 17.8267 120.599 17.44 121.185 17.16C121.772 16.8667 122.432 16.72 123.165 16.72ZM135.662 25.1V28H133.922C132.682 28 131.715 27.7 131.022 27.1C130.329 26.4867 129.982 25.4933 129.982 24.12V19.68H128.622V16.84H129.982V14.12H133.402V16.84H135.642V19.68H133.402V24.16C133.402 24.4933 133.482 24.7333 133.642 24.88C133.802 25.0267 134.069 25.1 134.442 25.1H135.662ZM141.707 28.16C140.734 28.16 139.867 27.9933 139.107 27.66C138.347 27.3267 137.747 26.8733 137.307 26.3C136.867 25.7133 136.62 25.06 136.567 24.34H139.947C139.987 24.7267 140.167 25.04 140.487 25.28C140.807 25.52 141.2 25.64 141.667 25.64C142.094 25.64 142.42 25.56 142.647 25.4C142.887 25.2267 143.007 25.0067 143.007 24.74C143.007 24.42 142.84 24.1867 142.507 24.04C142.174 23.88 141.634 23.7067 140.887 23.52C140.087 23.3333 139.42 23.14 138.887 22.94C138.354 22.7267 137.894 22.4 137.507 21.96C137.12 21.5067 136.927 20.9 136.927 20.14C136.927 19.5 137.1 18.92 137.447 18.4C137.807 17.8667 138.327 17.4467 139.007 17.14C139.7 16.8333 140.52 16.68 141.467 16.68C142.867 16.68 143.967 17.0267 144.767 17.72C145.58 18.4133 146.047 19.3333 146.167 20.48H143.007C142.954 20.0933 142.78 19.7867 142.487 19.56C142.207 19.3333 141.834 19.22 141.367 19.22C140.967 19.22 140.66 19.3 140.447 19.46C140.234 19.6067 140.127 19.8133 140.127 20.08C140.127 20.4 140.294 20.64 140.627 20.8C140.974 20.96 141.507 21.12 142.227 21.28C143.054 21.4933 143.727 21.7067 144.247 21.92C144.767 22.12 145.22 22.4533 145.607 22.92C146.007 23.3733 146.214 23.9867 146.227 24.76C146.227 25.4133 146.04 26 145.667 26.52C145.307 27.0267 144.78 27.4267 144.087 27.72C143.407 28.0133 142.614 28.16 141.707 28.16Z"
							fill="#A21CAF"
						/>
						<path
							d="M39 29.5315V1.96855C39 0.877637 38.0686 0 36.9105 0H8.35715C3.74331 0 0 3.52746 0 7.87527V34.1247C0 38.4725 3.74331 42 8.35715 42H36.9105C38.0686 42 39 41.1224 39 40.0315V38.7185C39 38.1033 38.6953 37.5458 38.225 37.1847C37.8598 35.9215 37.8598 32.3204 38.225 31.0571C38.6953 30.7042 39 30.1467 39 29.5315ZM11.143 10.992C11.143 10.7215 11.3779 10.5 11.6651 10.5H30.1204C30.4076 10.5 30.643 10.7215 30.643 10.992V12.6327C30.643 12.9033 30.4076 13.1247 30.1204 13.1247H11.6651C11.3779 13.1247 11.143 12.9033 11.143 12.6327V10.992ZM11.143 16.242C11.143 15.9715 11.3779 15.75 11.6651 15.75H30.1204C30.4076 15.75 30.643 15.9715 30.643 16.242V17.8827C30.643 18.1533 30.4076 18.3753 30.1204 18.3753H11.6651C11.3779 18.3753 11.143 18.1533 11.143 17.8827V16.242ZM33.2023 36.75H8.35715C6.81628 36.75 5.57145 35.5767 5.57145 34.1247C5.57145 32.6815 6.825 31.5 8.35715 31.5H33.2023C33.0367 32.9029 33.0367 35.3471 33.2023 36.75Z"
							fill="#701A75"
						/>
					</svg>
					<text className="text-4xl my-4 font-black text-dark-blueGray">
						{" "}
						Register Now{" "}
					</text>
					<div className="flex items-center content-center justify-center"></div>
					<text className="text-2xl"> Please verify your phone number. </text>
					{/* From TailwindCSS Samples */}
					<div className=" md:flex md:items-center mb-8">
						<div className="md:w-2/3">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mt-4 py-2 px-4 text-gray-700 w-64 leading-tight focus:outline-none focus:bg-white focus:border-fuchsia-600"
								type="text"
								deafultValue=""
								placeholder="Verification"
							/>
						</div>
						<button className="ml-4 mt-4 rounded h-full py-2 px-4 text-white font-bold  bg-fuchsia-600 hover:bg-fuchsia-500  focus:outline-none focus:ring-2 focus:bg-fuchsia-500  focus:ring-opacity-50">
							{" "}
							Register{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StudentReg;
