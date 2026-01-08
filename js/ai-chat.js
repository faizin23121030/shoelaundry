document.addEventListener('DOMContentLoaded', () => {
    // Inject HTML Logic for the chat widget
    const chatWidgetHTML = `
        <div class="chat-widget-toggle" id="chatToggle">
            <i class="fas fa-robot"></i>
        </div>
        
        <div class="chat-widget-container" id="chatContainer">
            <div class="chat-header">
                <div class="chat-header-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="chat-header-info">
                    <h3>LuxBot AI</h3>
                    <p>Asisten Virtual 24/7</p>
                </div>
                <div style="margin-left: auto; cursor: pointer;" id="chatClose">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    Hai! 👋 Saya LuxBot, asisten AI LuxWash Shoes. Ada yang bisa saya bantu hari ini? 
                    <br><br>
                    Contoh: "Berapa harganya?", "Dimana lokasinya?", "Apa itu Deep Clean?"
                </div>
            </div>
            
            <div class="chat-input-area">
                <input type="text" id="chatInput" placeholder="Tulis pesan Anda...">
                <button id="chatSend">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);

    // DOM Elements
    const chatToggle = document.getElementById('chatToggle');
    const chatContainer = document.getElementById('chatContainer');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle Chat
    function toggleChat() {
        chatContainer.classList.toggle('active');
        chatToggle.classList.toggle('active');
        if (chatContainer.classList.contains('active')) {
            chatInput.focus();
        }
    }

    chatToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);

    // Send Message Logic
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add User Message
            addMessage(message, 'user');
            chatInput.value = '';

            // Simulate AI Typing
            showTypingIndicator();

            // Get Bot Response
            setTimeout(() => {
                removeTypingIndicator();
                const response = getAIResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Helper: Add Message to UI
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerHTML = text; // Using innerHTML to allow line breaks
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Helper: Typing Indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typingIndicator';
        typingDiv.classList.add('message', 'bot');
        typingDiv.innerHTML = '<i class="fas fa-ellipsis-h fa-fade"></i>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingDiv = document.getElementById('typingIndicator');
        if (typingDiv) {
            typingDiv.remove();
        }
    }

    // ==========================================
    // AI LOGIC (Simulated vs Real)
    // ==========================================
    function getAIResponse(input) {
        const lowerInput = input.toLowerCase();

        // 1. GREETINGS
        if (lowerInput.includes('halo') || lowerInput.includes('hi') || lowerInput.includes('pagi') || lowerInput.includes('malam')) {
            return "Halo! Selamat datang di LuxWash Shoes. Mau cuci sepatu jenis apa hari ini?";
        }

        // 2. PRICING (HARGA)
        if (lowerInput.includes('harga') || lowerInput.includes('biaya') || lowerInput.includes('bayar')) {
            return `
                Berikut daftar harga kami:
                <br>• <strong>Fast Clean</strong> (Midsole+Upper): Rp 35.000
                <br>• <strong>Deep Clean</strong> (All Parts): Rp 50.000
                <br>• <strong>Unyellowing/Repaint</strong>: Rp 70.000
                <br><br>Mau booking yang mana kak?
            `;
        }

        // 3. SERVICE EXPLANATION
        if (lowerInput.includes('fast clean')) {
            return "Fast Clean adalah pencucian bagian luar sepatu (Upper & Midsole). Prosesnya cepat, selesai dalam 3 hari. Cocok untuk sepatu yang tidak terlalu kotor.";
        }
        if (lowerInput.includes('deep clean')) {
            return "Deep Clean adalah perawatan menyeluruh luar dalam, termasuk tali dan insole. Bisa menghilangkan bau dan noda membandel. Estimasi 4-5 hari.";
        }
        if (lowerInput.includes('unyellowing') || lowerInput.includes('kuning')) {
            return "Unyellowing adalah proses memutihkan kembali sole sepatu yang menguning karena oksidasi. Estimasi pengerjaan 5-7 hari.";
        }

        // 4. LOCATION (LOKASI)
        if (lowerInput.includes('lokasi') || lowerInput.includes('alamat') || lowerInput.includes('dimana')) {
            return "Workshop kami ada di <strong>Jl. Bader No.224, Kalirejo, Bangil</strong>. Bisa cek di Google Maps ya!";
        }

        // 5. BOOKING
        if (lowerInput.includes('book') || lowerInput.includes('pesan') || lowerInput.includes('cuci')) {
            return "Untuk booking, kakak bisa langsung isi formulir di bagian bawah website ini, atau langsung WhatsApp kami di 0857-9070-9020. Kami juga ada layanan antar-jemput lho!";
        }

        // 6. DEFAULT FALLBACK
        /* 
           TODO: Integrasi dengan REAL AI (OpenAI / OpenRouter).
           Jika ingin pakai AI beneran, ganti return ini dengan fetch API ke backend/LLM.
        */
        return "Maaf, saya kurang mengerti. Coba tanya tentang 'harga', 'lokasi', atau 'jenis layanan' ya. Atau bisa langsung WA admin kami di tombol hijau.";
    }
});
