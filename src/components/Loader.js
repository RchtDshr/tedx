import React, { useState } from "react";
import "./loader.css";

export default function Loader() {
    return (

        <div className="loader" id="loader">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="640.000000pt" height="339.000000pt"
                viewBox="0 0 640.000000 339.000000" preserveAspectRatio="xMidYMid meet" className="logopath stroke">

                <g transform="translate(0.000000,339.000000) scale(0.100000,-0.100000)">
                    <path className="logopathtext1" d="M3103 2958 c-201 -234 -367 -490 -553 -853 l-88 -170 -85 -32 c-51
-20 -116 -36 -159 -40 l-73 -6 18 24 c43 60 61 106 61 157 1 45 -3 57 -23 73
-46 38 -129 18 -171 -41 -22 -31 -25 -90 -6 -130 14 -31 -209 -120 -302 -120
-68 0 -100 18 -141 82 -18 27 -39 52 -48 55 -20 8 -79 -51 -235 -234 -71 -84
-133 -155 -138 -158 -42 -26 39 204 117 334 58 97 62 107 46 118 -25 19 -36
16 -67 -16 -18 -19 -41 -30 -70 -34 -74 -10 -207 -65 -351 -143 -200 -110
-271 -119 -311 -42 -20 38 -23 113 -5 146 9 17 21 22 51 22 50 0 83 13 131 51
45 35 51 70 17 93 -96 67 -291 -105 -263 -232 10 -47 62 -118 99 -136 70 -33
115 -20 314 88 123 68 248 122 325 140 l27 6 -30 -53 c-61 -108 -103 -275 -86
-341 7 -27 40 -47 63 -39 6 2 72 77 146 166 74 89 153 179 174 200 l39 37 31
-43 c19 -28 48 -53 78 -67 79 -38 152 -25 348 64 54 25 57 25 47 6 -6 -12 -10
-35 -8 -53 4 -41 35 -47 78 -15 24 18 46 23 94 25 54 1 168 32 250 68 17 7 18
6 11 -11 -25 -59 -45 -157 -45 -219 0 -122 51 -168 142 -127 42 19 79 50 319
270 62 56 114 100 116 98 3 -2 -5 -22 -16 -44 -69 -134 -94 -315 -49 -346 31
-22 44 -11 167 135 156 187 231 266 238 251 12 -31 70 -86 108 -103 22 -10 59
-19 83 -19 50 0 166 37 252 80 33 17 61 30 64 30 2 0 -8 -28 -22 -62 -26 -67
-39 -164 -28 -222 10 -54 50 -96 92 -96 31 0 50 15 177 139 156 151 259 226
355 255 19 7 22 4 22 -22 0 -26 25 -62 44 -62 5 0 60 50 123 110 99 96 173
153 173 135 0 -3 -16 -37 -35 -75 -63 -125 -68 -212 -13 -253 24 -18 31 -19
73 -7 40 11 226 111 310 166 l25 16 -20 -43 c-34 -75 -23 -119 29 -119 18 0
55 30 137 110 109 107 157 140 118 83 -11 -16 -57 -104 -104 -198 l-86 -170
-56 3 c-122 8 -308 -38 -453 -111 -112 -56 -188 -109 -273 -191 -167 -161
-231 -301 -220 -483 12 -191 122 -292 304 -281 102 7 183 49 279 146 131 132
208 261 360 612 l111 255 34 -1 c19 -1 64 -4 100 -8 62 -6 64 -5 35 8 -16 8
-56 20 -87 27 -34 7 -58 17 -58 24 0 38 190 396 266 502 15 21 15 22 -10 29
-20 5 -37 -1 -66 -21 -36 -25 -42 -26 -71 -15 -67 28 -121 9 -208 -77 -84 -83
-375 -243 -441 -243 -28 0 -30 2 -30 39 0 26 16 73 50 142 27 57 50 111 50
120 0 9 -8 27 -18 39 -30 37 -60 20 -198 -112 -70 -67 -129 -117 -132 -110 -3
11 31 81 68 139 11 18 12 24 1 37 -8 9 -19 16 -26 16 -19 0 -61 -54 -77 -96
-12 -33 -23 -41 -105 -80 -124 -57 -170 -90 -293 -209 -141 -136 -190 -162
-211 -107 -28 73 32 252 132 394 23 32 24 54 3 62 -23 9 -46 -8 -74 -54 -20
-34 -41 -50 -111 -85 -115 -59 -197 -85 -261 -85 -69 0 -96 15 -136 75 -53 79
-65 80 -131 9 -31 -32 -107 -120 -169 -194 -108 -128 -151 -167 -138 -123 3
10 8 32 12 48 14 63 68 184 121 273 45 76 53 95 43 107 -20 24 -41 18 -79 -23
-20 -22 -61 -55 -92 -74 -30 -20 -113 -89 -183 -154 -149 -139 -218 -191 -263
-200 -29 -6 -34 -3 -44 22 -37 97 89 439 217 589 244 285 544 750 544 843 0
56 -30 40 -117 -60z m42 -80 c-67 -116 -176 -287 -248 -388 -82 -115 -210
-280 -214 -276 -5 5 129 232 215 366 79 121 283 392 290 385 2 -2 -17 -41 -43
-87z m-965 -817 c13 -26 3 -76 -28 -133 -26 -49 -36 -55 -62 -38 -12 8 -9 15
19 44 31 32 35 56 8 56 -6 0 -25 -14 -43 -31 -31 -30 -32 -31 -39 -9 -10 33 3
84 28 108 47 44 94 45 117 3z m-1490 -11 c-6 -11 -30 -31 -54 -45 -84 -49
-100 -19 -18 35 54 36 88 41 72 10z m4703 13 c3 -5 -51 -66 -120 -138 -95 -98
-127 -126 -130 -112 -10 41 86 166 172 223 50 34 70 41 78 27z m-3304 -197
c10 -11 7 -17 -11 -30 -32 -23 -38 -20 -27 14 12 33 21 37 38 16z m3100 -312
c2 -2 -36 -94 -84 -206 -166 -384 -269 -563 -393 -679 -87 -83 -146 -112 -237
-117 -89 -5 -146 22 -187 89 -123 199 -31 479 224 683 94 76 303 183 408 211
105 28 248 38 269 19z" stroke="white" />
                    <path d="M3990 2135 c0 -16 34 -38 44 -28 7 7 -23 43 -36 43 -4 0 -8 -7 -8
-15z" className="logopathtext2" />
                </g>
            </svg>
        </div>
    )
}