// Function to toggle the fill color of SVG elements
function toggleFillColor() {
    // Get all SVG elements by their ID
    const svgElements = document.querySelectorAll('.skills #lineColor');
    const svgStrokes = document.querySelectorAll('.skills #lineColorStroke');

    // Loop through each SVG element
    svgElements.forEach(svgElement => {
        const currentFill = svgElement.getAttribute('fill');

        // Change the fill color to blue if it's currently #333
        if (currentFill === '#333') {
            svgElement.setAttribute('fill', '#1e9890');
            // Change back to the original color after 0.5 seconds
            setTimeout(() => {
                svgElement.setAttribute('fill', '#333');
            }, 400);
        }
    });

    // Loop through each SVG stroke
    svgStrokes.forEach(svgStroke => {
        const currentStroke = svgStroke.getAttribute('stroke');

        // Change the stroke color to blue if it's currently #333
        if (currentStroke === '#333') {
            svgStroke.setAttribute('stroke', '#1e9890');
            // Change back to the original color after 0.5 seconds
            setTimeout(() => {
                svgStroke.setAttribute('stroke', '#333');
            }, 100);
        }
    });
}

// Call the toggleFillColor function every 3 seconds
setInterval(toggleFillColor, 3000);


//cursor background effect
document.addEventListener("DOMContentLoaded", function() {
    
    const container = document.querySelector('.container');
    let cursorCircle = document.createElement('div');
    cursorCircle.classList.add('cursor-circle');
    document.body.appendChild(cursorCircle);

    // document.addEventListener("mousemove", function(e) {
    //     const x = e.pageX;
    //     const y = e.pageY;

    //     cursorCircle.style.left = x - 100 + 'px';
    //     cursorCircle.style.top = y - 100 + 'px';
    // });


    // //Skills page texts round animation
    // const texts = document.querySelectorAll('.circle-container h3');
    // const radius = 120;
    // const centerX = 150; // Adjust according to container width
    // const centerY = 150; // Adjust according to container height
    // const angleStep = (2 * Math.PI) / texts.length;

    // for (let i = 0; i < texts.length; i++) {
    //     const angle = i * angleStep;
    //     const textElement = texts[i];

    //     const x = centerX + radius * Math.cos(angle);
    //     const y = centerY + radius * Math.sin(angle);

    //     textElement.style.left = x + 'px';
    //     textElement.style.top = y + 'px';
    // }

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var line = document.getElementById('line');
        line.style.height = scrollTop - 300 + 'px';
    });
});

