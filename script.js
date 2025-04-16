    const dots = document.querySelectorAll('.dot');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function moveDot(dot) {
        const x = random(-50, 100);
        const y = random(-50, 100);
        dot.style.transform = `translate(${x}vw, ${y}vh)`;

        const duration = random(8, 20) * 1000;
        setTimeout(() => moveDot(dot), duration);
    }

    dots.forEach(dot => {
        moveDot(dot);
    });
