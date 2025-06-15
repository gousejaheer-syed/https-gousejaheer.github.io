
<script>
    const readMoreBtn = document.querySelector('.read-more-btn');

    readMoreBtn.addEventListener('click', () => {
    readMoreBtn.classList.add('wiggle')};
    setTimeout(() => {
    readMoreBtn.classList.remove('wiggle');
}, 500)
});
</script>


let downloadCvBtn;
<script>
    const downloadCvBtn = document.getElementById('downloadCvBtn');

    downloadCvBtn.addEventListener('click', (e) => {
    // Add wiggle animation class
    downloadCvBtn.classList.add('wiggle-animation'

    // Remove class after animation ends to allow repeated wiggle
    downloadCvBtn.addEventListener('animationend', () => {
    downloadCvBtn.classList.remove('wiggle-animation');
}, { once: true });
});
</script>
