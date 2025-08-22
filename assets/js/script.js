// Reveal coupon code
        function revealCoupon(element) {
            element.classList.add('revealed');
        }
        
        // Copy coupon code
        function copyCoupon(button) {
            const couponCode = button.parentElement.querySelector('.coupon-code').textContent;
            navigator.clipboard.writeText(couponCode).then(() => {
                button.textContent = 'Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            });
        }
        
        // Show brand page
        function showBrand(brand) {
            document.getElementById('home-page').style.display = 'none';
            document.getElementById(brand + '-page').style.display = 'block';
        }
        
        // Show blog post
        function showBlogPost(postId) {
            document.getElementById('home-page').style.display = 'none';
            document.getElementById(postId).style.display = 'block';
        }
        
        // Go back to home page
        function goBack() {
            document.getElementById('home-page').style.display = 'block';
            document.querySelectorAll('[id$="-page"], [id^="blog-post-"]').forEach(page => {
                if(page.id !== 'home-page') {
                    page.style.display = 'none';
                }
            });
        }
        
        // Search functionality
        document.querySelector('.search-bar button').addEventListener('click', function() {
            const query = document.querySelector('.search-bar input').value.toLowerCase();
            if(query.trim() !== '') {
                alert('Searching for: ' + query);
                // In a real implementation, you would filter brands/coupons/blog posts here
            }
        });