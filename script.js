const mail = document.querySelector('#mail');
const attendee = document.querySelector('#attendee-name');
const btn = document.querySelector('#btn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');

btn.addEventListener('click', () => {
    const content1 = input1.value;
    const content2 = input2.value;
    const content3 = input3.value;
    mail.textContent = content2;
    attendee.textContent = content1;
})