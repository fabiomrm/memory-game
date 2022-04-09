export const formatTime = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    const secondsStr = String(seconds).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');

    return `${minutesStr} : ${secondsStr}`
}