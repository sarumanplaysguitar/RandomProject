// welcome to the dank generator 2.0

var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.


function createFirstScene() {
    
    /* 
    
    YOOOOODAAAAAAA
    
    */
    
    
    
    // lotsa vars *___*
    
    var yodaGreen
    var yodaDarkGreen
    var yodaDarkBrown
    var yodaBrown
    var yodaTan
    var yodaBG
    var yodaPartyGlasses
    
    // start drawing
    
    function chooseYodaColors(){
        
        var yodaColors = Math.random()
    
        if(yodaColors < 0.33) {

            // normal yoda

            yodaGreen = "#cddc2f"
            yodaDarkGreen = "#9c841d"
            yodaDarkBrown = "#6f4c21"
            yodaBrown = "#bd7b41"
            yodaTan = "#e0ba66"
            yodaBG = "#15101e"
            yodaPartyGlasses = 0
            

        } else if(yodaColors < 0.67) {

            // force ghost yoda

            yodaGreen = "#b1d6dd"
            yodaDarkGreen = "#7c9c97"
            yodaDarkBrown = "#5c7067"
            yodaBrown = "#9dbdae"
            yodaTan = "#c0ddd6"
            yodaBG = "#090808"
            yodaPartyGlasses = 0
            

        } else {

            // vaporwave yoda

            yodaGreen = "#de4ab6"
            yodaDarkGreen = "#ba25b6"
            yodaDarkBrown = "#772297"
            yodaBrown = "#a33fd9"
            yodaTan = "#dd5def"
            yodaBG = "#33fef1"
            yodaPartyGlasses = 1
            
        }
    }
        
    function drawYoda() {
        
        // bg
        getRekt(0,0,20,20,yodaBG,1)
        
        // green
        getRekt(1,3,1,1,yodaGreen,1)
        getRekt(2,4,3,1,yodaGreen,1)
        getRekt(5,6,2,1,yodaGreen,1)
        getRekt(7,3,6,1,yodaGreen,1)
        getRekt(9,2,3,1,yodaGreen,1)
        getRekt(8,4,6,1,yodaGreen,1)
        getRekt(9,5,6,1,yodaGreen,1)
        getRekt(10,6,1,1,yodaGreen,1)
        getRekt(13,6,1,1,yodaGreen,1)
        getRekt(15,4,3,1,yodaGreen,1)
        getRekt(18,3,1,1,yodaGreen,1)
        getRekt(12,7,1,1,yodaGreen,1)
        getRekt(16,6,1,1,yodaGreen,1)
        getRekt(11,8,3,1,yodaGreen,1)
        getRekt(11,11,2,1,yodaGreen,1)
        getRekt(12,10,2,1,yodaGreen,1)

        // dark green
        getRekt(6,4,2,1,yodaDarkGreen,1)
        getRekt(3,5,6,1,yodaDarkGreen,1)
        getRekt(4,6,1,1,yodaDarkGreen,1)
        getRekt(7,6,3,1,yodaDarkGreen,1)
        getRekt(11,6,2,1,yodaDarkGreen,1)
        getRekt(6,7,6,1,yodaDarkGreen,1)
        getRekt(13,7,2,1,yodaDarkGreen,1)
        getRekt(14,6,2,1,yodaDarkGreen,1)
        getRekt(15,5,2,1,yodaDarkGreen,1)
        getRekt(7,8,4,1,yodaDarkGreen,1)

        // dark brown
        getRekt(9,9,4,1,yodaDarkBrown,1)
        getRekt(10,10,2,1,yodaDarkBrown,1)
        getRekt(10,11,1,3,yodaDarkBrown,1)
        getRekt(11,12,1,6,yodaDarkBrown,1)

        // brown
        getRekt(12,12,1,1,yodaBrown,1)
        getRekt(12,17,1,1,yodaBrown,1)
        getRekt(4,17,3,1,yodaBrown,1)

        // tan
        getRekt(13,15,3,3,yodaTan,1)
        getRekt(12,13,1,4,yodaTan,1)
        getRekt(13,11,2,4,yodaTan,1)
        getRekt(5,10,5,7,yodaTan,1)
        getRekt(4,12,1,4,yodaTan,1)
        getRekt(7,17,4,1,yodaTan,1)
        getRekt(10,14,1,3,yodaTan,1)
        getRekt(6,9,3,1,yodaTan,1)
        
        // glasses
        getRekt(6,5,1,1,"#000000",yodaPartyGlasses)
        getRekt(7,6,2,1,"#000000",yodaPartyGlasses)
        getRekt(9,6,3,2,"#000000",yodaPartyGlasses)
        getRekt(12,6,1,1,"#000000",yodaPartyGlasses)
        getRekt(13,6,2,2,"#000000",yodaPartyGlasses)
        getRekt(15,6,1,1,"#000000",yodaPartyGlasses)

    }

    chooseYodaColors()
    drawYoda()
    
    /*
    
    sample skwires code
    
    function makeYoda(color) {
        getRekt(1,3,1,1,color,1)
    }
    
    makeYoda("#cddc2f")
    
    */
    
}

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    
    /* 
    
    Jays [on my feet]
    
    */
    
    
    
    // lotsa vars *___*
    
    var jaysBlack
    var jaysRed
    var jaysDarkRed
    var jaysWhite
    var jaysGray
    var jaysBG
    
    // start drawing
    
    function chooseJaysColors(){
        
        var jaysColors = Math.random()
    
        if(jaysColors < 0.33) {

            // red jordans

            jaysBlack = "#171509"
            jaysRed = "#e42821"
            jaysDarkRed = "#b21813"
            jaysWhite = "#ece6cd"
            jaysGray = "#cfbc7d"
            jaysBG = "#00d8dd"
            

        } else if(jaysColors < 0.67) {

            // blue jordans

            jaysBlack = "#18090f"
            jaysRed = "#6e1cca"
            jaysDarkRed = "#43106f"
            jaysWhite = "#eccdd9"
            jaysGray = "#ce7d9c"
            jaysBG = "#ddc01a"
            

        } else {

            // pink jordans

            jaysBlack = "#190913"
            jaysRed = "#e41c7b"
            jaysDarkRed = "#b21149"
            jaysWhite = "#eccee1"
            jaysGray = "#cf7db1"
            jaysBG = "#00da75"
            
        }
    }
        
    function drawJays() {
        
        // bg
        getRekt(0,0,20,20,jaysBG,1)
        
        // black sections
        getRekt(1,9,3,1,jaysBlack,1)
        getRekt(2,7,2,1,jaysBlack,1)
        getRekt(3,6,2,1,jaysBlack,1)
        getRekt(5,5,2,1,jaysBlack,1)
        getRekt(4,8,1,2,jaysBlack,1)
        getRekt(8,13,9,1,jaysBlack,1)
        getRekt(6,12,7,1,jaysBlack,1)
        getRekt(5,11,2,1,jaysBlack,1)
        getRekt(11,10,2,2,jaysBlack,1)
        getRekt(7,10,4,1,jaysBlack,1)
        getRekt(5,7,3,3,jaysBlack,1)
        getRekt(8,8,1,1,jaysBlack,1)
        getRekt(8,9,3,1,jaysBlack,1)
        
        // red sections
        getRekt(1,8,3,1,jaysRed,1)
        getRekt(5,6,2,1,jaysRed,1)
        getRekt(4,10,1,3,jaysRed,1)
        getRekt(4,15,9,1,jaysRed,1)
        getRekt(7,11,4,1,jaysRed,1)
        
        // dark red sections
        getRekt(1,10,3,3,jaysDarkRed,1)
        getRekt(1,15,3,1,jaysDarkRed,1)
        getRekt(1,15,3,1,jaysDarkRed,1)
        getRekt(4,7,1,1,jaysDarkRed,1)
        getRekt(13,15,4,1,jaysDarkRed,1)
        getRekt(17,14,2,1,jaysDarkRed,1)
        getRekt(13,12,5,1,jaysDarkRed,1)
        getRekt(5,12,1,1,jaysDarkRed,1)
        getRekt(13,11,2,2,jaysDarkRed,1)
        getRekt(5,10,2,1,jaysDarkRed,1)
        
        // white sections
        getRekt(4,13,4,2,jaysWhite,1)
        getRekt(8,14,5,1,jaysWhite,1)
        getRekt(17,13,2,1,jaysWhite,1)
        
        // gray sections
        getRekt(1,13,3,2,jaysGray,1)
        getRekt(13,14,4,1,jaysGray,1)

    }

    chooseJaysColors()
    drawJays()
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
     
    /* 
    
    beep beep beep beep
    
    */
    
    
    
    // lotsa vars *___*
    
    var ghostLight
    var ghostDark
    var ghostWhite
    var ghostGray
    var ghostBG
    
    // start drawing
    
    function chooseGhostColors(){
        
        var ghostColors = Math.random()
    
        if(ghostColors < 0.33) {

            // blue ghost
            
            ghostLight = "#08a2fc"
            ghostDark = "#0876bc"
            ghostWhite = "#ffffff"
            ghostGray = "#c6b5f0"
            ghostBG = "#080014"
            

        } else if(ghostColors < 0.67) {

            // purple ghost
            
            ghostLight = "#9405fc"
            ghostDark = "#6905bd"
            ghostWhite = "#ffffff"
            ghostGray = "#d7b4d5"
            ghostBG = "#000514"
            

        } else {

            // orange ghost
            
            ghostLight = "#f86614"
            ghostDark = "#b94815"
            ghostWhite = "#ffffff"
            ghostGray = "#d0ceb5"
            ghostBG = "#100014"
            
            
        }
    }
        
    function drawGhost() {
        
        // bg
        getRekt(0,0,20,20,ghostBG,1)
        
        // light sections
        getRekt(10,3,1,13,ghostLight,1)
        getRekt(11,2,1,16,ghostLight,1)
        getRekt(12,3,1,3,ghostLight,1)
        getRekt(12,9,1,9,ghostLight,1)
        getRekt(13,10,1,7,ghostLight,1)
        getRekt(14,10,1,6,ghostLight,1)
        getRekt(14,4,1,1,ghostLight,1)
        getRekt(15,5,1,1,ghostLight,1)
        getRekt(15,9,1,8,ghostLight,1)
        getRekt(16,6,1,12,ghostLight,1)
        
        // dark sections
        getRekt(3,7,1,11,ghostDark,1)
        getRekt(4,5,1,12,ghostDark,1)
        getRekt(5,4,1,12,ghostDark,1)
        getRekt(6,3,1,3,ghostDark,1)
        getRekt(6,9,1,8,ghostDark,1)
        getRekt(7,10,1,8,ghostDark,1)
        getRekt(8,10,1,8,ghostDark,1)
        getRekt(9,9,1,7,ghostDark,1)
        getRekt(7,3,1,2,ghostDark,1)
        getRekt(8,2,1,3,ghostDark,1)
        getRekt(9,2,1,4,ghostDark,1)
        getRekt(10,2,1,1,ghostDark,1)
        getRekt(13,3,1,2,ghostLight,1)
        
        // white sections
        getRekt(12,6,1,3,ghostWhite,1)
        getRekt(13,5,1,5,ghostWhite,1)
        getRekt(14,5,1,2,ghostWhite,1)
        getRekt(14,9,1,1,ghostWhite,1)
        getRekt(15,6,1,1,ghostWhite,1)
        
        // gray sections
        getRekt(6,6,1,3,ghostGray,1)
        getRekt(7,5,1,5,ghostGray,1)
        getRekt(8,5,1,2,ghostGray,1)
        getRekt(8,9,1,1,ghostGray,1)
        getRekt(9,6,1,1,ghostGray,1)
        
    }

    chooseGhostColors()
    drawGhost()
    
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    
    // Generate a random number between 0 and 1, and store it in a variable.
    // If the number is less than 0.33, call the function to create your first scene.
    // Else, if the number is less than 0.67, call the function to create your second scene.    
    // Else, call the function to create your third scene.

    var myNumber = Math.random()
    
    if(myNumber < 0.33) {
        createFirstScene()
    } else if(myNumber < 0.67) {
        createSecondScene()
    } else {
        createThirdScene()
    }
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function getRekt(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}