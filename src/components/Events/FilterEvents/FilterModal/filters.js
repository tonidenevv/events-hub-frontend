import { differenceInCalendarDays } from "date-fns";

const handlePriceFilter = (events, priceRange) => events.filter(x => x.ticketPrice >= priceRange[0] && x.ticketPrice <= priceRange[1]);

const handleDaysUntilFilter = (events, selectedRadio) => {
    if (selectedRadio === 'anyDays') return events;

    if (selectedRadio === 'zeroDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 0);

    if (selectedRadio === 'oneDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 1);

    if (selectedRadio === 'twoDayRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) === 2);

    if (selectedRadio === 'threePlusRadio') return events.filter(x => daysDifferenceFromToday(x.eventDate) >= 3);
}

const handleAttendingCountFilter = (events, selectedRadio) => {
    if (selectedRadio === 'anyAttending') return events;

    if (selectedRadio === 'oneAndMore') return events.filter(x => x.attending.length >= 1);

    if (selectedRadio === 'threeAndMore') return events.filter(x => x.attending.length >= 3);

    if (selectedRadio === 'fiveAndMore') return events.filter(x => x.attending.length >= 5);

    if (selectedRadio === 'tenAndMore') return events.filter(x => x.attending.length >= 10);
}


const handleExpiredFilter = (events, selectedRadio) => {
    if (selectedRadio === 'anyExpiry') return events;

    if (selectedRadio === 'nonExpiredFilter') return events.filter(x => daysDifferenceFromToday(x.eventDate) >= 0);

    if (selectedRadio === 'expiredFilter') return events.filter(x => daysDifferenceFromToday(x.eventDate) < 0);
}

function daysDifferenceFromToday(eventDate) {
    return differenceInCalendarDays(eventDate, new Date());
}

const filters = {
    handlePriceFilter,
    handleDaysUntilFilter,
    handleAttendingCountFilter,
    handleExpiredFilter
}

export default filters;