const enterCorrectDate = date => {
    let showMeTheDate = date.toString();

    // Gets the final character of date string.
    const finalCharacter = showMeTheDate.charAt(showMeTheDate.length - 1);

    if (finalCharacter === '1' && showMeTheDate !== '11') {
        showMeTheDate = `${showMeTheDate}st`;
    } else if (finalCharacter === '2' && showMeTheDate !== '12') {
        showMeTheDate = `${showMeTheDate}nd`;
    } else if (finalCharacter === '3' && showMeTheDate !== '13') {
        showMeTheDate = `${showMeTheDate}rd`;
    } else {
        showMeTheDate = `${showMeTheDate}th`;
    }

    return showMeTheDate;
};

// Format timestamp and accept optional parameters.
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }

    const dateObject = new Date(timestamp);
    const timeOfMonth = months[dateObject.getMonth()];

    let dayOfMonth;

    if (dateSuffix) {
        dayOfMonth = enterCorrectDate(dateObject.getDate());
    } else {
        dayOfMonth = dateObject.getDate();
    }

    const year = dateObject.getFullYear();

    let hour;
    // Checks for 24 hour timestamp.
    if (dateObject.getHours > 12) {
        hour = Math.floor(dateObject.getHours() / 2);
    } else {
        hour = dateObject.getHours();
    }
    // if hour is 0 (12:00am), change it to 12
    if (hour === 0) {
        hour = 12;
    }

    const minutes = dateObject.getMinutes();

    // Sets to AM or PM
    let timeOfDay;

    if (dateObject.getHours() >= 12) {
        timeOfDay = 'pm';
    } else {
        timeOfDay = 'am';
    }

    const currentTimeStamp = `${timeOfMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeOfDay}`;

    return currentTimeStamp;
};