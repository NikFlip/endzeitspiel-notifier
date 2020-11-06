/**
 * Show a notification when we get messages from the content script.
 * Source: https://github.com/mdn/webextensions-examples/blob/master/export-helpers/background.js
 */
browser.runtime.onMessage.addListener((message) => {
    /**
     * Source: https://freesound.org/people/GameAudio/sounds/220179/
     */
    const audio = new Audio('./sounds/notification.mp3');
    audio.play(); 

    browser.notifications.create({
        type: 'basic',
        title: 'Endzeitspiel',
        message: message.content
    });
});