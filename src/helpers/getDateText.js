export function getDateText(dateInput){
    if(dateInput.length === 0) return '';

    const date = new Date(dateInput);

    const options = {
        year:'numeric',
        month:'long',
        day:'numeric',
        timeZone:'UTC'
    };
    return date.toLocaleDateString(undefined, options);
}