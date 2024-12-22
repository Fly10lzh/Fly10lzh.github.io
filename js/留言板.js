const form = document.getElementById('messageForm');
        const messagesDiv = document.getElementById('messages');
        const avatarInput = document.getElementById('avatar');
        const avatarPreview = document.getElementById('avatarPreview');

        avatarInput.addEventListener('change', function() {
            const file = avatarInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    avatarPreview.src = e.target.result;
                    avatarPreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                avatarPreview.style.display = 'none';
            }
        });

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const avatarSrc = avatarPreview.src || 'https://via.placeholder.com/50'; // 默认头像

            if (name.trim() && message.trim()) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');

                const avatarElement = document.createElement('img');
                avatarElement.src = avatarSrc;
                messageElement.appendChild(avatarElement);

                const contentDiv = document.createElement('div');

                const nameElement = document.createElement('h3');
                nameElement.textContent = name;
                contentDiv.appendChild(nameElement);

                const messageContentElement = document.createElement('p');
                messageContentElement.textContent = message;
                contentDiv.appendChild(messageContentElement);

                messageElement.appendChild(contentDiv);
                messagesDiv.appendChild(messageElement);

                form.reset();
                avatarPreview.style.display = 'none';
            } else {
                alert('请输入完整的姓名和留言内容。');
            }
        });