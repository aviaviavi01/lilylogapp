window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-log-form");
    const input = document.querySelector("#new-log-input");
    const list_el = document.querySelector("#logsss");


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const now = (new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false }));
        

        const loginputs = input.value;
        console.log("ddid");

        const logss_el = document.createElement('div');
        logss_el.classList.add('logss');

        const log_conent_el = document.createElement('div');
        log_conent_el.classList.add('content');

        logss_el.appendChild(log_conent_el);

        const log_input_el = document.createElement('textarea');
		log_input_el.classList.add('text');
		log_input_el.type = 'text';
		log_input_el.value = loginputs;
		log_input_el.setAttribute('readonly', 'readonly');

        log_conent_el.appendChild(log_input_el);

        list_el.appendChild(logss_el);
        input.value='';
        logss_el.scrollIntoView();

        const date_element = document.createElement('p');
        date_element.innerHTML = `${now}`;

        log_conent_el.appendChild(date_element);

        


    
    

    });
});