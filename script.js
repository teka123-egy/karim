document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('review-form');

    // إعدادات السايدبار
    if (sidebar && sidebarToggle && closeBtn) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
        });

        closeBtn.addEventListener('click', () => {
            sidebar.style.left = '-250px';
        });
    }

    // إعدادات النموذج
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const rating = document.getElementById('rating').value;
            const comments = document.getElementById('comments').value;

            const reviewData = {
                name: name,
                rating: rating,
                comments: comments
            };

            try {
                const response = await fetch('https://karim-hegazy.glitch.me/send-review.html', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reviewData)
                });

                if (response.ok) {
                    alert('تم إرسال تقييمك بنجاح!');
                    form.reset();
                } else {
                    throw new Error('فشل في إرسال تقييمك، حاول مرة أخرى.');
                }
            } catch (error) {
                console.error('حدث خطأ أثناء إرسال التقييم:', error);
                alert(error.message);
            }
        });
    }
});
