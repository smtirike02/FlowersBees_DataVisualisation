function _1(md){return(
md`# Flowers`
)}

function _2(html,petalPath){return(
html`<svg width="50" height="50"><path transform="translate(25,50)" d="${petalPath}"></svg>`
)}

function _petalPath(){return(
'M 0,0 C -10,-10 -10,-40 0,-80 C 10,-40 10,-10 0,0'
)}

function _flowerDensity(){return(
[1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 6, 6, 6, 6, 6, 8, 9, 9, 10, 13, 14, 14, 15, 15, 15, 16, 17, 17, 17, 21, 21, 23, 26, 26, 31, 40, 45, 51, 55, 55, 60, 70, 90, 95, 120, 160]
)}

function _5(html){return(
html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal" transform="rotate(45)" />
        <use xlink:href="#petal" transform="rotate(90)" />
        <use xlink:href="#petal" transform="rotate(135)" />
        <use xlink:href="#petal" transform="rotate(180)" />
        <use xlink:href="#petal" transform="rotate(225)" />
        <use xlink:href="#petal" transform="rotate(270)" />
        <use xlink:href="#petal" transform="rotate(315)" />
      </g>
      <path id="petal" d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>
`
)}

function _6(html){return(
html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -20,-50 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal14" transform="rotate(45)" />
        <use xlink:href="#petal14" transform="rotate(90)" />
        <use xlink:href="#petal14" transform="rotate(135)" />
        <use xlink:href="#petal14" transform="rotate(180)" />
        <use xlink:href="#petal14" transform="rotate(225)" />
        <use xlink:href="#petal14" transform="rotate(270)" />
        <use xlink:href="#petal14" transform="rotate(315)" />
      </g>
      <path id="petal14" d='M 0,0 C -20,-50 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>
`
)}

function _7(html){return(
html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal" transform="rotate(45)" />
        <use xlink:href="#petal" transform="rotate(90)" />
       
       
        <use xlink:href="#petal" transform="rotate(270)" />
        <use xlink:href="#petal" transform="rotate(315)" />
      </g>
      <path id="petal" d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>
`
)}

function _8(html){return(
html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -10,-10 0,-50 C 10,-40 20,-10 0,0' fill="none" />
        <use xlink:href="#petal9" transform="rotate(45)" />
        <use xlink:href="#petal9" transform="rotate(90)" />
       
       
        <use xlink:href="#petal9" transform="rotate(270)" />
        <use xlink:href="#petal9" transform="rotate(315)" />


        <use xlink:href="#petal9" transform="rotate(590)" />
       
       
        <use xlink:href="#petal9" transform="rotate(490)" />
       
      </g>
      <path id="petal9" d='M 0,0 C -10,-20 -10,-20 0,-50 C 10,-40 20,-10 0,0' fill="none" />
    </svg>
  </body>
</html>
`
)}

function _9(d3,flowerDensity){return(
d3.select("#flower")
 
  .data(flowerDensity)
)}

function _10(htl){return(
htl.html`
  <body>

 <!-- Lesser Stitchwort -->

    <svg width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -10,-40 0,-5 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal" transform="rotate(50)" />
        <use xlink:href="#petal" transform="rotate(120)" />
        <use xlink:href="#petal" transform="rotate(240)" />
        <use xlink:href="#petal" transform="rotate(310)" />

          <use xlink:href="#petal" transform="rotate(100)" />
        <use xlink:href="#petal" transform="rotate(240)" />
        <use xlink:href="#petal" transform="rotate(260)" />
        <use xlink:href="#petal" transform="rotate(310)" />

          
          
      </g>
      <path id="petal" d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _12(htl){return(
htl.html`
<!-- Scarlet Pimpernel -->
  <body>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal" transform="rotate(50)" />
        <use xlink:href="#petal" transform="rotate(30)" />
        <use xlink:href="#petal" transform="rotate(80)" />
        <use xlink:href="#petal" transform="rotate(100)" />
        
      </g>
      <path id="petal" d='M 10,0 C -10,-10 -10,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _13(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path d='M 0,0 C -10,-10 -50,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
        <use xlink:href="#petal2" transform="rotate(45)" />
        <use xlink:href="#petal2" transform="rotate(90)" />
        <use xlink:href="#petal2" transform="rotate(135)" />
        <use xlink:href="#petal2" transform="rotate(180)" />
        <use xlink:href="#petal2" transform="rotate(225)" />
        <use xlink:href="#petal2" transform="rotate(270)" />
        <use xlink:href="#petal2" transform="rotate(315)" />
      </g>
      <path id="petal2" d='M 0,0 C -10,-10 -50,-40 0,-50 C 10,-40 10,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _14(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -30,-50 -5,-80 10,-50 C 10,-50 15,-10 0,0' fill="none" />
        <use xlink:href="#petal3" transform="rotate(10)" />
        <use xlink:href="#petal3" transform="rotate(100)" />
           

        
       
      
        <use xlink:href="#petal3" transform="rotate(125)" />
      </g>
      <path id="petal3" d='M 0,0 C -30,-50 -5,-80 10,-50 C 10,-50 15,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _15(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -20,-50 -5,-80 10,-50 C 10,-30 15,-40 0,0' fill="none" />
        <use xlink:href="#petal10" transform="rotate(20)" />
        <use xlink:href="#petal10" transform="rotate(50)" />
           

        
       
      
        <use xlink:href="#petal10" transform="rotate(60)" />
      </g>
      <path id="petal10" d='M 0,0 C -20,-50 -5,-80 10,-50 C 10,-30 15,-40 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _16(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -30,-50 -5,-80 10,-50 C 10,-50 15,-10 0,0' fill="none" />
       <use xlink:href="#petal4" transform="rotate(50)" />
        <use xlink:href="#petal4" transform="rotate(120)" />
        <use xlink:href="#petal4" transform="rotate(240)" />
        <use xlink:href="#petal4" transform="rotate(310)" />

          <use xlink:href="#petal4" transform="rotate(100)" />
        <use xlink:href="#petal4" transform="rotate(240)" />
        <use xlink:href="#petal4" transform="rotate(260)" />
       
      </g>
      <path id="petal4" d='M 0,0 C -30,-50 -5,-80 10,-50 C 10,-50 15,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _17(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path   d='M 0,0 C -30,-150 -30,-20 20,-50 C 30,-50 15,-0 0,0' fill="none" />
       <use xlink:href="#petal12" transform="rotate(50)" />
        <use xlink:href="#petal12" transform="rotate(120)" />
        <use xlink:href="#petal12" transform="rotate(240)" />
        <use xlink:href="#petal12" transform="rotate(310)" />

          <use xlink:href="#petal12" transform="rotate(100)" />
        <use xlink:href="#petal12" transform="rotate(240)" />
        <use xlink:href="#petal12" transform="rotate(260)" />
       
      </g>
      <path id="petal12" d='M 0,0 C -30,-150 -30,-20 20,-50 C 30,-50 15,-0 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _18(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -10,-50 -5,-10 10,-50 C 10,-50 15,-10 0,0' fill="none" />
       <use xlink:href="#petal5" transform="rotate(50)" />
        <use xlink:href="#petal5" transform="rotate(120)" />
        <use xlink:href="#petal5" transform="rotate(240)" />
        <use xlink:href="#petal5" transform="rotate(310)" />

          <use xlink:href="#petal5" transform="rotate(170)" />
       
       
      </g>
      <path id="petal5" d='M 0,0 C -10,-50 -5,-10 10,-50 C 10,-50 15,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _19(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path id="petal15" d='M 0,0 C -10,-50 -5,-10 10,-50 C 10,-50 15,-10 0,0' fill="none" />
       <use xlink:href="#petal15" transform="rotate(50)" />
        <use xlink:href="#petal15" transform="rotate(120)" />
        <use xlink:href="#petal15" transform="rotate(240)" />
        <use xlink:href="#peta15" transform="rotate(310)" />

          <use xlink:href="#petal15" transform="rotate(170)" />
       
       
      </g>
      <path id="petal15" d='M 0,0 C -20,-10 -5,-10 10,-50 C 10,-50 15,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _20(htl){return(
htl.html`  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -30,-20 -5,-20 10,-50 C 10,-50 25,-10 0,0'  fill="none" />
       <use xlink:href="#petal11" transform="rotate(50)" />
        <use xlink:href="#petal11" transform="rotate(120)" />
        <use xlink:href="#petal11" transform="rotate(240)" />
        <use xlink:href="#petal11" transform="rotate(310)" />

          <use xlink:href="#petal11" transform="rotate(170)" />
       
       
      </g>
      <path id="petal11" d='M 0,0 C -30,-20 -5,-20 10,-50 C 10,-50 25,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _21(htl){return(
htl.html`  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path id="petal13" d='M 0,0 C -30,-50 -5,-20 10,-70 C 10,-50 25,-10 0,0'   fill="none" />
       <use xlink:href="#petal13" transform="rotate(50)" />
        <use xlink:href="#petal13" transform="rotate(120)" />
        <use xlink:href="#petal13" transform="rotate(240)" />
        <use xlink:href="#petal13" transform="rotate(310)" />

          <use xlink:href="#petal13" transform="rotate(170)" />
       
       
      </g>
      <path id="petal13" d='M 0,0 C -30,-50 -5,-20 10,-70 C 10,-50 25,-10 0,0'   fill="none" />
    </svg>
  </body>
</html>`
)}

function _22(htl){return(
htl.html`  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path id="petal14"   d='M 0,0 C -50,-50 50,-20 50,-50 C 20,-50 25,-10 0,0'  fill="none" />
       <use xlink:href="#petal13" transform="rotate(50)" />
        <use xlink:href="#petal13" transform="rotate(120)" />
        <use xlink:href="#petal13" transform="rotate(240)" />
        <use xlink:href="#petal13" transform="rotate(310)" />

          <use xlink:href="#petal13" transform="rotate(170)" />
       
       
      </g>
      <path id="petal13"  d='M 0,0 C -50,-50 50,-20 50,-50 C 20,-50 25,-10 0,0'   fill="none" />
    </svg>
  </body>
</html>`
)}

function _23(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path    d='M 0,0 C -10,-50 -5,-50 50,-20 C 10,-50 15,-10 0,0' fill="none" />
       <use xlink:href="#petal6" transform="rotate(50)" />
        <use xlink:href="#petal6" transform="rotate(120)" />
        <use xlink:href="#petal6" transform="rotate(240)" />
        <use xlink:href="#petal6" transform="rotate(310)" />

          <use xlink:href="#petal6" transform="rotate(170)" />
       
       
      </g>
      <path id="petal6"  d='M 0,0 C -10,-50 -5,-50 50,-20 C 10,-50 15,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _24(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
      <path id="petal8"  d='M 0,0 C -50,-50 ,40,-50 ,100,-5 C 10,50 15,10 0,0' fill="none" />
        <path    fill="none" />
       <use xlink:href="#petal8" transform="rotate(50)" />
        <use xlink:href="#petal8" transform="rotate(120)" />
        <use xlink:href="#petal8" transform="rotate(240)" />
        <use xlink:href="#petal8" transform="rotate(310)" />

          <use xlink:href="#petal8" transform="rotate(170)" />
       
       
      </g>
      <path id="petal8"   d='M 0,0 C -50,-50 ,40,-50 ,-100,-5 C 10,50 15,10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _25(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
      <path id="petal19"  d='M 0,0 C -10,-50 ,40,-50 ,10,-5 C 100,20 15,10 0,0' fill="none" />
        <path    fill="none" />
       <use xlink:href="#petal19" transform="rotate(50)" />
        <use xlink:href="#petal19" transform="rotate(120)" />
        <use xlink:href="#petal19" transform="rotate(240)" />
        <use xlink:href="#petal19" transform="rotate(310)" />

          <use xlink:href="#petal19" transform="rotate(170)" />
       
       
      </g>
      <path id="petal18"   d='M 0,0 C -10,-50 ,10,-50 ,-100,-5 C 10,50 15,10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

function _26(htl){return(
htl.html`

  <body>
    <!--Common Bird's-foot-trefoil-->
    <svg id =width="200" height="200">
      <g transform="translate(100, 100)">
      <g fill="none" stroke="black">
        <path  d='M 0,0 C -10,-10 -5,-50 20,-20 C 10,-50 40,-10 0,0' fill="none" />
       <use xlink:href="#petal7" transform="rotate(50)" />
        <use xlink:href="#petal7" transform="rotate(120)" />
        <use xlink:href="#petal7" transform="rotate(240)" />
        <use xlink:href="#petal7" transform="rotate(310)" />

          <use xlink:href="#petal7" transform="rotate(170)" />
       
       
      </g>
      <path id="petal7"  d='M 0,0 C -10,-10 -5,-50 20,-20 C 10,-50 40,-10 0,0' fill="none" />
    </svg>
  </body>
</html>`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["html","petalPath"], _2);
  main.variable(observer("petalPath")).define("petalPath", _petalPath);
  main.variable(observer("flowerDensity")).define("flowerDensity", _flowerDensity);
  main.variable(observer()).define(["html"], _5);
  main.variable(observer()).define(["html"], _6);
  main.variable(observer()).define(["html"], _7);
  main.variable(observer()).define(["html"], _8);
  main.variable(observer()).define(["d3","flowerDensity"], _9);
  main.variable(observer()).define(["htl"], _10);
  main.variable(observer()).define(["htl"], _12);
  main.variable(observer()).define(["htl"], _13);
  main.variable(observer()).define(["htl"], _14);
  main.variable(observer()).define(["htl"], _15);
  main.variable(observer()).define(["htl"], _16);
  main.variable(observer()).define(["htl"], _17);
  main.variable(observer()).define(["htl"], _18);
  main.variable(observer()).define(["htl"], _19);
  main.variable(observer()).define(["htl"], _20);
  main.variable(observer()).define(["htl"], _21);
  main.variable(observer()).define(["htl"], _22);
  main.variable(observer()).define(["htl"], _23);
  main.variable(observer()).define(["htl"], _24);
  main.variable(observer()).define(["htl"], _25);
  main.variable(observer()).define(["htl"], _26);
  return main;
}
