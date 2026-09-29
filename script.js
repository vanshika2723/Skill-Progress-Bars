const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const bar = entry.target;
                const progress = bar.dataset.progress;

                setTimeout(() => {
                    bar.style.width = progress + "%";
                }, 150);

                observer.unobserve(bar);
            }

        });

    },
    {
        threshold: 0.3
    }
);


progressBars.forEach((bar) => {
    observer.observe(bar);
});