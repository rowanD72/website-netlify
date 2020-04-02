/**Setting up the date counting down to */
const finalDate = new Date('May 1, 2020 12:37:25').getTime();

/**Updating every second */
const countdown = setInterval(() => {
    const now = new Date().getTime();

    /** The distance between todays date and final date */
    const distance = finalDate - now;

    /** Calculations for days, hours, minutes, seconds */
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /** Output the duration of time left */
    document.getElementById('timer').innerHTML =
        days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    /** When timer expires display message */
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = 'Site is Live';
    }
}, 1000);