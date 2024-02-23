        const list=document.querySelector('ul');
        const item=document.querySelector('#item');
        const btn=document.querySelector('button');

        btn.addEventListener('click',createList);


        function createList(){
            const currentValue=item.value;
            item.value='';

            const li=document.createElement('li');
            const span=document.createElement('span');
            const button=document.createElement('button');
            li.appendChild(span);
            li.appendChild(button);
            span.textContent=currentValue;
            button.textContent='delete';
            button.style.color='red';
            list.appendChild(li);

            button.addEventListener('click',()=>{
                return li.remove();
            });
            item.focus();

        }