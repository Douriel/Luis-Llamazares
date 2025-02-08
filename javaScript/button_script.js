document.addEventListener("DOMContentLoaded", function() {
    const cvButton = document.getElementById('cv_button');
    const footer = document.getElementById('my_footer');
    
    function checkOffset() {
        if(!cvButton || !footer) return;
        
        // Get positions relative to document
        const buttonRect = cvButton.getBoundingClientRect();
        const footerRect = footer.getBoundingClientRect();
        const scrollY = window.scrollY;
        
        // Calculate document-relative positions
        const buttonBottom = scrollY + buttonRect.bottom;
        const footerTop = scrollY + footerRect.top;
        
        // Check if button is 10px above footer
        if(buttonBottom >= footerTop - 10) {
            cvButton.style.position = 'absolute';
            cvButton.style.top = `${footerTop - buttonRect.height - 10}px`;
            cvButton.style.right = '20px';
            cvButton.style.bottom = 'auto';
        } 
        // Check if viewport bottom is above footer
        if(scrollY + window.innerHeight < footerTop) {
            cvButton.style.position = 'fixed';
            cvButton.style.bottom = '20px';
            cvButton.style.top = 'auto';
            cvButton.style.right = '20px';
        }
    }

    // Initial check and event listeners
    checkOffset();
    window.addEventListener('scroll', checkOffset);
    window.addEventListener('resize', checkOffset);
});