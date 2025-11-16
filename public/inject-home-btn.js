(function() {
    if (window.__rammerhead_home_btn_injected__) return;
    window.__rammerhead_home_btn_injected__ = true;
    
    // Don't inject on the homepage itself
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') return;
    
    function addBtn() {
        const body = document.body;
        if (!body) return setTimeout(addBtn, 100);
        
        // Don't add duplicate buttons
        if (document.getElementById('rammerhead-home-btn')) return;
        
        const btn = document.createElement('button');
        btn.id = 'rammerhead-home-btn';
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA70lEQVR4AbSQMQ8BQRSEj0avopMoqVU0/rLfoCHRqCR6nVYkCt+3txtr71wi4vJmd968eZO761c/Pn8PGPKCgqu9ut7AxTVrQg5t1qcAF1bYtxFyNdr3agvQ6MIO6yVCvoQ743pVGaBBowsuJ6d8T+NMD7SuPMCBBo0u1I7XqeZMj94wyQP8WaOgdh969AZXHrBBOYCUPoCPI+TQypkevfZVHnBHuYFUc8giQg4NpUdvaPKAIGRHD+7PFHLaZrUFTLHNwASkkqs5S1q4y4Az6gk8wBFcI+RqzvQg11UG+G2aEuxF6r3t623OMgDpu3oCAAD//zNJaNIAAAAGSURBVAMA5Q0sISpDMscAAAAASUVORK5CYII=" x="0" y="0" width="16" height="16"/>
                  </svg>`;
        
        // Style for small, transparent, top-left positioning
        btn.style.cssText = 
            'position:fixed;' +
            'top:5px;' +
            'left:5px;' +
            'z-index:9999;' +
            'width:24px;' +
            'height:24px;' +
            'background:rgba(128,128,128,0.5);' +
            'border:none;' +
            'border-radius:3px;' +
            'cursor:pointer;' +
            'opacity:0.5;' +
            'transition:opacity 0.3s ease;' +
            'padding:2px;';
        
        // Hover effects - become more visible on hover
        btn.onmouseover = function() {
            this.style.opacity = '0.8';
        };
        
        btn.onmouseout = function() {
            this.style.opacity = '0.5';
        };
        
        // Click handler - go to homepage
        btn.onclick = function() {
            window.location.href = '/';
        };
        
        body.appendChild(btn);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBtn);
    } else {
        addBtn();
    }
})();