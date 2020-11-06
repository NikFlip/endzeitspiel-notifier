function getEndTime() {
    let ending;

    try {
        const regex = /new Date\(now\(\) \+ ([0-9]*)/gm;
        const html = document.body.innerHTML;
        const matches = regex.exec(html);
        ending = new Date(new Date().getTime() + parseInt(matches[1]));
    } catch {}

    return ending;
}

function displayEndTime() {
    const statusField = document.getElementById('statuszeit');
    const statusContainer = document.querySelector('[data-ez-module-container]');
    const ending = getEndTime();
        
    if (!statusField || !ending) return;
    
    if (statusField.innerHTML !== 'Fertig.') {
        setTimeout(displayEndTime, 1000);
    } else {
        browser.runtime.sendMessage({
            content: `Fertig: ${new Date().toLocaleTimeString()}`
        });
    }
    
    if (!statusContainer && ending) {
        statusField.insertAdjacentHTML(
            'afterend',
            `<div data-ez-module-container>Das wird um <strong>${ending.toLocaleTimeString()} Uhr</strong> sein</div>`
        );
    }
}

/**
 * The magic stats here
 */
displayEndTime();