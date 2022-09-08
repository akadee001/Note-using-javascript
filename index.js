let count = 0;
        function onSubmitHandler() {
            count++;
            let input = document.querySelector("#list-notes").value;
            document.querySelector("#count").innerHTML = count;

            //div tag will be created
            let parentElement = document.createElement("div");
            //<div class="form-group"></div>
            parentElement.classList.add("form-group");
            //<div class="form-group notes"></div>
            parentElement.classList.add("notes");

            //<p></p>
            let paragraphElement = document.createElement("p");
            let paragraphNode = document.createTextNode(count + " . " + input);
            paragraphElement.addEventListener('blur', onBlurHandler);
            //<p>welcome to programming</p>
            paragraphElement.appendChild(paragraphNode);
            //<div class="form-group notes"><p>welcome to programming</p></div>
            parentElement.appendChild(paragraphElement);

            //<button></button>
            let deleteElement = document.createElement("button");
            //<button class="form-button"></button>
            deleteElement.classList.add("form-button");
            deleteElement.addEventListener('click', onDeleteHandler);
            let deleteNode = document.createTextNode("Delete");
            //<button class="form-button">Delete</button>
            deleteElement.appendChild(deleteNode);
            //  <div class="form-group notes">
            //     <p>welcome to programming</p>
            //     <button class="form-button">Delete</button>
            //     </div>
            parentElement.appendChild(deleteElement);

            //<button></button>
            let editElement = document.createElement("button");
            editElement.addEventListener('click', onEditHandler);
            //<button class="form-button"></button>
            editElement.classList.add("form-button");
            let editNode = document.createTextNode("Edit");
            //<button class="form-button">Edit</button>
            editElement.appendChild(editNode);
            //  <div class="form-group notes">
            //     <p>welcome to programming</p>
            //     <button class="form-button">Delete</button>
            // <button class="form-button">Edit</button>
            //     </div>
            parentElement.appendChild(editElement);

            let globalList = document.querySelector("#list");

            // <div class="container" id="list">
            //         <h1>LIST OF NOTES</h1>
            //     </div>
            //  <div class="form-group notes">
            //     <p>welcome to programming</p>
            //     <button class="form-button">Delete</button>
            // <button class="form-button">Edit</button>
            //     </div>
            globalList.appendChild(parentElement);



        }

        function onDeleteHandler(event) {
            count--;
            document.querySelector("#count").innerHTML = count;
            event.target.parentElement.remove();
        }

        function onEditHandler(event) {
            event.target.parentElement.firstChild.setAttribute("contenteditable", true);
        }

        function onBlurHandler(event) {
            event.target.parentElement.firstChild.setAttribute("contenteditable", false);
        }